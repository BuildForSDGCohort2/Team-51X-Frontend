import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiometrieComponent } from './biometrie.component';

describe('BiometrieComponent', () => {
  let component: BiometrieComponent;
  let fixture: ComponentFixture<BiometrieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiometrieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiometrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
