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
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { DeleteHotelComponent } from './delete-hotel/delete-hotel.component';

@NgModule({
  declarations: [HotelComponent, DeleteHotelComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTabsModule,
    ListHotelModule
  ],
  entryComponents:[AddHotelComponent]
})
export class HotelModule {}
