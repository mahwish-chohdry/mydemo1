import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-sms-sent',
    templateUrl: './sms-sent.component.html',
    styleUrls: ['./sms-sent.component.scss']
})
export class SmsSentComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<SmsSentComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
    }
    smsRecievedClick(status:boolean){
        this.dialogRef.close(status);
    }
}
