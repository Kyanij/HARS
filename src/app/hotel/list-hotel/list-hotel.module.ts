import { MatButtonModule, MatIconModule } from '@angular/material';
import { ListHotelComponent } from './list-hotel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [ListHotelComponent],
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  exports: [ListHotelComponent]
})
export class ListHotelModule {}
