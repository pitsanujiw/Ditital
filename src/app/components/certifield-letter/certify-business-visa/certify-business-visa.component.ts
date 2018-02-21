import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
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
  country: FormControl;
  from: FormControl;
  to: FormControl;
  purposeOfVisit: FormControl;
  note: FormControl;
  status = 0;
  typeCertifyLetter = 'certifyLetterForBusinessVisaApplication';


  constructor(private fb: FormBuilder, private certifyLetterService: CertifyService) { }

  ngOnInit() {
    this.employeeID = this.fb.control(null);
    this.numberOfCopy = this.fb.control(null);
    this.firstNamePassport = this.fb.control(null);
    this.lastNamePassport = this.fb.control(null);
    this.note = this.fb.control(null);
    this.passportNumber = this.fb.control(null);
    this.passportExpiryDate = this.fb.control(null);
    this.thomsonReutersOfficeYouPlanToVisit = this.fb.control(null);
    this.companyRegisteredName = this.fb.control(null);
    this.country = this.fb.control(null);
    this.purposeOfVisit = this.fb.control(null);
    this.from = this.fb.control(null);
    this.to = this.fb.control(null);

    this.myForm = this.fb.group({
      'employeeID': this.employeeID,
      'numberOfCopy': this.numberOfCopy,
      'firstNamePassport': this.firstNamePassport,
      'lastNamePassport': this.lastNamePassport,
      'passportNumber': this.passportNumber,
      'passportExpiryDate': this.passportExpiryDate,
      'thomsonReutersOfficeYouPlanToVisit': this.thomsonReutersOfficeYouPlanToVisit,
      'companyRegisteredName': this.companyRegisteredName,
      'country': this.country,
      'purposeOfVisit': this.purposeOfVisit,
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
    this.certifyLetterService.postFilesBusinessVisa(this.formData)
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
    const thomsonReutersOfficeYouPlanToVisit = this.myForm.value.thomsonReutersOfficeYouPlanToVisit;
    const companyRegisteredName = this.myForm.value.companyRegisteredName;
    const purposeOfVisit = this.myForm.value.purposeOfVisit;
    const country = this.myForm.value.country;
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
