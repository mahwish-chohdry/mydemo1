import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StatusDTO } from 'src/app/shared/Models/Models';
import { StepCompletionStatusComponent } from 'src/app/shared/step-completion-status/step-completion-status.component';

@Component({
  selector: 'app-extend-expiry-date-details',
  templateUrl: './extend-expiry-date-details.component.html',
  styleUrls: ['./extend-expiry-date-details.component.scss']
})
export class ExtendExpiryDateDetailsComponent implements OnInit {

  constructor(private dialog: MatDialog, public matDialogRef: MatDialogRef<ExtendExpiryDateDetailsComponent>) { }

  ngOnInit(): void {
  }

  onClickClose(){
    this.matDialogRef.close();
  }

  extendTrialClick() {

    let statusData: StatusDTO = {
      title: "Trial Extended",
      details: "The trial subscription of the telematics package has been successfully extended.",
      stepSuccessful: true
    }

    this.matDialogRef.close();
    this.dialog.open(StepCompletionStatusComponent,
      { height: '48vh', width: '40vw', data: statusData })
  }
}
