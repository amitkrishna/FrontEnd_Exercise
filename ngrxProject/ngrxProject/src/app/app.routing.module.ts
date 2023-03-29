import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { appendFile } from 'fs';

const appRoutes: Routes = [
  { path: "",  component: HomeComponent },
  {
    path: "customers",
    loadChildren: "../app/customers/customers.module"
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class App.RoutingModule { }
