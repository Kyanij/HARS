import { AddCustomerComponent } from './add-customer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddCustomerComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule
  ],
  exports: [AddCustomerComponent]
})
export class AddCustomerModule {}
