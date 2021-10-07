import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealerPortalMainComponent } from './dealer-portal-main/dealer-portal-main.component';
import { DealerPortalComponent } from './dealer-portal/dealer-portal.component';

const routes: Routes = [
  {
    path: '',
    component: DealerPortalMainComponent,
    children:[
      {
        path:'',
        component:DealerPortalComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealerPortalRoutingModule { }