import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FaqScreenComponent } from '../faq-screen/faq-screen.component';

@Component({
  selector: 'app-customer-care-main',
  templateUrl: './customer-care-main.component.html',
  styleUrls: ['./customer-care-main.component.scss']
})
export class CustomerCareMainComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openFAQs(){
    this.dialog.open(FaqScreenComponent,
    {height:'98vh'})
  }
}
