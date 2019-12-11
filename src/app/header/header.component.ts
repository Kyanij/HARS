import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  listMenu: any = [
    { name: 'Hotel', path: '/hotel' },
    { name: 'Customer', path: '/customer' },
    { name: 'Reservation', path: '/customer' }
  ];

  constructor() {}

  ngOnInit() {}
}
