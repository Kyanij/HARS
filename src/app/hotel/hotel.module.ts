import { ListHotelModule } from './list-hotel/list-hotel.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './hotel.component';
import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSnackBarModule,
  MatTabsModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HotelComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTabsModule,
    ListHotelModule
  ]
})
export class HotelModule {}
