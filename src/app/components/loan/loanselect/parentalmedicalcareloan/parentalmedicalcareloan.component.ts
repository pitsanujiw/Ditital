import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { LoanService } from '../../../../services/loan.service';

@Component({
  selector: 'app-parentalmedicalcareloan',
  templateUrl: './parentalmedicalcareloan.component.html',
  styleUrls: ['./parentalmedicalcareloan.component.css']
})
export class ParentalmedicalcareloanComponent implements OnInit {

  formData = new FormData();
  myForm: FormGroup;
  status = 0;
  typeLoan = 'ParentalMedicalCareloan';
  employeeID: FormControl;
  NationalID: FormControl;
  GivenName: FormControl;
  FamilyName: FormControl;
  MailAddress: FormControl;
  RequestAmount: FormControl;
  DetailDocument: FormControl;
  DocumentFile: string;
  reasonLoan: FormControl;

  constructor(private fb: FormBuilder, private loanService: LoanService) { }

  ngOnInit() {

    this.employeeID = this.fb.control(null);
    this.NationalID = this.fb.control(null);
    this.GivenName = this.fb.control(null);
    this.FamilyName = this.fb.control(null);
    this.MailAddress = this.fb.control(null);
    this.RequestAmount = this.fb.control(null);
    this.DetailDocument = this.fb.control(null);
    this.reasonLoan = this.fb.control(null);

    this.myForm = this.fb.group({
      'employeeID': this.employeeID,
      'NationalID': this.NationalID,
      'GivenName': this.GivenName,
      'FamilyName': this.FamilyName,
      'MailAddress' : this.MailAddress,
      'RequestAmount': this.RequestAmount,
      'DetailDocument': this.DetailDocument,
      'reasonforLoan': this.reasonLoan
    });

  }
  Fileupload(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.formData.append('files', files[i], files[i].name);
    }
    // post file to backend
    this.loanService.PostfileCarloan(this.formData)
      .subscribe(
        res => {
          this.DocumentFile = res.fileID, console.log(res);
          this.formData.delete('files');
        },
        err => {
          this.formData.delete('files');
          console.error(err);
        }
      );
    }
      public submit(): void {
        const status = this.status;
        const typeLoan = this.typeLoan;
        const employeeID = this.myForm.value.employeeID;
        const NationalID = this.myForm.value.NationalID;
        const GivenName = this.myForm.value.GivenName;
        const FamilyName = this.myForm.value.FamilyName;
        const mailAddress = this.myForm.value.MailAddress;
        const RequestAmount = this.myForm.value.RequestAmount;
        const DocumentFile = this.DocumentFile;
        const DetailDocuments = this.myForm.value.DetailDocument;
        const ReasonForLoanRequest = this.myForm.value.reasonforLoan;
        this.loanService.PostParentalMedical(
         status,
         typeLoan,
         employeeID,
         NationalID,
         GivenName,
         FamilyName,
         mailAddress,
         RequestAmount,
         DocumentFile,
         DetailDocuments,
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
