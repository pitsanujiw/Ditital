// export class CertifyEmp {

//     constructor(
//         public employeeID: string,
//         public typeCertifyLetter: string,
//         public numberOfCopy: Number,
//         public note: string
//     ) { }

//     static CreateDefault(): CertifyEmp {
//         return new CertifyEmp('', '', 0, '');
//     }
// }

// export class HousingModel {

//     constructor(
//         public employeeID: string,
//         public typeCertifyLetter: string,
//         public banks: {
//             BBL: number,
//             GHB: number,
//             LHBank: number,
//             UOB: number
//         },
//         public note: string
//     ) { }

//     static CreateDefault(): HousingModel {
//         return new HousingModel('', '', { BBL: 0, GHB: 0, LHBank: 0, UOB: 0 }, '');
//     }
// }

// export class FurtherEduLetterModel {

//     constructor(
//         public employeeID: string,
//         public typeCertifyLetter: string,
//         public numberOfCopy: Number,
//         public note: string
//     ) { }

//     static CreateDefault(): FurtherEduLetterModel {
//         return new FurtherEduLetterModel('', '', 0, '');
//     }
// }


// export class TouristVisa {
//     constructor(
//         status: number,
//         typeCertifyLetter: string,
//         employeeID: string,
//         firstName: string,
//         lastName: string,
//         numberOfCopy: number,
//         firstNamePassport: string,
//         lastNamePassport: string,
//         filesID: string,
//         passportNumber: string,
//         passportExpiryDate: string,
//         embassyForVisaApplication: string,
//         countryOfVisit: string,
//         from: string,
//         to: string,
//         note: string
//     ) {
//         const body = {
//             'status': status,
//             'typeCertifyLetter': typeCertifyLetter,
//             'owner': {
//                 'employeeID': employeeID,
//                 'firstName': firstName,
//                 'lastName': lastName,
//                 'firstNamePassport': firstNamePassport,
//                 'lastNamePassport': lastNamePassport,
//                 'filesID': filesID,
//                 'numberOfCopy': numberOfCopy,
//                 'passportNumber': passportNumber,
//                 'passportExpiryDate': passportExpiryDate,
//                 'embassyForVisaApplication': embassyForVisaApplication,
//                 'countryOfVisit': countryOfVisit,
//                 'periodOfVisit': {
//                     'from': from,
//                     'to': to
//                 },
//                 'note': note
//             }
//         };
//     }
// }

