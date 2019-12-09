import { DeleteCustomerModule } from './list-customer/delete-customer/delete-customer.module';
import { CustomerDetailModule } from './customer-detail/customer-detail.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';

import { CustomerService } from '../service/customer/customer.service';

import {
  MatInputModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatRadioModule,
  MatCheckboxModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { AddCustomerComponent } from './list-customer/add-customer/add-customer.component';
import { DeleteCustomerComponent } from './list-customer/delete-customer/delete-customer.component';

@NgModule({
  declarations: [
    CustomerComponent,
    ListCustomerComponent,
    AddCustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    CustomerDetailModule,
    MatDialogModule,
    DeleteCustomerModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  exports: [CustomerComponent, ListCustomerComponent],
  entryComponents: [
    CustomerDetailComponent,
    AddCustomerComponent,
    DeleteCustomerComponent
  ],
  providers: [CustomerService]
})
export class CustomerModule {}
