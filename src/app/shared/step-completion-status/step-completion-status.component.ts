import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StatusDTO } from '../Models/Models';

@Component({
  selector: 'app-step-completion-status',
  templateUrl: './step-completion-status.component.html',
  styleUrls: ['./step-completion-status.component.scss']
})
export class StepCompletionStatusComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: StatusDTO, public matDialogRef: MatDialogRef<StepCompletionStatusComponent>) { }

  ngOnInit(): void {
  }

  onClickClose(){
    this.matDialogRef.close();
  }

}
