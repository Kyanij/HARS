import { MatButtonModule, MatIconModule } from '@angular/material';
import { ListHotelComponent } from './list-hotel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { AddHotelModule } from '../add-hotel/add-hotel.module';

@NgModule({
  declarations: [ListHotelComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    AddHotelModule
  ],
  exports: [ListHotelComponent],
  providers: []
})
export class ListHotelModule {}
