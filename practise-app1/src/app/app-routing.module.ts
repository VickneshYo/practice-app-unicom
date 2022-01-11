import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPartsComponent } from './add-parts/add-parts.component';
import { UpdatePartsComponent } from './update-parts/update-parts.component';
import { SearchPartsComponent } from './search-parts/search-parts.component';
import { ViewPartsComponent } from './view-parts/view-parts.component';

const routes: Routes = [
  {
    component:AddPartsComponent,
    path:'add-parts'
  },
  {
    component:UpdatePartsComponent,
    path:'update-parts/:id'
  },
  {
    component:SearchPartsComponent,
    path:'search-parts'
  },
  {
    component:ViewPartsComponent,
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
