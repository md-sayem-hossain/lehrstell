import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepAnswersComponent } from './step-answers.component';

describe('StepAnswersComponent', () => {
  let component: StepAnswersComponent;
  let fixture: ComponentFixture<StepAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepAnswersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
