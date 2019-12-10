import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.scss']
})
export class ListHotelComponent implements OnInit {
  hotelList: any[] = [
    { name: 'Everest Hotel', address: 'New Baneshwor', vatNumber: 'ad3443cc' },
    { name: 'Everest Hotel', address: 'New Baneshwor', vatNumber: 'ad3443cc' }
  ];

  displayedColumns: string[] = ['HotelName', 'Address', 'VatNumber', 'Action'];

  constructor() {}

  ngOnInit() {}
}
