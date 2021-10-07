import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-compensation',
  templateUrl: './add-compensation.component.html',
  styleUrls: ['./add-compensation.component.scss']
})
export class AddCompensationComponent implements OnInit {

  reasons: string[] = ['Outage Issue', 'Provisioning Issue', 'Technical Issue', 'Remote Command Issue', 'TCU Issue', 'Other'];

  constructor(public matDialogRef: MatDialogRef<AddCompensationComponent>) { }

  ngOnInit(): void {
  }

  onClickClose(){
    this.matDialogRef.close();
  }

  onSubmitClick() {
    return this.matDialogRef.close(true);
  }
}
