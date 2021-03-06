import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CertifyService {
  private url = 'http://localhost:3000/api/certifyLetter';
  private url_Country = 'http://localhost:3000/api/CountryAndEmbassy';
  private url_company = 'http://localhost:3000/api/company';
  constructor(private http: Http) {
  }
  GetCountryData() {
    return this.http.get(`${this.url_Country}/countryAndEmbassy/show`).map( e => e.json());
  }
  GetCompanyData() {
    return this.http.get(`${this.url_company}/countryAndEmbassy/show`).map(e => e.json());
  }
  GetCountryCompany() {
    return this.http.get(`${this.url_company}/companyCountry/show`).map( e => e.json());
  }
  PostEmploymentCertifyLetter(
    status: number,
    typeCertifyLetter: string,
    employeeID: string,
    firstName: string,
    lastName: string,
    numberOfCopy: number,
    note: string) {
    const body = {
      'status': status,
      'typeCertifyLetter': typeCertifyLetter,
      'owner': {
        'employeeID': employeeID,
        'firstName': firstName,
        'lastName': lastName,
        'numberOfCopy': numberOfCopy,
        'note': note
      }
    };
    console.log(body);
    return this.http.post(`${this.url}/employmentCertifyLetter/add`, body)
      .map(e => e.json());
  }

  PostHousingLetter(status: number,
    typeCertifyLetter: string,
    employeeID: string,
    firstName: string,
    lastName: string,
    note: string,
    BBL: number,
    GHB: number,
    LHBank: number,
    UOB: number
  ) {

    const body = {
      'status': status,
      'typeCertifyLetter': typeCertifyLetter,
      'owner': {
        'employeeID': employeeID,
        'firstName': firstName,
        'lastName': lastName,
        'note': note,
        'banks': {
          'BBL': BBL,
          'GHB': GHB,
          'LHBank': LHBank,
          'UOB': UOB
        }
      }
    };
    console.log(body);
    return this.http.post(`${this.url}/certifyLetterForHousingLoan/add`, body)
      .map(e => e.json());
  }

  PostFurtherEduLetter(
    status: number,
    typeCertifyLetter: string,
    employeeID: string,
    firstName: string,
    lastName: string,
    numberOfCopy: number,
    note: string) {
    const body = {
      'status': status,
      'typeCertifyLetter': typeCertifyLetter,
      'owner': {
        'employeeID': employeeID,
        'firstName': firstName,
        'lastName': lastName,
        'numberOfCopy': numberOfCopy,
        'note': note
      }
    };
    console.log(body);
    return this.http.post(`${this.url}/certifyLetterForFurtherEducation/add`, body)
      .map(e => e.json());
  }

  postFilesTourVisa(formData) {
    return this.http.post(`${this.url}/certifyLetterForTouristVisaApplication/addFiles`, formData).map(e => e.json());
  }

  postCertifyLetterForTouristVisaApplication(
    status: number,
    typeCertifyLetter: string,
    employeeID: string,
    firstName: string,
    lastName: string,
    numberOfCopy: number,
    firstNamePassport: string,
    lastNamePassport: string,
    filesID: string,
    passportNumber: string,
    passportExpiryDate: string,
    embassyForVisaApplication: string,
    countryOfVisit: string,
    schengen: boolean,
    from: string,
    to: string,
    note: string
  ) {

    const body = {
      'status': status,
      'typeCertifyLetter': typeCertifyLetter,
      'owner': {
        'employeeID': employeeID,
        'firstName': firstName,
        'lastName': lastName,
        'firstNamePassport': firstNamePassport,
        'lastNamePassport': lastNamePassport,
        'filesID': filesID,
        'numberOfCopy': numberOfCopy,
        'passportNumber': passportNumber,
        'passportExpiryDate': passportExpiryDate,
        'embassyForVisaApplication': embassyForVisaApplication,
        'countryOfVisit': countryOfVisit,
        'schengenCountries': schengen,
        'periodOfVisit': {
          'from': from,
          'to': to
        },
        'note': note
      }
    };
    console.log(body);
    return this.http.post(`${this.url}/certifyLetterForTouristVisaApplication/add`, body).map(e => e.json());
  }
  PostBusinessVisa(
    status: number,
    typeCertifyLetter: string,
    employeeID: string,
    firstName: string,
    lastName: string,
    numberOfCopy: number,
    firstNamePassport: string,
    lastNamePassport: string,
    filesID: string,
    passportNumber: string,
    passportExpiryDate: string,
    thomsonReutersOfficeYouPlanToVisit: string,
    companyRegisteredName: string,
    country: string,
    from: string,
    to: string,
    purposeOfVisit: string,
    note: string) {

    const body = {
      'status': status,
      'typeCertifyLetter': typeCertifyLetter,
      'owner': {
        'employeeID': employeeID,
        'firstName': firstName,
        'lastName': lastName,
        'firstNamePassport': firstNamePassport,
        'lastNamePassport': lastNamePassport,
        'filesID': filesID,
        'numberOfCopy': numberOfCopy,
        'passportNumber': passportNumber,
        'passportExpiryDate': passportExpiryDate,
        'thomsonReutersOfficeYouPlanToVisit': thomsonReutersOfficeYouPlanToVisit,
        'companyRegisteredName': companyRegisteredName,
        'country': country,
        'periodOfVisit': {
          'from': from,
          'to': to
        },
        'purposeOfVisit': purposeOfVisit,
        'note': note
      }
    };
    console.log(body);
    return this.http.post(`${this.url}/certifyLetterForBusinessVisaApplication/add`, body).map(e => e.json());
  }
  postFilesBusinessVisa(formData) {
    return this.http.post(`${this.url}/certifyLetterForBusinessVisaApplication/addFiles`, formData).map(e => e.json());
  }
}

