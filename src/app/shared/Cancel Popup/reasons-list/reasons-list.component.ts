import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reasons-list',
  templateUrl: './reasons-list.component.html',
  styleUrls: ['./reasons-list.component.scss']
})
export class ReasonsListComponent implements OnInit {

  constructor() { }

  @Input() reasons: string[] = ['No Longer Own Vehicle', 'Technical Issues', 'Too Expensive', 'Not Using It', 'Lack of Value in the Service', 'Other'];
  selectedReason:string='No Longer Own Vehicle';

  form:FormGroup=new FormGroup( {
    reason:new FormControl(null,Validators.required),
    explanation:new FormControl(null)
  });

  ngOnInit(): void {
  }
  reasonChanged(){
      if(this.form.controls.reason.value=="Other"){
          this.form.controls['explanation'].setValidators(Validators.compose([Validators.required,Validators.minLength(5)]));
      }
      else{
        this.form.controls['explanation'].setValidators(null);
      }
      this.form.controls['explanation'].updateValueAndValidity();
    }
}
