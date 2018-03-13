import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifyTouristVisaComponent } from './certify-tourist-visa.component';

describe('CertifyTouristVisaComponent', () => {
  let component: CertifyTouristVisaComponent;
  let fixture: ComponentFixture<CertifyTouristVisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertifyTouristVisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifyTouristVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
