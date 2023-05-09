import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerufsGeneratorComponent } from './berufs-generator.component';

describe('BerufsGeneratorComponent', () => {
  let component: BerufsGeneratorComponent;
  let fixture: ComponentFixture<BerufsGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerufsGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerufsGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
