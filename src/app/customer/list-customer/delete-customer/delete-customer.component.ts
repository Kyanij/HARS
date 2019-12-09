import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit {
  constructor(
    private dialog: MatDialogRef<DeleteCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data.index);
  }

  closeDialog() {
    console.log('delete works');
    this.dialog.close(this.data.array);
  }

  onButtonClick() {
    const newArray = [...this.data.array];
    newArray.splice(this.data.index, 1);

    this.dialog.close(newArray);
  }
}
