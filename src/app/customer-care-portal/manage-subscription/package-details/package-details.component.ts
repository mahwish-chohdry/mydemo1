import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelDTO, StatusDTO } from 'src/app/shared/Models/Models';
import { StepCompletionStatusComponent } from 'src/app/shared/step-completion-status/step-completion-status.component';
import { NotificationPreferenceComponent } from '../../notification-preference/notification-preference.component';
import { EditContactDetailsComponent } from '../edit-contact-details/edit-contact-details.component';
import { ExtendExpiryDateComponent } from '../extend-expiry-date/extend-expiry-date.component';
import { ManageDiscountsComponent } from '../../subscription-and-discounts/manage-discounts/manage-discounts.component';
import { ResetPinComponent } from '../reset-pin/reset-pin.component';
import { CancelPopupComponent } from 'src/app/shared/Cancel Popup/cancel-popup/cancel-popup.component';
import { ExtendExpiryDateDetailsComponent } from '../extend-expiry-date-details/extend-expiry-date-details.component';
import { AddCompensationComponent } from '../add-compensation/add-compensation.component';

@Component({
    selector: 'app-package-details',
    templateUrl: './package-details.component.html',
    styleUrls: ['./package-details.component.scss']
})
export class PackageDetailsComponent implements OnInit {

    constructor(private dialog: MatDialog) { }

    stepSuccessful: boolean = false;
    status: string = 'PIN request submitted';
    statusDetails: string = 'Reset PIN request has been successfully sent to emily.smith@gmail.com.';

    ngOnInit(): void {
    }

    CancelSubscriptionClick() {

        let cancelData: CancelDTO = {
            title: 'Cancel Subscription',
            details: 'Your trial subscription of the telematics package will end immediately. Please choose a reason for your cancellation to complete the process.',
            reasons: ['No Longer Own Vehicle', 'Technical Issues', 'Too Expensive', 'Not Using It', 'Lack of Value in the Service', 'Other']
        }

        let statusData: StatusDTO = {
            title: "Subscription Cancelled",
            details: "The trial subscription of the telematics package has been successfully cancelled.",
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

    EditContactInfoClick() {
        this.dialog.open(EditContactDetailsComponent,
            { height: '90vh', width: '60vw' })
    }

    ManageDiscountsClick() {
        this.dialog.open(ManageDiscountsComponent,
            { height: '96vh', width: '60vw' })
    }

    ExtendExpiryDateClick() {
        let ref = this.dialog.open(ExtendExpiryDateComponent,
            { height: '90vh', width: '45vw' })

        ref.afterClosed().subscribe(result => {
            if(result == true) {
                this.dialog.open(ExtendExpiryDateDetailsComponent,
                    { height: '80vh', width: '40vw' })
            }
        })
    }

    AddCompensationClick() {
        let statusData: StatusDTO = {
            title: "Compensation Added",
            details: "The credit has been applied to the account.",
            stepSuccessful: true
        }

        let ref = this.dialog.open(AddCompensationComponent,
            { height: '80vh', width: '40vw' })

        ref.afterClosed().subscribe(result => {
            if (result == true) {
                this.dialog.open(StepCompletionStatusComponent,
                    { height: '45vh', width: '40vw', data: statusData })
            }
        })
    }

    ResetPinClick() {
        let ref = this.dialog.open(ResetPinComponent,
            { height: '40vh', width: '45vw' })

        let statusData: StatusDTO = {
            title: this.status,
            details: this.statusDetails,
            stepSuccessful: this.stepSuccessful
        }

        ref.afterClosed().subscribe(result => {
            if (result == true) {
                this.dialog.open(StepCompletionStatusComponent,
                    { height: '45vh', width: '40vw', data: statusData })
            }
        })
    }


    EditNotificationPreference() {
        let ref = this.dialog.open(NotificationPreferenceComponent,
            { height: '90vh', width: '60vw' });
        ref.afterClosed().subscribe((response:boolean)=>{
            if(response){
                let status:StatusDTO={
                    stepSuccessful:true,
                    title:'Notification Preference Updated',
                    details:'The notification preferences have been updated.'
                }
                this.dialog.open(StepCompletionStatusComponent,{
                    data:status,
                    height:'46vh',
                    width:'42vw'
                })
            }
        });
    }
}
