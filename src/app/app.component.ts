import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstAngular';

  listMenu: any = [
    { name: 'Hotel', path: '/hotel' },
    { name: 'Customer', path: '/list-customer' },
    { name: 'Reservation', path: '/customer' }
  ];
}
