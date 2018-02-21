import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './shared/layout/header.component';
import { SupportComponent } from './components/support/support.component';
import { FooterComponent } from './shared/layout/footer.component';
import { CertifieldLetterComponent } from './components/certifield-letter/certifield-letter.component';
import { EmployeeCertifyLetterComponent } from './components/certifield-letter/employee-certify-letter/employee-certify-letter.component';
import { CertifyHousingLoanComponent } from './components/certifield-letter/certify-housing-loan/certify-housing-loan.component';
import { CertifyFurtherEduComponent } from './components/certifield-letter/certify-further-edu/certify-further-edu.component';
import { CertifyTouristVisaComponent } from './components/certifield-letter/certify-tourist-visa/certify-tourist-visa.component';
import { CertifyBusinessVisaComponent } from './components/certifield-letter/certify-business-visa/certify-business-visa.component';
import { FooterCertifieldComponent } from './components/certifield-letter/footer-certifield/footer-certifield.component';
import { BusinessTripComponent } from './components/business-trip/business-trip.component';
import { LoanComponent } from './components/loan/loan.component';
import { LoanselectComponent } from './components/loan/loanselect/loanselect.component';
import { CarloanComponent } from './components/loan/loanselect/carloan/carloan.component';
import { EmergencyLoanComponent } from './components/loan/loanselect/emergency-loan/emergency-loan.component';
import { ParentalmedicalcareloanComponent } from './components/loan/loanselect/parentalmedicalcareloan/parentalmedicalcareloan.component';
import { CertifyService } from './services/certify.service';

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'support', component: SupportComponent},
  {path: 'certifieldletter', component: CertifieldLetterComponent, children: [
  { path: 'employeecertify', component: EmployeeCertifyLetterComponent },
  { path: 'certifyhousing', component: CertifyHousingLoanComponent },
  { path: 'certifyfurther', component: CertifyFurtherEduComponent },
  { path: 'certifytour', component: CertifyTouristVisaComponent },
  { path: 'certifyvisa', component: CertifyBusinessVisaComponent }]},
  {path: 'businesstrip', component: BusinessTripComponent ,
  children: [{path: 'certifytour', component: CertifyTouristVisaComponent}]},
  { path: 'loan' , component: LoanComponent},
  {path: 'loanselect', component: LoanselectComponent , children: [
    {path: 'carloan' , component: CarloanComponent },
    {path: 'emergency', component: EmergencyLoanComponent},
    {path: 'parentalmedical' , component: ParentalmedicalcareloanComponent}
  ]}

];
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    SupportComponent,
    FooterComponent,
    CertifieldLetterComponent,
    EmployeeCertifyLetterComponent,
    CertifyHousingLoanComponent,
    CertifyFurtherEduComponent,
    CertifyTouristVisaComponent,
    CertifyBusinessVisaComponent,
    FooterCertifieldComponent,
    BusinessTripComponent,
    LoanComponent,
    LoanselectComponent,
    CarloanComponent,
    EmergencyLoanComponent,
    ParentalmedicalcareloanComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [CertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
