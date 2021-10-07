import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-extend-expiry-date',
  templateUrl: './extend-expiry-date.component.html',
  styleUrls: ['./extend-expiry-date.component.scss']
})
export class ExtendExpiryDateComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<ExtendExpiryDateComponent>) { }

  ngOnInit(): void {
  }

  onNextClick() {
    return this.matDialogRef.close(true);
  }

  onClickClose(){
    this.matDialogRef.close();
  }
}
