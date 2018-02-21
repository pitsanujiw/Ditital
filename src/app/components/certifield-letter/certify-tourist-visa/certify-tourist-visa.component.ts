import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CertifyService } from '../../../services/certify.service';
@Component({
  selector: 'app-certify-tourist-visa',
  templateUrl: './certify-tourist-visa.component.html',
  styleUrls: ['./certify-tourist-visa.component.css']
})

export class CertifyTouristVisaComponent implements OnInit {


  formData = new FormData();
  myForm: FormGroup;
  employeeID: FormControl;
  numberOfCopy: FormControl;
  firstNamePassport: FormControl;
  lastNamePassport: FormControl;
  filesID: string;
  note: FormControl;
  passportNumber: FormControl;
  passportExpiryDate: FormControl;
  embassyForVisaApplication: FormControl;
  countryOfVisit: FormControl;
  from: FormControl;
  to: FormControl;
  status = 0;
  typeCertifyLetter = 'certifyLetterForTouristVisaApplication';

  constructor(private fb: FormBuilder, private certifyLetterService: CertifyService) { }

  ngOnInit() {
    this.employeeID = this.fb.control(null);
    this.numberOfCopy = this.fb.control(null);
    this.firstNamePassport = this.fb.control(null);
    this.lastNamePassport = this.fb.control(null);
    this.note = this.fb.control(null);
    this.passportNumber = this.fb.control(null);
    this.passportExpiryDate = this.fb.control(null);
    this.embassyForVisaApplication = this.fb.control(null);
    this.countryOfVisit = this.fb.control(null);
    this.from = this.fb.control(null);
    this.to = this.fb.control(null);

    this.myForm = this.fb.group({
      'employeeID': this.employeeID,
      'numberOfCopy': this.numberOfCopy,
      'firstNamePassport': this.firstNamePassport,
      'lastNamePassport': this.lastNamePassport,
      'passportNumber': this.passportNumber,
      'passportExpiryDate': this.passportExpiryDate,
      'embassyForVisaApplication': this.embassyForVisaApplication,
      'countryOfVisit': this.countryOfVisit,
      'from': this.from,
      'to': this.to,
      'note': this.note
    });
  }
  onFileChange(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.formData.append('files', files[i], files[i].name);
    }
    // post file to backend
    this.certifyLetterService.postFilesTourVisa(this.formData)
      .subscribe(
        res => {
        this.filesID = res.fileID, console.log(res);
        },
        err => {
          console.error(err);
        }
      );
  }
  public submit(): void {
    const employeeID = this.myForm.value.employeeID;
    const numberOfCopy = this.myForm.value.numberOfCopy;
    const firstNamePassport = this.myForm.value.firstNamePassport;
    const lastNamePassport = this.myForm.value.lastNamePassport;
    const note = this.myForm.value.note;
    const status = this.status;
    const typeCertifyLetter = this.typeCertifyLetter;
    // mock
    const firstName = '';
    const lastName = '';
    // mock
    const passportNumber = this.myForm.value.passportNumber;
    const passportExpiryDate = this.myForm.value.passportExpiryDate;
    const embassyForVisaApplication = this.myForm.value.embassyForVisaApplication;
    const countryOfVisit = this.myForm.value.countryOfVisit;
    const from = this.myForm.value.from;
    const to = this.myForm.value.to;
    const fileID = this.filesID;

    this.certifyLetterService.postCertifyLetterForTouristVisaApplication(
      status,
      typeCertifyLetter,
      employeeID,
      firstName,
      lastName,
      numberOfCopy,
      firstNamePassport,
      lastNamePassport,
      fileID,
      passportNumber,
      passportExpiryDate,
      embassyForVisaApplication,
      countryOfVisit,
      from,
      to,
      note)
      .subscribe(
        res => {
          console.log(res + 'Success');
        },
        err => {
          throw console.error(err);
        },
        () => {
          this.myForm.reset();
        }
      );
  }
}
