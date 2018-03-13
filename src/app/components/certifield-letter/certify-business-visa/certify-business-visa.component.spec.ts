import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifyBusinessVisaComponent } from './certify-business-visa.component';

describe('CertifyBusinessVisaComponent', () => {
  let component: CertifyBusinessVisaComponent;
  let fixture: ComponentFixture<CertifyBusinessVisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertifyBusinessVisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifyBusinessVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
