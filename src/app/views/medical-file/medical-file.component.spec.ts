import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalFileComponent } from './medical-file.component';

describe('MedicalFileComponent', () => {
  let component: MedicalFileComponent;
  let fixture: ComponentFixture<MedicalFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
