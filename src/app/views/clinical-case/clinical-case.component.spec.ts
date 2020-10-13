import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalCaseComponent } from './clinical-case.component';

describe('ClinicalCaseComponent', () => {
  let component: ClinicalCaseComponent;
  let fixture: ComponentFixture<ClinicalCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
