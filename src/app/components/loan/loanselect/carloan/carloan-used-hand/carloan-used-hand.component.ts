import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../../../../services/loan.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-carloan-used-hand',
  templateUrl: './carloan-used-hand.component.html',
  styleUrls: ['./carloan-used-hand.component.css']
})
export class CarloanUsedHandComponent implements OnInit {

  formData = new FormData();
  fileIDcarPurchase: string;
  typefileCarPurchase: string;
  fileIDcarReg: string;
  typefileCarReg: string;
  fileIDnationalID: string;
  tpyefileNationalID: string;
  filesIDother: string;
  typefileOther: string;
  constructor(private loanService: LoanService) { }

  ngOnInit() {
  }
  FileuploadCarPurchase(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.formData.append('files', files[i], files[i].name);
    }
    // post file to backend
    this.loanService.PostfileCarloan(this.formData)
      .subscribe(
        res => {
          this.fileIDcarPurchase = res.fileID, console.log(this.fileIDcarPurchase);
          this.typefileCarPurchase = 'Car purchase agreement';
          this.formData.delete('files');
        },
        err => {
          this.formData.delete('files');
          console.error(err);
        }
      );
  }

  FileuploadCarReg(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.formData.append('files', files[i], files[i].name);
    }
    // post file to backend
    this.loanService.PostfileCarloan(this.formData)
      .subscribe(
        res => {
          this.fileIDcarReg = res.fileID,
          // this.filesIDDocOut.emit(res.fileID),
          console.log();
          this.typefileCarReg = 'OtherDocument';
          this.formData.delete('files');
        },
        err => {
          this.formData.delete('files');
          console.error(err);
        }
      );
  }
  FileuploadNationalID(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.formData.append('files', files[i], files[i].name);
    }
    // post file to backend
    this.loanService.PostfileCarloan(this.formData)
      .subscribe(
        res => {
          this.fileIDnationalID = res.fileID, console.log(this.fileIDnationalID);
          this.tpyefileNationalID = 'Pre-Emption certificate';
          this.formData.delete('files');
        },
        err => {
          this.formData.delete('files');
          console.error(err);
        }
      );
  }

  FileuploadOther(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.formData.append('files', files[i], files[i].name);
    }
    // post file to backend
    this.loanService.PostfileCarloan(this.formData)
      .subscribe(
        res => {
          this.filesIDother = res.fileID,
          // this.filesIDDocOut.emit(res.fileID),
          console.log();
          this.typefileOther = 'OtherDocument';
          this.formData.delete('files');
        },
        err => {
          this.formData.delete('files');
          console.error(err);
        }
      );
  }
}
