import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-step-six-two',
  templateUrl: './step-six-two.component.html',
  styleUrls: ['./step-six-two.component.scss']
})
export class StepSixTwoComponent implements OnInit {
  berufsForm!: FormGroup;
  showDoneBtn = false;

  constructor(public commonService: CommonService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let berufsForm = this.commonService.berufsForm;
    if (berufsForm) {
      this.initberufsForm(berufsForm);
    } else {
      this.initberufsForm();
    }
    let berufsFormLocalStorage = localStorage.getItem('berufsForm');
    
    if (berufsFormLocalStorage) {
      this.initberufsForm(JSON.parse(berufsFormLocalStorage));
    }
  }

  get f() {
    return this.berufsForm.controls;
  } 
 
  initberufsForm(data?: any) {
    if (data) { 
     this.berufsForm = this._formBuilder.group({ 
      
      // scholl level (Page 1)
      schoolLevel1: [data?.schoolLevel1? "school level 1" :'', Validators.required],
      schoolLevel2: [data?.schoolLevel2? "school level 2" :'', Validators.required],
      schoolLevel3: [data?.schoolLevel3? "school level 3" : '', Validators.required], 

      // Subject (Page 2)
      subject1: [data?.subject1 || '', Validators.required],
      subject2: [data?.subject2 || '', Validators.required],
      subject3: [data?.subject3 || '', Validators.required],
      subject4: [data?.subject4 || '', Validators.required],

      // Hobbies (Page 3)
      hobbies1: [data?.hobbies1 || ''],
      hobbies2: [data?.hobbies2 || ''],
      hobbies3: [data?.hobbies3 || ''],
      hobbies4: [data?.hobbies4 || ''],

      // Hobbies (Page 4)
      interest1: [data?.interest1 || ''],
      interest2: [data?.interest2 || ''],
      interest3: [data?.interest3 || ''],
      interest4: [data?.interest4 || ''],

      // strength (Page 5)
      strength_1:[data?.strength_1? "Ich bin sportlich und ausdauernd" :'', Validators.required],
      strength_2:[data?.strength_2? "Ich kann in stressigen Situationen ruhig bleiben" :'', Validators.required],
      strength_3:[data?.strength_3? "Ich kann genau arbeiten (z.B. im Werken/TG)" :'', Validators.required],
      strength_4:[data?.strength_4? "Ich bin zuverlässig und erledige alle Aufgaben" :'', Validators.required],
      strength_5:[data?.strength_5? "Ich bin fleissig" :'', Validators.required],
      strength_6:[data?.strength_6? "Ich kann mich lange konzentrieren" :'', Validators.required],
      strength_7:[data?.strength_7? "Ich bin handwerklich begabt" :'', Validators.required],
      strength_8:[data?.strength_8? "Ich bin ein Organisationstalent" :'', Validators.required],
      strength_9:[data?.strength_9? "Ich kann gut im Team arbeiten" :'', Validators.required],
      strength_10:[data?.strength_10? "Ich verstehe neue Aufgaben schnell" :'', Validators.required],
      strength_11:[data?.strength_11? "Ich helfe gerne anderen Menschen" :'', Validators.required],
      strength_12:[data?.strength_12? "Ich kann andere Menschen gut beraten" :'', Validators.required],
      strength_13:[data?.strength_13? "Ich kann ohne Angst mit Fremden sprechen" :'', Validators.required],
      strength_14:[data?.strength_14? "Ich kann gut alleine und selbständig arbeiten" :'', Validators.required],
      strength_15:[data?.strength_15? "Andere Menschen finden mich symphatisch" :'', Validators.required],
      strength_16:[data?.strength_16? "Ich bin kreativ" :'', Validators.required],

      // weakness (Page 6)
      weakness_1:[data?.weakness_1? "Ich bin nicht sehr sportlich" :'', Validators.required],
      weakness_2:[data?.weakness_2? "Stressige Aufgaben überfordern mich schnell" :'', Validators.required],
      weakness_3:[data?.weakness_3? "Genaues Arbeiten ist nicht meine Stärke" :'', Validators.required],
      weakness_4:[data?.weakness_4? "Ich vergesse häufig die Hausaufgaben" :'', Validators.required],
      weakness_5:[data?.weakness_5? "Ich drücke mich oft vor wichtigen Aufgaben" :'', Validators.required],
      weakness_6:[data?.weakness_6? "Ich kann mich nicht lange konzentrieren" :'', Validators.required],
      weakness_7:[data?.weakness_7? "Ich bin handwerklich nicht der Beste" :'', Validators.required],
      weakness_8:[data?.weakness_8? "Teamarbeiten überfordern mich" :'', Validators.required],
      weakness_9:[data?.weakness_9? "Bei neuen Aufgaben muss ich häufig nachfragen" :'', Validators.required],
      weakness_10:[data?.weakness_10? "Vor fremden Menschen spreche ich nicht gerne" :'', Validators.required],
      weakness_11:[data?.weakness_11? "Ich kann nicht gut Entscheidungen treffen" :'', Validators.required],
      weakness_12:[data?.weakness_12? "Ich bin chaotisch" :'', Validators.required],
      weakness_13:[data?.weakness_13? "Ich bin eher scheu" :'', Validators.required],
      weakness_14:[data?.weakness_14? "Ich kann nicht lange stehen (z.B. Verkauf)" :'', Validators.required],
      weakness_15:[data?.weakness_15? "Ich kann schnell wütend werden." :'', Validators.required],
      weakness_16:[data?.weakness_16? "Ich bin nicht sehr kreativ" :'', Validators.required],
      
     // liketowork (Page 7)
      liketowork_1:[data?.liketowork_1? "Ich arbeite gerne alleine" :'', Validators.required],
      liketowork_2:[data?.liketowork_2? "Ich arbeite gerne mit anderen zusammen" :'', Validators.required],
      liketowork_3:[data?.liketowork_3? "Ich arbeite gerne draussen (bei jedem Wetter)" :'', Validators.required],
      liketowork_4:[data?.liketowork_4? "Ich arbeite gerne drinnen (z.B. Büro)" :'', Validators.required],
      liketowork_5:[data?.liketowork_5? "Ich arbeite gerne in der Natur" :'', Validators.required],
      liketowork_6:[data?.liketowork_6? "Ich arbeite gerne handwerklich" :'', Validators.required],
      liketowork_7:[data?.liketowork_7? "Ich arbeite gerne am Computer" :'', Validators.required],
      liketowork_8:[data?.liketowork_8? "Ich helfe gerne anderen Menschen" :'', Validators.required],
      liketowork_9:[data?.liketowork_9? "Ich berate gerne andere Menschen" :'', Validators.required],
      liketowork_10:[data?.liketowork_10? "Ich arbeite gerne mit Kindern" :'', Validators.required],
      liketowork_11:[data?.liketowork_11? "Ich telefoniere gerne" :'', Validators.required],
      liketowork_12:[data?.liketowork_12? "Ich arbeite gerne mit Maschinen" :'', Validators.required],
      liketowork_13:[data?.liketowork_13? "Ich arbeite gerne kreativ und gestalterisch" :'', Validators.required],
      liketowork_14:[data?.liketowork_14? "Kalte Temperaturen machen mir nichts aus" :'', Validators.required]
      

    });
  } else {
    this.berufsForm = this._formBuilder.group({
      schoolLevel1: ['', Validators.required],
      schoolLevel2: ['', Validators.required],
      schoolLevel3: ['', Validators.required], 

      subject1: ['', Validators.required],
      subject2: ['', Validators.required],
      subject3: ['', Validators.required],
      subject4: ['', Validators.required],

      hobbies1: [''],
      hobbies2: [''],
      hobbies3: [''],
      hobbies4: [''],

      interest1: [''],
      interest2: [''],
      interest3: [''],
      interest4: [''], 

      strength_1: ['', Validators.required],
      strength_2: ['', Validators.required],
      strength_3: ['', Validators.required],
      strength_4: ['', Validators.required],
      strength_5: ['', Validators.required],
      strength_6: ['', Validators.required],
      strength_7: ['', Validators.required],
      strength_8: ['', Validators.required],
      strength_9: ['', Validators.required],
      strength_10: ['', Validators.required],
      strength_11: ['', Validators.required],
      strength_12: ['', Validators.required],
      strength_13: ['', Validators.required],
      strength_14: ['', Validators.required],
      strength_15: ['', Validators.required],
      strength_16: ['', Validators.required],  

      weakness_1: ['', Validators.required],
      weakness_2: ['', Validators.required],
      weakness_3: ['', Validators.required],
      weakness_4: ['', Validators.required],
      weakness_5: ['', Validators.required],
      weakness_6: ['', Validators.required],
      weakness_7: ['', Validators.required],
      weakness_8: ['', Validators.required],
      weakness_9: ['', Validators.required],
      weakness_10: ['', Validators.required],
      weakness_11: ['', Validators.required],
      weakness_12: ['', Validators.required],
      weakness_13: ['', Validators.required],
      weakness_14: ['', Validators.required],
      weakness_15: ['', Validators.required],
      weakness_16: ['', Validators.required], 

      liketowork_1: ['', Validators.required],
      liketowork_2: ['', Validators.required],
      liketowork_3: ['', Validators.required],
      liketowork_4: ['', Validators.required],
      liketowork_5: ['', Validators.required],
      liketowork_6: ['', Validators.required],
      liketowork_7: ['', Validators.required],
      liketowork_8: ['', Validators.required],
      liketowork_9: ['', Validators.required],
      liketowork_10: ['', Validators.required],
      liketowork_11: ['', Validators.required],
      liketowork_12: ['', Validators.required],
      liketowork_13: ['', Validators.required],
      liketowork_14: ['', Validators.required]

    });
  }
}

  onNext() {
    this.commonService.msStep = 9
    this.commonService.berufsForm = this.berufsForm.value;
    localStorage.setItem('berufsForm', JSON.stringify(this.berufsForm.value));
    localStorage.setItem('weaknesses', JSON.stringify(this.commonService.weaknesses));
    console.log(this.berufsForm.value); 
  }
  onBack() {
    this.commonService.msStep = 7
    localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))
  }
 


}
