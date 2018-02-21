import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CertifyService } from '../../../services/certify.service';
@Component({
  selector: 'app-certify-housing-loan',
  templateUrl: './certify-housing-loan.component.html',
  styleUrls: ['./certify-housing-loan.component.css']
})
export class CertifyHousingLoanComponent implements OnInit {
  myForm: FormGroup;
  employeeID: FormControl;
  numberOfCopy: FormControl;
  BBL: FormControl;
  GHB: FormControl;
  LHBank: FormControl;
  UOB: FormControl;
  note: FormControl;
  status = 0;
  typeCertifyLetter = 'certifyLetterForFurtherEducation';
  constructor(private certifyService: CertifyService, private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeID = this.fb.control(null);
    this.numberOfCopy = this.fb.control(null);
    this.BBL = this.fb.control(null);
    this.GHB = this.fb.control(null);
    this.LHBank = this.fb.control(null);
    this.UOB = this.fb.control(null);
    this.note = this.fb.control(null);
    this.myForm = this.fb.group({
      'employeeID': this.employeeID,
      'numberOfCopy': this.numberOfCopy,
      'BBL': this.BBL,
      'GHB': this.GHB,
      'LHBank': this.LHBank,
      'UOB': this.UOB,
      'note': this.note,
    });
  }
  public submit(): void {
    const status = this.status;
    const typeCertifyLetter = this.typeCertifyLetter;
    const employeeID = this.myForm.value.employeeID;
    // mock
    const firstName = 'sittikiat';
    const lastName = 'sujitranon';
    // mock
    const note = this.myForm.value.note;
    const BBL = this.myForm.value.BBL;
    const GHB = this.myForm.value.GHB;
    const LHBank = this.myForm.value.LHBank;
    const UOB = this.myForm.value.UOB;
    this.certifyService.PostHousingLetter(
      status,
      typeCertifyLetter,
      employeeID,
      firstName,
      lastName,
      note,
      BBL,
      GHB,
      LHBank,
      UOB)
      .subscribe(
        res => {
          alert(res.message);
        },
        err => {
          throw err;
        },
        () => {
          this.myForm.reset();
        }
      );
  }
}
