import { DeleteCustomerComponent } from './delete-customer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  declarations: [DeleteCustomerComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class DeleteCustomerModule {}
