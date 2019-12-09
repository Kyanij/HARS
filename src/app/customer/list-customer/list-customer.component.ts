import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'FirstName',
    'LastName',
    'Gender',
    'Address',
    'RoomType',
    'Status'
  ];
  dataSource: any[];

  customer;
  selectedIndex: number;
  selectedRow;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.setData();
  }

  setData() {
    this.dataSource = [
      {
        firstName: 'Kyanij',
        lastName: 'Maharjan',
        gender: 'Male',
        address: 'Kirtipur',
        roomType: 'VIP',
        status: true
      },
      {
        firstName: 'Susmita',
        lastName: 'Rai',
        gender: 'Female',
        address: 'Boudha',
        roomType: 'VIP',
        status: true
      },
      {
        firstName: 'Bishal',
        lastName: 'Basyal',
        gender: 'Male',
        address: 'Gwarko',
        roomType: 'Deluxe',
        status: false
      },
      {
        firstName: 'Nitesh',
        lastName: 'Manandhar',
        gender: 'Male',
        address: 'Sorukhute',
        roomType: 'Deluxe',
        status: false
      }
    ];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('The dialog was closed', result);
        const newArray = [...this.dataSource];
        newArray.unshift(result);
        this.dataSource = newArray;
      }
    });
  }

  editClick(): void {
    if (this.selectedIndex != null) {
      const dialogRef = this.dialog.open(AddCustomerComponent, {
        width: '250px',
        data: this.dataSource[this.selectedIndex]
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          const newArray = [...this.dataSource];
          newArray[this.selectedIndex] = result;
          this.dataSource = newArray;
        }
      });
    } else {
      this.openSnackBar();
    }
  }

  onDelete() {
    if (this.selectedIndex != null) {
      const dialogRef = this.dialog.open(DeleteCustomerComponent, {
        width: '300px',
        data: { array: this.dataSource, index: this.selectedIndex }
      });

      dialogRef.afterClosed().subscribe(newarray => {
        if (newarray) {
          console.log('dialog box closed');
          this.dataSource = newarray;
        }
      });
    } else {
      this.openSnackBar();
    }
  }

  getIndex(index) {
    this.selectedIndex = index;
    console.log(this.selectedIndex);
  }

  openSnackBar() {
    this.snackBar.open('Please select a row', 'Alert', {
      duration: 2000
    });
  }
}
