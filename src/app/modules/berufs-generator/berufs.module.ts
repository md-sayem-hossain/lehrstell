import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BerufsRoutingModule } from './berufs-routing.module';

import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';
import { StepFiveComponent } from './step-five/step-five.component';
import { StepSixComponent } from './step-six/step-six.component';
import { StepSevenComponent } from './step-seven/step-seven.component'; 
import { StepAnswersComponent } from './step-answers/step-answers.component';

import { BerufsGeneratorComponent } from './berufs-generator.component';
 

@NgModule({
  declarations: [
    BerufsGeneratorComponent,
    StepOneComponent, 
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepFiveComponent,
    StepSixComponent,
    StepSevenComponent, 
    StepAnswersComponent
  ],
  imports: [
    CommonModule,
    BerufsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BerufsModule { }
