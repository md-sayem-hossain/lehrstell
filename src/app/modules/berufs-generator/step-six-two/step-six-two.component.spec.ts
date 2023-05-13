import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSixTwoComponent } from './step-six-two.component';

describe('StepSixTwoComponent', () => {
  let component: StepSixTwoComponent;
  let fixture: ComponentFixture<StepSixTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepSixTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepSixTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
