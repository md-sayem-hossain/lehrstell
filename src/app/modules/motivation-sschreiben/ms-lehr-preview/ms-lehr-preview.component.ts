import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { CommonService } from 'src/app/core/services/common.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  BorderStyle,
  ImageRun,
  TextWrappingType,
  TextWrappingSide,
  Alignment,
  ThematicBreak,
  InsertedTextRun,
} from 'docx';
import { DatePipe } from '@angular/common';


import { NgIf } from '@angular/common';
import { lineBreak, LINE_BREAK } from 'html2canvas/dist/types/css/property-descriptors/line-break';
import { EMPTY, empty } from 'rxjs';
import { wordBreak } from 'html2canvas/dist/types/css/property-descriptors/word-break';

@Component({
  selector: 'app-ms-lehr-preview',
  templateUrl: './ms-lehr-preview.component.html',
  styleUrls: ['./ms-lehr-preview.component.scss'],
})
export class MsLehrPreviewComponent implements OnInit {
  constructor(
    public commonService: CommonService,
    private router: Router,
    public sanitizer: DomSanitizer
  ) { }
  @ViewChild('content') content!: ElementRef;
  beilagen = '';

  ngOnInit(): void {
    let beilagenArray = [];
    beilagenArray.push(
      this.commonService.lehrStepThreeData.lebenslauf ? 'Lebenslauf' : ''
    );
    beilagenArray.push(
      this.commonService.lehrStepThreeData.zeugnisse ? 'Zeugnisse' : ''
    );
    beilagenArray.push(
      this.commonService.lehrStepThreeData.stellwerktest ? 'Stellwerktest' : ''
    );
    beilagenArray.push(
      this.commonService.lehrStepThreeData.Schnupperberichte
        ? 'Schnupperberichte'
        : ''
    );
    beilagenArray.push(
      this.commonService.lehrStepThreeData.multicheck ? 'Multicheck' : ''
    );
    beilagenArray.push(this.commonService.lehrStepThreeData.eigene);
    var filtered = beilagenArray.filter((el: any) => {
      return el != '';
    });
    this.beilagen = filtered.join(' / ');
    // console.log("array-->", this.beilagen)
  }

  onBack() {
    this.router.navigateByUrl('/motivation-sschreiben');
  }

  loader = false;
  exportToPDF() {
    this.loader = true;
    let that = this;
    html2canvas(document.getElementById('pdf-page')!, {
      allowTaint: true,
      scale: 4,
      width: this.content.nativeElement.offsetWidth,
      height: this.content.nativeElement.offsetHeight,
    }).then(function (canvas) {
      const contentDataURL = canvas.toDataURL('image/jpeg');
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var width = pdf.internal.pageSize.getWidth();
      var height = (canvas.height * width) / canvas.width;
      pdf.addImage(contentDataURL, 'JPEG', 0, 0, width, height);
      let name =
        'lehrstell-motivation-sschreiben' + new Date().toUTCString() + '.pdf';
      pdf.save(name); // Generated PDF
      that.loader = false;
    });
  } 


  // `${this.commonService.msPersonalForm?.schreibst != 'unknown'? :``}`,
  frname =  this.commonService.msPersonalForm?.schreibst1Name==''? ' ': ' '+this.commonService.msPersonalForm?.schreibst1Name+' ';

  liness = this.commonService.msPersonalForm?.schreibst != 'unknown' ? this.commonService.msPersonalForm?.schreibst + this.frname + this.commonService.msPersonalForm?.schreibst2Name : ``;
  textRuns = this.commonService.msPersonalForm?.schreibst != 'unknown' ? this.liness.split('\n').map(line => new TextRun({ break: 1, text: line })) : this.liness.split('\n').map(line => new TextRun({ text: line }))


