import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reset-pin',
  templateUrl: './reset-pin.component.html',
  styleUrls: ['./reset-pin.component.scss']
})
export class ResetPinComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<ResetPinComponent>) { }

  recieverEmail: string = "emily.smith@gmail.com";

  ngOnInit(): void {
  }

  onSubmitClick() {
    return this.matDialogRef.close(true);
  }

  onClickClose(){
    this.matDialogRef.close();
  }
}
