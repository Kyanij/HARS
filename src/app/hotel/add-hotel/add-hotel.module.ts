import { MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHotelComponent } from './add-hotel.component';
import {
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddHotelComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [AddHotelComponent]
})
export class AddHotelModule {}
