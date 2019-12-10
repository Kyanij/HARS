import { CustomerService } from './../../service/customer/customer.service';
import { DeleteCustomerModule } from './delete-customer/delete-customer.module';
import { ListCustomerComponent } from './list-customer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MatSnackBarModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  declarations: [ListCustomerComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    DeleteCustomerModule,
    MatSnackBarModule
  ],
  exports: [ListCustomerComponent],
  providers: [CustomerService]
})
export class ListCustomerModule {}
