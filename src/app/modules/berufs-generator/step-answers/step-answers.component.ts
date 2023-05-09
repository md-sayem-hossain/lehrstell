import { Component, OnInit, NgZone } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Component({
  selector: 'app-step-answers',
  templateUrl: './step-answers.component.html',
  styleUrls: ['./step-answers.component.scss']
})
export class StepAnswersComponent implements OnInit {
  response: any;
  inputData: string = '';
  
  schoolLevel_str: string = '';
  subjects_str: string = '';
  hobbies_str: string = '';
  interest_str: string = '';
  strengths_str: string = '';
  weaknesses_str: string = '';
  liketowork_str: string = '';
  concatenatedStrengths: string = '';

  constructor(public commonService: CommonService , private http: HttpClient,private zone: NgZone) { }

  ngOnInit(): void { 
    this.submit();   
  }  
  
 
  submit() {
    this.concatenateStrengths();
    this.concatenateHobbies();
    this.concatenateInterest();
    this.concatenateLiketowork();
    this.concatenateSchoolLevel();
    this.concatenateSubject();
    this.concatenateWeekness(); 

    this.generateString(); 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer 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',
    });
    const body = {
      prompt: this.inputData,
      model: 'text-davinci-002',
      max_tokens: 4000 
    };
    this.zone.runOutsideAngular(() => {
      this.http.post('https://api.openai.com/v1/completions', body, { headers })
        .subscribe((response) => {
          this.zone.run(() => {
            this.response = response;
          });
        });
    });
  }
  generateString(){
    //  console.log(this.schoolLevel_str);
    //  console.log(this.hobbies_str);
    //  console.log(this.interest_str);
    //  console.log(this.subjects_str);
    //  console.log(this.strengths_str);
    //  console.log(this.weaknesses_str);
    //  console.log(this.liketowork_str);  

     const formattedString = `
     Ich suche eine passende Lehrstelle (die zu meiner Person passt). Folgende Dinge kann ich über mich sagen:
     
     1. Ich gehe ins Schuliveau {{schulNiveauPlaceholder}}
     2. Meine Lieblingsfächer sind {{lieblingsFaecherPlaceholder}}
     3. Meine Hobbys sind {{hobbysPlaceholder}}
     4. Meine Stärken sind {{staerkenPlaceholder}}
     5. Meine Schwächen sind {{schwaechenPlaceholder}}
     6. Meine Interessen sind {{interessenPlaceholder}}
     7. Ich arbeite gerne {{arbeitPlaceholder}}
     
     Kannst du anhand der Webseiten https://www.berufsberatung.ch , yousty.ch und gatewayone.ch passende Lehrstellen zu meiner Person finden (die fünf passendsten aufführen)? In der Antwort dürfen die Webseiten nicht aufgeführt/erwähnt werden. Die Antwort soll wie folgt sein: Aufgrund deiner Angaben, könnten folgende Lehrberufe zu dir passen: dann jeweils die Berufe und jeweils ein Satz warum dieser zur Person passt (die Berufe fett und aufgezählt 1. 2. 3. 4. 5.)
     `;

     const formattedStringWithValues = formattedString
    .replace('{{schulNiveauPlaceholder}}', this.schoolLevel_str)
    .replace('{{lieblingsFaecherPlaceholder}}', this.subjects_str)
    .replace('{{hobbysPlaceholder}}', this.hobbies_str)
    .replace('{{staerkenPlaceholder}}', this.strengths_str)
    .replace('{{schwaechenPlaceholder}}', this.weaknesses_str)
    .replace('{{interessenPlaceholder}}',this.interest_str)
    .replace('{{arbeitPlaceholder}}', this.liketowork_str);

    console.log(formattedStringWithValues); 
    // this.inputData =  formattedStringWithValues; 
    this.inputData =  'describe dictionary with code in 5 paragraph'; 
  }

  private concatenateStrengths() {
    let values = [];  
    for (let i = 1; i <= 16; i++) { 
      const strengthKey = 'strength_' + i;
      const strengthValue = this.commonService.berufsForm[strengthKey];
       if (strengthValue !== "") {
        values.push(strengthValue);
      }
    } 
    this.strengths_str = values.join(', ');
  }
  private concatenateWeekness() {
    let values = [];  
    for (let i = 1; i <= 16; i++) { 
      const weeknessKey = 'weakness_' + i;
      const weeknessValue = this.commonService.berufsForm[weeknessKey];
       if (weeknessValue !== "") {
        values.push(weeknessValue);
      }
    } 
    this.weaknesses_str = values.join(', ');
  }
  private concatenateLiketowork() {
    let values = [];  
    for (let i = 1; i <= 14; i++) { 
      const liketoworkKey = 'liketowork_' + i;
      const liketoworkValue = this.commonService.berufsForm[liketoworkKey];
       if (liketoworkValue !== "") {
        values.push(liketoworkValue);
      }
    } 
    this.liketowork_str = values.join(', ');
  }
  private concatenateSchoolLevel() {
    let values = [];  
    for (let i = 1; i <= 3; i++) { 
      const schoolKey = 'schoolLevel' + i;
      const schoolValue = this.commonService.berufsForm[schoolKey];
       if (schoolValue !== "") {
        values.push(schoolValue);
      }
    } 
    this.schoolLevel_str = values.join(', ');
  }
  private concatenateHobbies() {
    let values = [];  
    for (let i = 1; i <= 4; i++) { 
      const hobbiesKey = 'hobbies' + i;
      const hobbiesValue = this.commonService.berufsForm[hobbiesKey];
       if (hobbiesValue !== "") {
        values.push(hobbiesValue);
      }
    } 
    this.hobbies_str = values.join(', ');
  }
  private concatenateInterest() {
    let values = [];  
    for (let i = 1; i <= 4; i++) { 
      const InterestKey = 'interest' + i;
      const InterestValue = this.commonService.berufsForm[InterestKey];
       if (InterestValue !== "") {
        values.push(InterestValue);
      }
    } 
    this.interest_str = values.join(', ');
  }
  private concatenateSubject() {
    let values = [];  
    for (let i = 1; i <= 4; i++) { 
      const subjectKey = 'subject' + i;
      const subjectValue = this.commonService.berufsForm[subjectKey];
       if (subjectValue !== "") {
        values.push(subjectValue);
      }
    } 
    this.subjects_str = values.join(', ');
  }


  onBack() {
    this.commonService.msStep = 7;
    localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep));
  }
}