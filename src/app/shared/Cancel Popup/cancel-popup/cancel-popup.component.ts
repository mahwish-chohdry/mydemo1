import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CancelDTO } from '../../Models/Models';

@Component({
  selector: 'app-cancel-popup',
  templateUrl: './cancel-popup.component.html',
  styleUrls: ['./cancel-popup.component.scss']
})
export class CancelPopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: CancelDTO, public matDialogRef: MatDialogRef<CancelPopupComponent>) { }

  ngOnInit(): void {
  }

  onClickClose(){
    this.matDialogRef.close();
  }

  onSubmitClick() {
    return this.matDialogRef.close(true);
  }
}
