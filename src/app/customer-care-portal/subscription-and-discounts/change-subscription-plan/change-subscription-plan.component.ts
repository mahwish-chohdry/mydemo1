import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StatusDTO } from 'src/app/shared/Models/Models';
import { StepCompletionStatusComponent } from 'src/app/shared/step-completion-status/step-completion-status.component';
import { ManageDiscountsComponent } from '../manage-discounts/manage-discounts.component';

@Component({
  selector: 'app-manage-subscription-plan',
  templateUrl: './change-subscription-plan.component.html',
  styleUrls: ['./change-subscription-plan.component.scss']
})
export class ChangeSubscriptionPlanComponent implements OnInit {


    radioSelection:number=1;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ManageDiscountsClick() {
    this.dialog.open(ManageDiscountsComponent,
        { height: '95vh', width: '60vw' })
  }

  ManageConfirmClick() {

    let statusData: StatusDTO = {
      title: 'Package Subscription Confirmed',
      details: 'Customer’s subscription has been updated to the Premium package for a 2 year period.',
      stepSuccessful: true
    }

    this.dialog.open(StepCompletionStatusComponent,
      {height:'48vh', width:'42vw', data: statusData})
  }
}
