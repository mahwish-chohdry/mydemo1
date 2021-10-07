import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'DealerPortal',
    loadChildren: ()=> import ('./dealers-portal/dealers-portal.module').then(m=>m.DealersPortalModule)
  },
  {
    path:'CustomerPortal',
    loadChildren: ()=> import ('./customer-care-portal/customer-care-portal.module').then(m=>m.CustomerCarePortalModule)
  },
  {
      path:'NotFound',
      component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
