import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';

import { HeaderComponent } from './header/header.component';
import { StepCompletionStatusComponent } from './step-completion-status/step-completion-status.component';
import { ProgressbarStepComponent } from './progressbar-step/progressbar-step.component';
import { FaqAccordionComponent } from './faq-accordion/faq-accordion.component';
import { DealerPopupFooterComponent } from './dealer-popup-footer/dealer-popup-footer.component';
import { ReasonsListComponent } from './Cancel Popup/reasons-list/reasons-list.component';
import { CancelPopupComponent } from './Cancel Popup/cancel-popup/cancel-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CustomAccordionComponent } from './custom-accordion/custom-accordion.component';

@NgModule({
  declarations: [HeaderComponent, StepCompletionStatusComponent, ProgressbarStepComponent, FaqAccordionComponent, DealerPopupFooterComponent, ReasonsListComponent, CancelPopupComponent, CustomAccordionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatListModule
  ],
  exports:[HeaderComponent, StepCompletionStatusComponent, ProgressbarStepComponent, FaqAccordionComponent, DealerPopupFooterComponent, ReasonsListComponent, CancelPopupComponent, CustomAccordionComponent]
})
export class SharedModule { }
