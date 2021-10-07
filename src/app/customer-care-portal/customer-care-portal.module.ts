import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

//angular material imports
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { CustomerCareMainComponent } from './customer-care-main/customer-care-main.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerCarePortalRoutingModule } from './customer-care-portal.routing.module';
import { FaqScreenComponent } from './faq-screen/faq-screen.component';
import { EditContactDetailsComponent } from './manage-subscription/edit-contact-details/edit-contact-details.component';
import { ExtendExpiryDateDetailsComponent } from './manage-subscription/extend-expiry-date-details/extend-expiry-date-details.component';
import { ExtendExpiryDateComponent } from './manage-subscription/extend-expiry-date/extend-expiry-date.component';
import { PackageDetailsComponent } from './manage-subscription/package-details/package-details.component';
import { ManageDiscountsComponent } from './subscription-and-discounts/manage-discounts/manage-discounts.component';
import { BillingHistoryComponent } from './billing-screens/billing-history/billing-history.component';
import { ResetPinComponent } from './manage-subscription/reset-pin/reset-pin.component';
import { ChangeSubscriptionComponent } from './subscription-and-discounts/change-subscription/change-subscription.component';
import { AdvancedFiltersComponent } from './billing-screens/advanced-filters/advanced-filters.component';
import { NotificationPreferenceComponent } from './notification-preference/notification-preference.component';
import { ChangeSubscriptionPlanComponent } from './subscription-and-discounts/change-subscription-plan/change-subscription-plan.component';
import { PackageCardComponent } from './subscription-and-discounts/package-card/package-card.component';
import { PromoCardComponent } from './subscription-and-discounts/promo-card/promo-card.component';
import { PlanCardComponent } from './subscription-and-discounts/plan-card/plan-card.component';
import { AddCompensationComponent } from './manage-subscription/add-compensation/add-compensation.component';


@NgModule({
    declarations: [
        CustomerCareMainComponent,
        FaqScreenComponent,
        PackageDetailsComponent,
        ExtendExpiryDateComponent,
        ExtendExpiryDateDetailsComponent,
        EditContactDetailsComponent,
        BillingHistoryComponent,
        ManageDiscountsComponent,
        ResetPinComponent,
        ChangeSubscriptionComponent,
        AdvancedFiltersComponent,
        NotificationPreferenceComponent,
        ChangeSubscriptionComponent,
        ChangeSubscriptionPlanComponent,
        PackageCardComponent,
        PromoCardComponent,
        PlanCardComponent,
        AddCompensationComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        CustomerCarePortalRoutingModule,
        RouterModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        NgSelectModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatCardModule,
        MatRadioModule,
        MatListModule,
        MatIconModule
    ],
    providers: [
        MatDatepickerModule]
})
export class CustomerCarePortalModule { }
