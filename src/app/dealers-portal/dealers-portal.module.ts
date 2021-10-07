import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealerPortalRoutingModule } from './dealer-portal.routing.module';
import { DealerPortalComponent } from './dealer-portal/dealer-portal.component';
import { SharedModule } from '../shared/shared.module';
import { DealerPortalMainComponent } from './dealer-portal-main/dealer-portal-main.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { EnrollmentPopupComponent } from './enrollment-popup/enrollment-popup.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CustomerHelpStepComponent } from './customer-help-step/customer-help-step.component';
import { SmsSentComponent } from './sms-sent/sms-sent.component';
import { SmsRecievedComponent } from './sms-recieved/sms-recieved.component';

@NgModule({
  declarations: [DealerPortalComponent, DealerPortalMainComponent, EnrollmentPopupComponent, CustomerHelpStepComponent, SmsSentComponent, SmsRecievedComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule,
    DealerPortalRoutingModule,
    SharedModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class DealersPortalModule { }
