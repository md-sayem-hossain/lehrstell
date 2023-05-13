import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSevenTwoComponent } from './step-seven-two.component';

describe('StepSevenTwoComponent', () => {
  let component: StepSevenTwoComponent;
  let fixture: ComponentFixture<StepSevenTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepSevenTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepSevenTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
