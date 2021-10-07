import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-edit-contact-details',
    templateUrl: './edit-contact-details.component.html',
    styleUrls: ['./edit-contact-details.component.scss']
})
export class EditContactDetailsComponent implements OnInit {

    formGroup:FormGroup;
    phoneTypes=[{value:'Mobile'},{value:'Landline'}];

    constructor(
        public dialogRef: MatDialogRef<EditContactDetailsComponent>,) { 
            
        this.formGroup=new FormGroup({
            firstName: new FormControl({value:'Umar',disabled:true}),
            lastName:  new FormControl({value:'Khan',disabled:true}),
            phoneNumber: new FormControl('',[Validators.required,Validators.minLength(9)]),
            phonetype:new FormControl('Mobile'),
            loginEmail:new FormControl({value:'foo@bar.com',disabled:true}),
            country:new FormControl('USA',[Validators.required]),
            businessName:new FormControl(''),
            addressLine1:new FormControl('',[Validators.required]),
            addressLine2:new FormControl(''),
            city:new FormControl('',[Validators.required]),
            state:new FormControl('',[Validators.required]),
            zip:new FormControl('',[Validators.required]),
            language:new FormControl('English',[Validators.required])
        });
    }

    ngOnInit(): void {
    }

}
