import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerCareMainComponent } from './customer-care-main/customer-care-main.component';
import { FaqScreenComponent } from './faq-screen/faq-screen.component';
import { BillingHistoryComponent } from './billing-screens/billing-history/billing-history.component';
import { PackageDetailsComponent } from './manage-subscription/package-details/package-details.component';
import { ChangeSubscriptionComponent } from './subscription-and-discounts/change-subscription/change-subscription.component';
import { ChangeSubscriptionPlanComponent } from './subscription-and-discounts/change-subscription-plan/change-subscription-plan.component';

const routes: Routes = [
    {
        path: '',
        component: CustomerCareMainComponent,
        children: [
            {
                path: '',
                component: FaqScreenComponent
            },
            {
                path: 'manage-subscription',
                component: PackageDetailsComponent
            },
            {
                path:'billing-history',
                component:BillingHistoryComponent
            },
            {
                path:'change-subscription',
                component:ChangeSubscriptionComponent
            },
            {
                path:'subscription-plan',
                component: ChangeSubscriptionPlanComponent
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerCarePortalRoutingModule { }