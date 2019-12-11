import { HotelService } from './../hotel.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss']
})
export class AddHotelComponent implements OnInit {
  formObject: any = {
    hotelId: null,
    hotelName: '',
    vatNumber: ''
  };
  constructor(
    private dialogRef: MatDialogRef<AddHotelComponent>,
    private hotelService: HotelService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.formObject = { ...this.data };
  }

  onSave() {
    this.hotelService.addHotel(this.formObject).subscribe(id => {
      console.log(this.formObject);
      this.formObject.hotelId = id;
    });
    this.dialogRef.close(this.formObject);
  }
}
