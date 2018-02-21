import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCertifyLetterComponent } from './employee-certify-letter.component';

describe('EmployeeCertifyLetterComponent', () => {
  let component: EmployeeCertifyLetterComponent;
  let fixture: ComponentFixture<EmployeeCertifyLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeCertifyLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCertifyLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
