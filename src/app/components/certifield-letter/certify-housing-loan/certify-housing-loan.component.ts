import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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
  BBL = false;
  GHB = false;
  LHBank = false;
  UOB = false;
  note: FormControl;
  status = 0;
  typeCertifyLetter = 'certifyLetterForHousingLoan';
  constructor(private certifyService: CertifyService, private fb: FormBuilder) { }


  ngOnInit() {
    this.employeeID = this.fb.control(null, Validators.required);
    this.numberOfCopy = this.fb.control(null);
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
          // alert(res.message);
        },
        err => {
          throw err;
        },
        () => {
          // window.location.reload(true);
        }
      );
  }
}