  //sayem
  exportToWord() {
    const doc = new Document({
      styles: {
        default: {
          heading2: {
            run: {
              size: 26,
              bold: true,
              color: '000000',
              font: 'Calibri',
            },
            paragraph: {
              spacing: {
                after: 400,
              },
            },
          },
        },
        paragraphStyles: [
          {
            id: 'paragraphStyle',
            name: 'ParagraphStyle',
            basedOn: 'Normal',
            next: 'Normal',
            quickFormat: true,
            run: {
              size: 24,
              color: '000000',
              font: 'Calibri',
            },
          },
        ],
      },
      title: 'lehrstell-motivation-sschreiben',
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: '2.5cm',
                bottom: '2.5cm',
                left: '2.5cm',
                right: '2.5cm',
              },
            },
          },
          children: [
            new Paragraph({
              style: 'paragraphStyle',
              spacing: {
              },
              children: [

                new TextRun({
                  size: 24,
                  font: 'Calibri',
                  text: `${this.commonService.msPersonalForm?.firstName + ' ' + this.commonService.msPersonalForm?.lastName}`,
                }),


                new TextRun({
                  break: 1,
                  size: 24,
                  font: 'Calibri',
                  text: `${this.commonService.msPersonalForm?.street + ' ' + this.commonService.msPersonalForm?.number}`,
                }),

                new TextRun({
                  break: 1,
                  size: 24,
                  font: 'Calibri',
                  text: `${this.commonService.msPersonalForm?.zip + ' ' + this.commonService.msPersonalForm?.place}`,
                }),

                new TextRun({
                  break: 1,
                  size: 24,
                  font: 'Calibri',
                  text: `${this.commonService.msPersonalForm?.email}`,
                }),

                new TextRun({
                  break: 1,
                  font: 'Calibri',
                  size: 24,
                  text: `${this.commonService.msPersonalForm?.mobile}`,
                }),



                

                new TextRun({
                  break: 2,
                  font: 'Calibri',
                  size: 24,
                  text: `${this.commonService.msPersonalForm?.derFirma}`,
                }),

                new TextRun({
                  size: 24,
                  font: 'Calibri',
                  text: `${this.commonService.msPersonalForm?.schreibst == 'unknown' ? '' : ''}`,
                }),




                new TextRun({
                  font: 'Calibri',
                  size: 24,
                  children: this.textRuns,
                  // text: `${this.commonService.msPersonalForm?.schreibst != 'unknown'? this.commonService.msPersonalForm?.schreibst+ this.commonService.msPersonalForm?.schreibst1Name+' '+this.commonService.msPersonalForm?.schreibst2Name:``}`,
                }),



                new TextRun({
                  font: 'Calibri',
                  break: 1,
                  size: 24,
                  text: `${this.commonService.msPersonalForm?.dfStreet}`,
                }),
                new TextRun({
                  break: 1,
                  font: 'Calibri',
                  size: 24,
                  text: `${this.commonService.msPersonalForm?.dfZip + ' ' + this.commonService.msPersonalForm?.dfPlace}`,
                }),



             
                new TextRun({
                  font: 'Calibri',
                  break: 2,
                  size: 24,
                  text: `${this.commonService.msPersonalForm?.place ? this.commonService.msPersonalForm?.place + ', ' : ''}${this.commonService.msPersonalForm?.dob ? new DatePipe('de-ch').transform(this.commonService.msPersonalForm?.dob, 'dd. MMMM yyyy') : ''}`,
                }),




                //         <p align="justify"><b> Bewerbung um eine {{commonService.msType |titlecase}} als
                //         {{commonService.msPersonalForm?.dfBeruf |titlecase}}
                //         {{commonService.msPersonalForm?.ebaOrEfz }}</b>
                // </p>

                new TextRun({
                  font: 'Calibri',
                  break: 3,
                  size: 24,
                  bold: true,
                  text: `${this.commonService?.msType == 'lehrstelle' ? 'Bewerbung um eine Lehrstelle als ' : 'Bewerbung um eine Schnupperlehre als '}`,
                }),
                new TextRun({
                  bold: true,
                  font: 'Calibri',
                  size: 24,
                  text: `${this.commonService.msPersonalForm?.dfBeruf + ' '}`,
                }),
                new TextRun({
                  bold: true,
                  size: 24,
                  font: 'Calibri',
                  text: `${this.commonService.msPersonalForm?.ebaOrEfz}`,
                }),



                // <p class="mb-15px" *ngIf="commonService.msPersonalForm?.schreibst=='unknown'">
                //           
                //       </p>

                new TextRun({
                  font: 'Calibri',
                  break: 3,
                  size: 24, 
                  text: `${this.commonService.msPersonalForm?.schreibst == 'unknown' ? 'Sehr geehrte Damen und Herren' : this.commonService.msPersonalForm?.schreibst == 'Frau' ? 'Sehr geehrte Frau '+this.commonService.msPersonalForm?.schreibst2Name : '' + this.commonService.msPersonalForm?.schreibst == 'Herr' ? 'Sehr geehrter Herr '+ this.commonService.msPersonalForm?.schreibst2Name : ''}`,
                }),




                // new TextRun({
                //   break: 2,
                //   // bold: true,
                //   font: 'Calibri',
                //   size: 24,
                //   text: `${this.commonService.msPersonalForm?.schreibst != 'unknown' ?  : ''}`,
                // }),

                // new TextRun({
                //   size: 24,
                //   font: 'Calibri',
                //   // break:1,
                //   text: `${this.commonService.msPersonalForm?.schreibst != 'unknown' ? ' ' + this.commonService.msPersonalForm?.schreibst2Name : ''}`,
                // }),

              ],
            }),
            new Paragraph({
              children: [
                // new TextRun({
                //   font: 'Calibri',
                //   size: 24,
                //   text: `${this.commonService.msPersonalForm?.schreibst == 'unknown' ? this.commonService.lehrStepTwoData2.textArea1:''}`,
                // }),
                new TextRun({
                  break:1,
                  font: 'Calibri',
                  size: 24,
                  text: `${this.commonService.lehrStepTwoData2.textArea1}`,
                }),
                new TextRun({
                  break: 2,
                  size: 24,
                  font: 'Calibri',
                  text: `${this.commonService.lehrStepTwoData2.textArea2}`,
                }),
                new TextRun({
                  break: 2,
                  font: 'Calibri',
                  size: 24,
                  text: `${this.commonService.lehrStepTwoData2.textArea3}`,
                }),
                new TextRun({
                  break: 2,
                  size: 24,
                  font: 'Calibri',
                  text: `${this.commonService.lehrStepThreeData.textArea1}`,
                }),
                new TextRun({
                  break: 2,
                  size: 24,
                  font: 'Calibri',
                  text: `Ich freue mich, wenn Sie mich zu einem Vorstellungsgespräch einladen, damit ich Sie von meiner Persönlichkeit überzeugen kann und warte gespannt auf Ihre Antwort.`,
                }),


              ],
            }),

            new Paragraph({
              children: [

                new TextRun({
                  break: 2,
                  font: 'Calibri',
                  size: 24,
                  text: `Freundliche Grüsse`,
                }),


                new TextRun({
                  break: 2,
                  font: 'Calibri',
                  size: 24,
                  text: `${this.commonService.msPersonalForm?.firstName + ' ' + this.commonService.msPersonalForm?.lastName}`,
                }),
                //     <p align="justify">
                //     {{commonService.msPersonalForm?.firstName +' '+commonService.msPersonalForm?.lastName}}
                //     <!-- Mike Muster -->
                // </p>




                new TextRun({
                  break: 4,
                  size: 24,
                  font: 'Calibri',
                  text: `${this.beilagen != '' ? 'Beilagen: ' : ''}`,
                }),
                new TextRun({
                  break: 1,
                  font: 'Calibri',
                  size: 24,
                  text: `${this.beilagen}`,
                }),


                //     <p class="ms-bottom-text" *ngIf="beilagen!=''">Beilagen: <br>
                //     {{beilagen}}
                // </p>







                // <!-- Static text -->
                // <p align="justify">Ich freue mich, wenn Sie mich zu einem Vorstellungsgespräch einladen, damit ich Sie von meiner Persönlichkeit überzeugen kann und warte gespannt auf Ihre Antwort.
                // </p><br/>
                // <!-- Static text -->
                // <p align="justify">
                // </p>






                // <div class="mb-10"></div>
                // <p align="justify">
                //   {{}}
                //   <!-- Mike Muster -->
                // </p>



                // <!-- Static heading -->
                // <div class="mb-10"></div>
                // <p class="ms-bottom-text" *ngIf="beilagen!=''">Beilagen: <br>
                //   {{beilagen}}
                // </p>



              ],
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {

      let url = window.URL.createObjectURL(blob);
      let a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = url;
      a.download =
        'lehrstell-motivation-sschreiben' + new Date().toUTCString() + '.doc';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    });
  }

  // exportToWord() {
  //   var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>lehrstell-motivation-sschreiben</title></head><body style='font-family: Calibri'>";
  //   var postHtml = "</body></html>";
  //   var html = preHtml + this.content.nativeElement.innerHTML + postHtml;

  //   // Specify link url
  //   var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

  //   // Specify file name
  //   let filename = 'lehrstell-motivation-sschreiben' + new Date().toUTCString() + '.doc'
  //   // Create download link element
  //   var downloadLink = document.createElement("a");

  //   document.body.appendChild(downloadLink);

  //   downloadLink.href = url;

  //   // Setting the file name
  //   downloadLink.download = filename;

  //   //triggering the function
  //   downloadLink.click();
  //   document.body.removeChild(downloadLink);

  // }

  isObjectEmpty(Obj: any) {
    for (var key in Obj) {
      if (Obj.hasOwnProperty(key)) return false;
    }
    return true;
  }
}
