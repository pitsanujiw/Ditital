import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CertifyService } from '../../../services/certify.service';
@Component({
  selector: 'app-certify-business-visa',
  templateUrl: './certify-business-visa.component.html',
  styleUrls: ['./certify-business-visa.component.css']
})
export class CertifyBusinessVisaComponent implements OnInit {

  formData = new FormData();
  myForm: FormGroup;
  employeeID: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  numberOfCopy: FormControl;
  firstNamePassport: FormControl;
  lastNamePassport: FormControl;
  filesID: string;
  passportNumber: FormControl;
  passportExpiryDate: FormControl;
  thomsonReutersOfficeYouPlanToVisit: FormControl;
  companyRegisteredName: FormControl;
  countrySelected: any = '';
  from: FormControl;
  to: FormControl;
  purposeOfVisit: FormControl;
  note: FormControl;
  status = 0;
  typeCertifyLetter = 'certifyLetterForBusinessVisaApplication';
  Company: any[] = [];
  CountryCompany: any[];
  companySelected: any[];
  Purpose: any[] = [];

  constructor(private fb: FormBuilder, private certifyLetterService: CertifyService) {
    this.Purpose = [{
      name: 'Meeting'
    },
    {
      name: 'Training'
    }];
  }

  ngOnInit() {
    this.changeCountry();
    this.certifyLetterService
      .GetCompanyData()
      .subscribe(
        res => this.Company = res.message,
        err => { },
        () => {
          this.certifyLetterService
            .GetCountryCompany()
            .subscribe(
              res => {
                this.CountryCompany = res.message;
              },
              (err) => { }
            );
        }
      );


    this.employeeID = this.fb.control(null, Validators.required);
    this.numberOfCopy = this.fb.control(null, Validators.required);
    this.firstNamePassport = this.fb.control(null, Validators.required);
    this.lastNamePassport = this.fb.control(null);
    this.note = this.fb.control(null);
    this.passportNumber = this.fb.control(null, Validators.required);
    this.passportExpiryDate = this.fb.control(null, Validators.required);
    this.thomsonReutersOfficeYouPlanToVisit = this.fb.control(null, Validators.required);
    this.companyRegisteredName = this.fb.control(null, Validators.required);
    this.purposeOfVisit = this.fb.control(null, Validators.required);
    this.from = this.fb.control(null, Validators.required);
    this.to = this.fb.control(null, Validators.required);

    this.myForm = this.fb.group({
      'employeeID': this.employeeID,
      'numberOfCopy': this.numberOfCopy,
      'firstNamePassport': this.firstNamePassport,
      'lastNamePassport': this.lastNamePassport,
      'passportNumber': this.passportNumber,
      'passportExpiryDate': this.passportExpiryDate,
      'thomsonReutersOfficeYouPlanToVisit': this.thomsonReutersOfficeYouPlanToVisit,
      'companyRegisteredName': this.companyRegisteredName,
      'purposeOfVisit': this.purposeOfVisit,
      'from': this.from,
      'to': this.to,
      'note': this.note
    });
  }
  onFileChange(event) {
    const files = event.target.files;
    console.log(files);
    const filesSize = 4000000;
    for (let i = 0; i < files.length; i++) {
      if (files[i].size < filesSize) {
        this.formData.append('files', files[i], files[i].name);
      } else {
        alert('file upload limit size 1 mb');
      }
    }
    // post file to backend
    this.certifyLetterService.postFilesBusinessVisa(this.formData)
      .subscribe(
        res => {
          this.filesID = res.fileID, console.log(res);
          this.formData.delete('files');
        },
        err => {
          console.error(err);
        }
      );

  }

  changeCountry() {
    const result = this.Company.filter((v) => {
      return v.countryReg === this.countrySelected.country;
    });
    this.companySelected = result;
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
    const thomsonReutersOfficeYouPlanToVisit = this.myForm.value.thomsonReutersOfficeYouPlanToVisit;
    const companyRegisteredName = this.myForm.value.companyRegisteredName;
    const purposeOfVisit = this.myForm.value.purposeOfVisit;
    const country = this.countrySelected;
    const from = this.myForm.value.from;
    const to = this.myForm.value.to;
    const filesID = this.filesID;

    this.certifyLetterService.PostBusinessVisa(
      status,
      typeCertifyLetter,
      employeeID,
      firstName,
      lastName,
      numberOfCopy,
      firstNamePassport,
      lastNamePassport,
      filesID,
      passportNumber,
      passportExpiryDate,
      thomsonReutersOfficeYouPlanToVisit,
      companyRegisteredName,
      country,
      from,
      to,
      purposeOfVisit,
      note)
      .subscribe(
        res => {
          console.log(res);
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
