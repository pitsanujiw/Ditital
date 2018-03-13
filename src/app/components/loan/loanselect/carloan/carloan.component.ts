import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { LoanService } from '../../../../services/loan.service';

@Component({
  selector: 'app-carloan',
  templateUrl: './carloan.component.html',
  styleUrls: ['./carloan.component.css']
})
export class CarloanComponent implements OnInit {

  formData = new FormData();
  myForm: FormGroup;
  employeeID: FormControl;
  NationalID: FormControl;
  GivenName: FormControl;
  FamilyName: FormControl;
  filesIDDoc: string;
  filesIDCertify: string;
  mailAddress: FormControl;
  RequestAmount: FormControl;
  TypeofCar: FormControl;
  status = 0;
  detailFileuploadCertify: string;
  detailFileuploadOtherDoc: string;
  typeLoan = 'CarLoan';
  typecar: string[] = [
    'First Hand Car',
    'Used Car',
  ].map(n => n );

  final = this.typecar.length;
  typesCar = this.final;

  constructor(private fb: FormBuilder, private loanService: LoanService) { }

  ngOnInit() {

    this.employeeID = this.fb.control(null);
    this.NationalID = this.fb.control(null);
    this.GivenName = this.fb.control(null);
    this.FamilyName = this.fb.control(null);
    this.mailAddress = this.fb.control(null);
    this.TypeofCar = this.fb.control('Used Car');
    this.RequestAmount = this.fb.control(null);

    this.myForm = this.fb.group({
        'employeeID': this.employeeID,
        'NationalID': this.NationalID,
        'GivenName': this.GivenName,
        'FamilyName': this.FamilyName,
        'mailAddress': this.mailAddress,
        'RequestAmount': this.RequestAmount,
        'typeOfCar': this.TypeofCar
  });
  console.log(this.final);
  console.log(this.typecar);
  console.log(this.typesCar);
}
selecttypeCar(typesCar: number) {
  console.log(this.final);
  console.log(this.TypeofCar);

  this.typesCar = typesCar + 1;
}

 public submit(): void {
   const status = this.status;
   const typeLoan = this.typeLoan;
   const employeeID = this.myForm.value.employeeID;
   const NationalID = this.myForm.value.NationalID;
   const GivenName = this.myForm.value.GivenName;
   const FamilyName = this.myForm.value.FamilyName;
   const mailAddress = this.myForm.value.mailAddress;
   const RequestAmount = this.myForm.value.RequestAmount;
   const typeofcar = this.myForm.value.typeOfCar;
   const fileIDDoc = this.filesIDDoc;
   const DetailDoc = this.detailFileuploadOtherDoc;
   const filesIDCertify = this.filesIDCertify;
   const DetailCertify = this.detailFileuploadCertify;


   this.loanService.PostCarloan(
    status,
    typeLoan,
    employeeID,
    NationalID,
    GivenName,
    FamilyName,
    mailAddress,
    RequestAmount,
    typeofcar,
    fileIDDoc,
    DetailDoc,
    filesIDCertify,
    DetailCertify
   )
     .subscribe(
     res => {
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
