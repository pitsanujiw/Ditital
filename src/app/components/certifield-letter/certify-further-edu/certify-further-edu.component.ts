import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder , Validators} from '@angular/forms';
import { CertifyService } from '../../../services/certify.service';

@Component({
  selector: 'app-certify-further-edu',
  templateUrl: './certify-further-edu.component.html',
  styleUrls: ['./certify-further-edu.component.css']
})
export class CertifyFurtherEduComponent implements OnInit {
  myForm: FormGroup;
  employeeID: FormControl;
  numberOfCopy: FormControl;
  note: FormControl;
  status = 0;
  typeCertifyLetter = 'certifyLetterForFurtherEducation';
  constructor(private certiftyService: CertifyService, private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeID = this.fb.control(null , Validators.required);
    this.numberOfCopy = this.fb.control(null , Validators.required);
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
    const firstName = '';
    const lastName = '';
    // mock
    this.certiftyService.PostFurtherEduLetter(
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
