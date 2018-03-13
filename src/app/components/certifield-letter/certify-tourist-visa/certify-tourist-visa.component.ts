import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { CertifyService } from '../../../services/certify.service';
@Component({
  selector: 'app-certify-tourist-visa',
  templateUrl: './certify-tourist-visa.component.html',
  styleUrls: ['./certify-tourist-visa.component.css']
})

export class CertifyTouristVisaComponent implements OnInit {

  private value: string;
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
  schengen: FormControl;
  from: FormControl;
  to: FormControl;
  passportExpiryDate2: any;
  status = 0;
  typeCertifyLetter = 'certifyLetterForTouristVisaApplication';
  CountryOfVisitDBs: any[];
  EmbassyforVisa: any[];
  constructor(private fb: FormBuilder, private certifyLetterService: CertifyService) { }

  ngOnInit() {
    this.certifyLetterService.GetCountryData()
      .subscribe(res => {
        this.CountryOfVisitDBs = res.message;
        this.EmbassyforVisa = res.message;
      });

    this.employeeID = this.fb.control(null, Validators.required);
    this.numberOfCopy = this.fb.control(null, Validators.required);
    this.firstNamePassport = this.fb.control(null, Validators.required);
    this.lastNamePassport = this.fb.control(null);
    this.note = this.fb.control(null);
    this.passportNumber = this.fb.control(null, Validators.required);
    this.passportExpiryDate = this.fb.control(null, Validators.required);
    this.embassyForVisaApplication = this.fb.control('');
    this.countryOfVisit = this.fb.control('');
    this.schengen = this.fb.control(false);
    this.from = this.fb.control(null, Validators.required);
    this.to = this.fb.control(null, Validators.required);
    this.myForm = this.fb.group({
      'employeeID': this.employeeID,
      'numberOfCopy': this.numberOfCopy,
      'firstNamePassport': this.firstNamePassport,
      'lastNamePassport': this.lastNamePassport,
      'passportNumber': this.passportNumber,
      'passportExpiryDate': this.passportExpiryDate,
      'embassyForVisaApplication': this.embassyForVisaApplication,
      'countryOfVisit': this.countryOfVisit,
      'schengen': this.schengen,
      'from': this.from,
      'to': this.to,
      'note': this.note
    });
  }
  onFileChange(event) {
    let files = event.target.files;
    const filesSize = 4000000;
    for (let i = 0; i < files.length; i++) {
      if (files[i].size < filesSize) {
        this.formData.append('files', files[i], files[i].name);
      } else {
        alert ('file upload limit size 1 mb');
      }
    }
    // post file to backend
    this.certifyLetterService.postFilesTourVisa(this.formData)
      .subscribe(
        res => {
          this.filesID = res.fileID, console.log(res);
          files = null;
          this.formData.delete('files');
        },
        err => {
          console.error(err);
        }
      );
  }

  // changeFormatDate
  private changeFormatDate(date) {
    const dayNow: string = date.toString().split(' ');
    const year = dayNow[3];
    const month = dayNow[1];
    const day = dayNow[2];
    let monthToNumber;
    switch (month) {
      case 'Jan':
        monthToNumber = '01';
        break;
      case 'Feb':
        monthToNumber = '02';
        break;
      case 'Mar':
        monthToNumber = '03';
        break;
      case 'Apr':
        monthToNumber = '04';
        break;
      case 'May':
        monthToNumber = '05';
        break;
      case 'Jun':
        monthToNumber = '06';
        break;
      case 'Jul':
        monthToNumber = '07';
        break;
      case 'Aug':
        monthToNumber = '08';
        break;
      case 'Sep':
        monthToNumber = '09';
        break;
      case 'Oct':
        monthToNumber = '10';
        break;
      case 'Nov':
        monthToNumber = '11';
        break;
      case 'Dec':
        monthToNumber = '12';
        break;
      default: console.log('default');
    }
    const result = [year, monthToNumber, day].join('-');
    return result;
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
    const firstName = 'admin';
    const lastName = 'admin';
    // mock
    const passportNumber = this.myForm.value.passportNumber;
    const passportExpiryDate = this.changeFormatDate(this.myForm.value.passportExpiryDate);
    const embassyForVisaApplication = this.myForm.value.embassyForVisaApplication.name;
    const countryOfVisit = this.myForm.value.countryOfVisit.name;
    const schengen = this.myForm.value.schengen;
    const from = this.changeFormatDate(this.myForm.value.from);
    const to = this.changeFormatDate(this.myForm.value.to);
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
      schengen,
      from,
      to,
      note
    ).subscribe(
      res => console.log(res),
      err => console.error(err),
      // () => window.location.reload()
    );
  }

}

