import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FaqAccordionComponent } from 'src/app/shared/faq-accordion/faq-accordion.component';
import { accordionPanelData } from 'src/app/shared/Models/Models';
import { ProgressbarStepComponent } from 'src/app/shared/progressbar-step/progressbar-step.component';

@Component({
    selector: 'app-faq-screen',
    templateUrl: './faq-screen.component.html',
    styleUrls: ['./faq-screen.component.scss']
})
export class FaqScreenComponent implements OnInit {

    iconUrl: string = "../../../assets/Icons/Progress icons_ colour + number/1/1- Dark grey.svg";
    stepHeading: string = "Download App";
    stepCompletionStatus: string = "6:45 pm";

    allStepHeadings: string[] = ['Download HondaLink App', 'Add Vehice', 'Verify Access', 'Link to Account', 'Acept Terms', 'Complete Enrollment', 'Send First Remote Command'];
    stepStatus: string[] = ['Ongoing', 'Not Started', 'Not Started', 'Not Started', 'Not Started', 'Not Started', 'Not Started'];
    allStepDescriptions: string[] = [
        'Instruct the customer to download the HondaLink app from the App Store (iOS) or Google Play Store (Android).\n\nThe customer can also go to hondalink.com on their phone browser and follow the download button there.\n\nWhen the customer opens the app for the first time, they will be directed to accept the HondaLink Terms & Conditions before they can continue.',
        'Before the customer can enroll their vehicle in the complimentary trial, they must first add their vehicle to the HondaLink app. (If the customer already has a HondaLink account, they will be prompted to Sign In on Step 4.) \n\nOn the Get Started screen, instruct the customer to tap the Add My Vehicle button. They will have the option to add their vehicle either by scanning their VIN or typing it manually.\n\nThe vehicle’s VIN can be found in the inside of the driver side door frame. \n\nUpon successfully adding the VIN, the customer will be presented with the vehicle (MMY) associated with that VIN. If this is the customer’s vehicle, they should tap Add This Vehicle to continue. \n\nIf the vehicle is incorrect, they should tap Add a Different Vehicle to return to the Add Vehicle screen.',
        'After confirming they have added the correct vehicle, the customer will need to verify their access to their vehicle. They should follow the 3-step Verify Access guide presented to them in the app. \n\nThe customer has the option to verify their acess at a later time, but will need to do so before they can activate the complimentary trial. Choosing Verify Later will bring the customer to the HondaLink dashboard with limited features.',
        'Enrolling in the complimentary trial requires a HondaLink account. \n\nIf the customer already has a HondaLink account, they should sign in at this time. If not, they need to create a new account. \n\nCreating an account should take approximately [X] minutes and will require the customer to validate their email address. Once their customer’s registration is complete, they should sign in.',
        'After signing in, the customer will be presented with the Complimentary Trial Terms & Conditions. They will also have the opportunity to review the included features before accepting. \n\nIf the customer chooses not to accept the Terms & Conditions at this time, they will be navigated to the HondaLink dashboard with limited features.',
        'Once the customer has accepted the Trial Terms & Conditions, they will be instructed to create a 4 digit PIN. (Depending on their device, the customer may also have the option to set up Touch ID or Face ID.) \n\nFor security reasons, the customer will need to enter this PIN each time they activate a remote command from the HondaLink app. \n\nAs soon as the customer confirms their PIN, their Complimentary Trial enrollment is complete! If the customer would like assistance in sending their first remote command, proceed to Step 7.',
        ' '
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

    stepSevenData: accordionPanelData[] = [
        {
            faq: "Start/Stop Engine",
            answer: "Helpful instructions for this action"
        },
        {
            faq: "Lock/Unlock Doors",
            answer: "Helpful instructions for this action"
        },
        {
            faq: "Locate Vehicle",
            answer: "Helpful instructions for this action"
        },
        {
            faq: "Honk Horn",
            answer: "Helpful instructions for this action"
        }
    ]


    currrentStepIndex: number = 0;

    constructor(
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
    }
    goToNextStep() {
        this.stepStatus[this.currrentStepIndex] = 'Completed';
        if (this.currrentStepIndex == 6) {
            return;
        }
        this.stepStatus[this.currrentStepIndex + 1] = 'Ongoing';
        this.currrentStepIndex++;
    }
    goToPreviousStep() {
        this.stepStatus[this.currrentStepIndex] = 'Not Started';
        if (this.currrentStepIndex == 0) {
            return;
        }
        this.stepStatus[this.currrentStepIndex - 1] = 'Ongoing';
        this.currrentStepIndex--;
    }
    openSteps() {
        this.dialog.open(ProgressbarStepComponent,
            { height: '98vh' })
    }

    openAccordion() {
        this.dialog.open(FaqAccordionComponent,
            { height: '98vh' })
    }
}
