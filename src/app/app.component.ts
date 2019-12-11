import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstAngular';
  isDark: boolean;

  listMenu: any = [
    { name: 'Hotel', path: '/hotel', icon: 'apartment' },
    { name: 'Customer', path: '/list-customer', icon: 'account_circle' },
    { name: 'Reservation', path: '/customer', icon: 'add_box' }
  ];

  changeTheme(checked) {
    this.isDark = checked;
  }

  getColor() {
    if (this.isDark) {
      return 'rgb(20, 27, 27)';
    } else return 'white';
  }

  // toggleFullScreen() {
  //   if(document.webkitIsFullScreen) {
  //     this._exitFullscreen();}
  //     else {
  //       this._activateFullscreen();
  //     }
  //   }
  

  //   // Activate Full Screen

  //   private _activateFullscreen() {
  //     let fullscreenElement = document.documentElement;
  //     if(fullscreenElement.requestFullscreen) {
  //       fullscreenElement.requestFullscreen();
  //     }else if (fullscreenElement.webkitRequestFullScreen) {
  //       fullscreenElement.webkitRequestFullscreen();
  //     }
  //   }

    // private _exitFullScreen() {
    //   if(document.exitFullscreen) {
    //     document.exitFullscreen();
    //   } 
    // }

  }

