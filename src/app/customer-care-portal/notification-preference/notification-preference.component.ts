import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notification-preference',
  templateUrl: './notification-preference.component.html',
  styleUrls: ['./notification-preference.component.scss']
})
export class NotificationPreferenceComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<NotificationPreferenceComponent>) { }

  ngOnInit(): void {
  }
  updateClick(){
      this.dialogRef.close(true);
  }
}
