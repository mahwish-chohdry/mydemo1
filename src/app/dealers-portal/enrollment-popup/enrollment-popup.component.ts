import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-enrollment-popup',
    templateUrl: './enrollment-popup.component.html',
    styleUrls: ['./enrollment-popup.component.scss']
})
export class EnrollmentPopupComponent implements OnInit {
    enrollmentStarted: boolean = false;
    retryCount=0;
    constructor(
        public dialogRef: MatDialogRef<EnrollmentPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
    }
    onClickClose() {
        this.dialogRef.close();
    }
    sendEnrollment() {
        this.enrollmentStarted = true;
    }
    retrySMS(){
        this.retryCount++;
        if(this.retryCount==2){
            this.dialogRef.close(true);
        }
    }
    success() {
        this.dialogRef.close(true);
    }
}
