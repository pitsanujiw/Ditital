import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder , FormArray , Validators } from '@angular/forms';
import { LoanService } from '../../../../services/loan.service';
@Component({
  selector: 'app-emergency-loan',
  templateUrl: './emergency-loan.component.html',
  styleUrls: ['./emergency-loan.component.css']
})
export class EmergencyLoanComponent implements OnInit {

  _ref: any;
  formData = new FormData();
  myForm: FormGroup;
  status = 0;
  addresses: any;
  typeLoan = 'Emergency';
  employeeID: FormControl;
  NationalID: FormControl;
  GivenName: FormControl;
  FamilyName: FormControl;
  mailAddress: FormControl;
  RequestAmount: FormControl;
  DetailDocument: 'Doctor Certificate *Required :';
  DetailDocument2: 'Doctor Certificate *Required :';
  Reasonforloan: FormControl;
  DocumentFile: string;
  public myForms: FormGroup;
  constructor(private fb: FormBuilder, private loanService: LoanService) { }

  ngOnInit() {
    this.employeeID = this.fb.control(null);
    this.NationalID = this.fb.control(null);
    this.GivenName = this.fb.control(null);
    this.FamilyName = this.fb.control(null);
    this.mailAddress = this.fb.control(null);
    this.RequestAmount = this.fb.control(null);
    this.Reasonforloan = this.fb.control(null);

    this.myForm = this.fb.group({
      'employeeID': this.employeeID,
      'NationalID': this.NationalID,
      'GivenName': this.GivenName,
      'FamilyName': this.FamilyName,
      'MailAdress': this.mailAddress,
      'RequestAmount': this.RequestAmount,
      'ReasonForLoanRequest': this.Reasonforloan
    });
    this.myForms = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      addresses: this.fb.array([
          this.initAddress(),
      ])
  });
  }
//
initAddress() {
  return this.fb.group({
      street: ['', Validators.required],
      postcode: ['']
  });
}
//
addfieldupload() {
  const control = <FormArray>this.myForms.controls['addresses'];
  control.push(this.initAddress());
}

removeAddress(i: number) {
  const control = <FormArray>this.myForms.controls['addresses'];
  control.removeAt(i);
}

  //
  // Fileupload(event) {
  //   const files = event.target.files;
  //   for (let i = 0; i < files.length; i++) {
  //     this.formData.append('files', files[i], files[i].name);
  //   }
  //   // post file to backend
  //   this.loanService.PostfileCarloan(this.formData)
  //     .subscribe(
  //       res => {
  //         this.DocumentFile = res.fileID, console.log(res);
  //         this.formData.delete('files');
  //       },
  //       err => {
  //         this.formData.delete('files');
  //         console.error(err);
  //       }
  //     );
  // }

  //
  //
  //

  public submit(): void {
    const status = this.status;
    const typeLoan = this.typeLoan;
    const employeeID = this.myForm.value.employeeID;
    const NationalID = this.myForm.value.NationalID;
    const GivenName = this.myForm.value.GivenName;
    const FamilyName = this.myForm.value.FamilyName;
    const mailAddress = this.myForm.value.MailAdress;
    const RequestAmount = this.myForm.value.RequestAmount;
    const typeofcar = this.myForm.value.typeOfCar;
    const DocumentFile = this.DocumentFile;
    const ReasonForLoanRequest = this.myForm.value.ReasonForLoanRequest;

    this.loanService.PostEmergency(
     status,
     typeLoan,
     employeeID,
     NationalID,
     GivenName,
     FamilyName,
     mailAddress,
     RequestAmount,
     typeofcar,
     DocumentFile,
     ReasonForLoanRequest
    )
      .subscribe(
      res => {
        console.log(res);
        console.log('Success');
      },
      err => {
        throw console.log(err);
      },
      () => {
        this.myForm.reset();
      }
    );
  }
}
