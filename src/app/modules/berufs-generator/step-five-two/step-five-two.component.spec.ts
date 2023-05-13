import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFiveTwoComponent } from './step-five-two.component';

describe('StepFiveTwoComponent', () => {
  let component: StepFiveTwoComponent;
  let fixture: ComponentFixture<StepFiveTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepFiveTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFiveTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
