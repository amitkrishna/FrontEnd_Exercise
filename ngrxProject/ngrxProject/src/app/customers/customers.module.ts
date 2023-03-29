import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomrComponent } from './customr/customr.component';
import { CustomrAddComponent } from './customr-add/customr-add.component';
import { CustomrEditComponent } from './customr-edit/customr-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';


const customersRoutes: Routes = [{ path: "", component: CustomrComponent}];

@NgModule({
  declarations: [
    CustomrComponent,
    CustomrAddComponent,
    CustomrEditComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    RouteModule.forChild(customersRoutes);
  ]
})
export class CustomersModule { }
