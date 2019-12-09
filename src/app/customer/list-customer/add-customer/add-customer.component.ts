import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  formObject: any = {
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    roomType: '',
    status: false
  };

  status: any = [
    { viewValue: 'Active', value: true },
    { viewValue: 'InActive', value: false }
  ];

  gender: any = [
    { viewValue: 'Male', value: 'male' },
    { viewValue: 'Female', value: 'female' }
  ];

  roomType: any = [
    { viewValue: 'VIP', value: 'VIP' },
    { viewValue: 'Deluxe', value: 'Deluxe' }
  ];

  constructor(
    private dialogRef: MatDialogRef<AddCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data);

    this.formObject = { ...this.data };
  }

  onSubmitForm(value) {
    this.dialogRef.close(value);
  }


}
