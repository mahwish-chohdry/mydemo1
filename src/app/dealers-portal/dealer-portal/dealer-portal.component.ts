import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelPopupComponent } from 'src/app/shared/Cancel Popup/cancel-popup/cancel-popup.component';
import { CancelDTO, StatusDTO } from 'src/app/shared/Models/Models';
import { StepCompletionStatusComponent } from 'src/app/shared/step-completion-status/step-completion-status.component';
import { CustomerHelpStepComponent } from '../customer-help-step/customer-help-step.component';
import { EnrollmentPopupComponent } from '../enrollment-popup/enrollment-popup.component';
import { SmsRecievedComponent } from '../sms-recieved/sms-recieved.component';
import { SmsSentComponent } from '../sms-sent/sms-sent.component';

@Component({
    selector: 'app-dealer-portal',
    templateUrl: './dealer-portal.component.html',
    styleUrls: ['./dealer-portal.component.scss']
})
export class DealerPortalComponent implements OnInit {

    constructor(private dialog: MatDialog) { }

    ngOnInit(): void {
    }

    sendEnrollmentLinkClick() {
        let ref = this.dialog.open(EnrollmentPopupComponent, {
            height: '82vh', width: '60vw', panelClass: 'dialog-no-padding'
        });
        ref.afterClosed().subscribe((response: boolean) => {
            if (response) {
                this.smsSentClick();
            }
        });
    }

    StepClick() {
        this.dialog.open(CustomerHelpStepComponent, {
            height: '95vh', width: '100vw', panelClass: 'dialog-no-padding'
        })
    }

    smsSentClick() {
        let dialogRef = this.dialog.open(SmsSentComponent, {
            height: '84.5vh', width: '60vw', panelClass: 'dialog-no-padding'
        });
        dialogRef.afterClosed().subscribe((response: boolean) => {
            if (response) {
                this.dialog.open(SmsRecievedComponent, {
                    height: '84.5vh', width: '60vw', panelClass: 'dialog-no-padding'
                })
            }
            else {
                this.sendEnrollmentLinkClick();
            }
        });
    }

    CancelSubscriptionClick() {

        let cancelData: CancelDTO = {
            title: 'Cancel Trial Package Enrollment',
            details: 'Cancel Telematics Package - 3 Month Complimentary Trial enrollment? \n Any enrollment progress that has been completed will be abandoned.',
            reasons: ['Reason 1', 'Reason 2', 'Reason 3', 'Reason 4', 'Reason 5', 'Other']
        }

        let statusData: StatusDTO = {
            title: "Enrollment Cancelled",
            details: "Enrollment has been successfully cancelled.",
            stepSuccessful: true
        }

        let ref = this.dialog.open(CancelPopupComponent,
            { height: '95vh', width: '40vw', data: cancelData })

            
        ref.afterClosed().subscribe(result => {
            if (result == true) {
                this.dialog.open(StepCompletionStatusComponent,
                    { height: '48vh', width: '40vw', data: statusData })
            }
        })
    }
}
