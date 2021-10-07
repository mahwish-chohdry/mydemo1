import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FaqAccordionComponent } from 'src/app/shared/faq-accordion/faq-accordion.component';
import { accordionPanelData } from 'src/app/shared/Models/Models';

@Component({
  selector: 'app-customer-help-step',
  templateUrl: './customer-help-step.component.html',
  styleUrls: ['./customer-help-step.component.scss']
})
export class CustomerHelpStepComponent implements OnInit {

  allStepHeadings:string[]=['Sending Enrollment Link & Adding Vehicle','Link to Account','Enrollment Completed','First Remote Command'];
  allStepDescriptions:string[]=[
    'Send the customer an enrollment activation link via SMS. The phone number provided should be the same phone on which they downloaded the HondaLink app. \n\nThe customer should receive the message pictured (or similar), and can go ahead and tap on the link when received. If the customer doesn’t receive the message, resend the enrollment link or refer to the SMS Troubleshooting Guide. \n\nThe customer will be automatically redirected to the HondaLink App to complete the enrollment process. Once the app has opened, the customer’s vehicle and enrollment information should be added.',
    'Send the customer an enrollment activation link via SMS. The phone number provided should be the same phone on which they downloaded the HondaLink app. \n\nThe customer should receive the message pictured (or similar), and can go ahead and tap on the link when received. If the customer doesn’t receive the message, resend the enrollment link or refer to the SMS Troubleshooting Guide. \n\nThe customer will be automatically redirected to the HondaLink App to complete the enrollment process. Once the app has opened, the customer’s vehicle and enrollment information should be added.',
    'Send the customer an enrollment activation link via SMS. The phone number provided should be the same phone on which they downloaded the HondaLink app. \n\nThe customer should receive the message pictured (or similar), and can go ahead and tap on the link when received. If the customer doesn’t receive the message, resend the enrollment link or refer to the SMS Troubleshooting Guide. \n\nThe customer will be automatically redirected to the HondaLink App to complete the enrollment process. Once the app has opened, the customer’s vehicle and enrollment information should be added.',
    'Send the customer an enrollment activation link via SMS. The phone number provided should be the same phone on which they downloaded the HondaLink app. \n\nThe customer should receive the message pictured (or similar), and can go ahead and tap on the link when received. If the customer doesn’t receive the message, resend the enrollment link or refer to the SMS Troubleshooting Guide. \n\nThe customer will be automatically redirected to the HondaLink App to complete the enrollment process. Once the app has opened, the customer’s vehicle and enrollment information should be added.'
  ];

  panelData: accordionPanelData[] = [
    {
      faq: "1. Frequently asked Question number one",
      answer: "Answer to the above asked FAQ."
    },
    {
      faq: "2. Frequently asked Question number two",
      answer: "Answer to the above asked FAQ."
    },
    {
      faq: "3. Frequently asked Question number three",
      answer: "Answer to the above asked FAQ."
    },
    {
      faq: "4. Frequently asked Question number four",
      answer: "Answer to the above asked FAQ."
    },
    {
      faq: "5. Frequently asked Question number five",
      answer: "Answer to the above asked FAQ."
    }
  ]

  currrentStepIndex:number=0;

  constructor(private dialog:MatDialog, public matDialogRef: MatDialogRef<CustomerHelpStepComponent>) { }

  ngOnInit(): void {
  }

  goToNextStep(){
    if(this.currrentStepIndex==6){
      return;
    }
    this.currrentStepIndex++;
  }
  goToPreviousStep(){
    if(this.currrentStepIndex==0){
      return;
    }
    this.currrentStepIndex--;
  }

  openAccordion() {
    this.dialog.open(FaqAccordionComponent,
      {height:'98vh'})
  }

  onClickClose(){
    this.matDialogRef.close();
  }

}
