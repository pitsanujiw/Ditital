import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifyHousingLoanComponent } from './certify-housing-loan.component';

describe('CertifyHousingLoanComponent', () => {
  let component: CertifyHousingLoanComponent;
  let fixture: ComponentFixture<CertifyHousingLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertifyHousingLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifyHousingLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
