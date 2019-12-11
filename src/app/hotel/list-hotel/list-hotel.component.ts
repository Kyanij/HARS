import { DeleteHotelComponent } from './../delete-hotel/delete-hotel.component';
import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { MatDialog } from '@angular/material';
import { AddHotelComponent } from '../add-hotel/add-hotel.component';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.scss']
})
export class ListHotelComponent implements OnInit {
  // hotelList: any[] = [
  //   { name: 'Everest Hotel', address: 'New Baneshwor', vatNumber: 'ad3443cc' },
  //   { name: 'Everest Hotel', address: 'New Baneshwor', vatNumber: 'ad3443cc' }
  // ];
  hotelList: any[];
  selectedId: number;
  selectedIndex: number;

  displayedColumns: string[] = ['HotelId', 'HotelName', 'VatNumber'];

  constructor(
    private hotelService: HotelService,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.hotelService.getHotel().subscribe(response => {
      console.log('data', response);
      this.hotelList = response;
    });
  }

  openAddHotel() {
    const dialogRef = this.matDialog.open(AddHotelComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.hotelService.addHotel(result).subscribe(res => {
        //  console.log(res);
        const newArray = [...this.hotelList];
        //   result.hotelId = res;
        newArray.unshift(result);
        this.hotelList = newArray;
        // });
        console.log('From parent', result);
      }
    });
  }

  getIndex(index) {
    this.selectedIndex = index;
    this.selectedId = this.hotelList[index].hotelId;
    console.log(this.hotelList[index].hotelId);
  }

  deleteHotel() {
    this.hotelService.delHotel(this.selectedId).subscribe(res => {
      const newArray = [...this.hotelList];
      newArray.splice(this.selectedIndex, 1);
      this.hotelList = newArray;
      console.log(res);
    });
  }

  editHotel() {
    const dialogRef = this.matDialog.open(AddHotelComponent, {
      width: '250px',
      data: this.hotelList[this.selectedIndex]
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.hotelService.editHotel(result).subscribe(res => {
          console.log(res);
          const newArray = [...this.hotelList];
          newArray[this.selectedIndex] = result;
          this.hotelList = newArray;
        });
        console.log('From parent', result);
      }
    });
  }
}
