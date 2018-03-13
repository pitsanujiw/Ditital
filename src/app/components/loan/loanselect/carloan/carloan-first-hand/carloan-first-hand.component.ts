import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoanService } from '../../../../../services/loan.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-carloan-first-hand',
  templateUrl: './carloan-first-hand.component.html',
  styleUrls: ['./carloan-first-hand.component.css']
})
export class CarloanFirstHandComponent implements OnInit {

//   @Input() filesIDDoc: string;
// @Input() detailFileuploadOtherDoc: string;
// @Input() filesIDCertify: string;
// @Input() detailFileuploadCertify: string;
@Output() filesIDDocOut = new EventEmitter();
@Output() detailFileuploadOtherdocOut: string;
@Output() filesIDCertifyOut: string;
@Output() detailFileuploadCertifyOut: string;

  formData = new FormData();

  constructor(private loanService: LoanService) { }

  ngOnInit() {
  }
  FileuploadPreEmptioncertificate(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.formData.append('files', files[i], files[i].name);
    }
    // post file to backend
    this.loanService.PostfileCarloan(this.formData)
      .subscribe(
        res => {
          this.filesIDCertifyOut = res.fileID, console.log(this.filesIDCertifyOut);
          this.detailFileuploadCertifyOut = 'Pre-Emption certificate';
          this.formData.delete('files');
        },
        err => {
          this.formData.delete('files');
          console.error(err);
        }
      );
  }

  FileuploadOtherDocument(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.formData.append('files', files[i], files[i].name);
    }
    // post file to backend
    this.loanService.PostfileCarloan(this.formData)
      .subscribe(
        res => {
          this.filesIDDocOut = res.fileID,
          // this.filesIDDocOut.emit(res.fileID),
          console.log();
          this.detailFileuploadOtherdocOut = 'OtherDocument';
          this.formData.delete('files');
        },
        err => {
          this.formData.delete('files');
          console.error(err);
        }
      );
  }
}
