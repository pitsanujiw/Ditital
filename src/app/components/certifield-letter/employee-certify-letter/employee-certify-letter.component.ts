import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CertifyService } from '../../../services/certify.service';

@Component({
  selector: 'app-employee-certify-letter',
  templateUrl: './employee-certify-letter.component.html',
  styleUrls: ['./employee-certify-letter.component.css']
})
export class EmployeeCertifyLetterComponent implements OnInit {

  myForm: FormGroup;
  employeeID: FormControl;
  numberOfCopy: FormControl;
  note: FormControl;
  status = 0;
  typeCertifyLetter = 'employmentCertifyLetter';

  constructor(private certifyservice: CertifyService, private fb: FormBuilder) {
  }
  ngOnInit() {
    this.employeeID = this.fb.control(null);
    this.numberOfCopy = this.fb.control(null);
    this.note = this.fb.control(null);
    this.myForm = this.fb.group({
      'employeeID': this.employeeID,
      'numberOfCopy': this.numberOfCopy,
      'note': this.note
    });
  }
  public submit(): void {
    const employeeID = this.myForm.value.employeeID;
    const numberOfCopy = this.myForm.value.numberOfCopy;
    const note = this.myForm.value.note;
    const status = this.status;
    const typeCertifyLetter = this.typeCertifyLetter;
    // mock
    const firstName = 'sittikiat';
    const lastName = 'sujitranon';
    // mock
    this.certifyservice.PostEmploymentCertifyLetter(
      status,
      typeCertifyLetter,
      employeeID,
      firstName,
      lastName,
      numberOfCopy,
      note)
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
