import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  personData: any[] = [
    { name: 'Tom', age: 22, address: 'New York' },
    { name: 'Hary', age: 43, address: 'DC' },
    { name: 'John', age: 25, address: 'acf' },
    { name: 'Nil', age: 28, address: 'FL' },
    { name: 'Queen', age: 30, address: 'MN' }
  ];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {}
}
