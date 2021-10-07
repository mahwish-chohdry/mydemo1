import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-sms-recieved',
    templateUrl: './sms-recieved.component.html',
    styleUrls: ['./sms-recieved.component.scss']
})
export class SmsRecievedComponent implements OnInit {

    constructor( public dialogRef: MatDialogRef<SmsRecievedComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
    }
    onClickClose() {
        this.dialogRef.close();
    }

}
