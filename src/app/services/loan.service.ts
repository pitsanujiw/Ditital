import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoanService {
  private url = 'http://localhost:3000/api/loan';
  constructor(private http: Http) { }

  PostCarloan(
    status: number,
    typelaon: string,
    employeeID: string,
    NationalID: number,
    GivenName: string,
    FamilyName: string,
    mailAddress: string,
    RequestAmount: number,
    typeOfCar: string,
    filesIDDoc: string,
    DetailDoc: string,
    filesIDCertify: string,
    DetailCertify: string,
  ) {
    const body = {
      'status': status,
      'typeLoan': typelaon,
      'owner': {
        'employeeID': employeeID,
        'NationalID': NationalID,
        'GivenName': GivenName,
        'FamilyName': FamilyName,
        'mailAddress': mailAddress,
        'RequestAmount': RequestAmount,
        'typeOfCar': typeOfCar,
        'Supportingdoc' : {
        'filesIDDoc' : filesIDDoc,
        'DetailDoc' : DetailDoc,
        'filesCertify': filesIDCertify,
        'DetailCertify' : DetailCertify
        }
      }
    };
    console.log(body);
    return this.http.post(`${this.url}/carloan/add`, body).map( e => e.json());
  }
  PostfileCarloan(formdata) {
    console.log(formdata);
    return this.http.post(`${this.url}/carloan/addFiles`, formdata).map( e => e.json());
  }
  PostEmergency(
      status: number,
      typeLoan: string,
      employeeID: number,
      NationalID: number,
      GivenName: string,
      FamilyName: string,
      mailAddress: string,
      RequestAmount: number,
      DetailDocument: string,
      DocumentFile: string,
      ReasonforLoan: string,
    ) {
    const body = {
      'status': status,
      'typeLoan': typeLoan,
      'owner': {
          'employeeID': employeeID,
          'NationalID': NationalID,
          'GivenName': GivenName,
          'FamilyName': FamilyName,
          'mailAddress': mailAddress,
          'RequestAmount': RequestAmount,
          'SupportingDocument': {
              'DetailDocument': DetailDocument,
              'DocumentFile': DocumentFile,
          },
          'ReasonForLoanRequest': ReasonforLoan
      },
    };
    console.log(body);
    return this.http.post(`${this.url}/emergency/add` , body).map( e => e.json());
  }
  PostfileEmergency(formdata) {
    console.log(formdata);
    return this.http.post(`${this.url}/emergency/addFiles` , formdata).map( e => e.json());
  }
  PostParentalMedical(
      status: number,
      typeLoan: string,
      employeeID: number,
      NationalID: number,
      GivenName: string,
      FamilyName: string,
      mailAddress: string,
      RequestAmount: number,
      DetailDocuments: string,
      DocumentFile: string,
      ReasonforLoan: string,
  ) {
    const body = {
      'status': status,
      'typeLoan': typeLoan,
      'owner': {
          'employeeID': employeeID,
          'NationalID': NationalID,
          'GivenName': GivenName,
          'FamilyName': FamilyName,
          'mailAddress': mailAddress,
          'RequestAmount': RequestAmount,
          'SupportingDocument': {
              'DetailDocument': DetailDocuments,
              'DocumentFile': DocumentFile,
          },
          'ReasonForLoanRequest': ReasonforLoan
      }
    };
    console.log(body);
    return this.http.post(`${this.url}/parentalMedical/add`, body).map(e => e.json());
  }
}
