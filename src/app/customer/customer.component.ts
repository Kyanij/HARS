import { CustomerDetailComponent } from "./customer-detail/customer-detail.component";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.scss"]
})
export class CustomerComponent implements OnInit {
  title = "Customer";
  firstName = "Kyanij";
  lastName = "Maharjan";
  selected = "Angular";
  myName = "caniz";
  customerName = "kyanij";

  receivedMessage: string;

  personData: any[] = [
    { name: "Tom", age: 22, address: "New York" },
    { name: "Hary", age: 43, address: "DC" },
    { name: "John", age: 25, address: "acf" },
    { name: "Nil", age: 28, address: "FL" },
    { name: "Queen", age: 30, address: "MN" }
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  onChange(e: any) {
    // debugger;
    this.selected = e.value;
  }

  onRowClick(data) {
    this.customerName = data.name;
  }

  onMessageReceive(event) {
    this.receivedMessage = event;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomerDetailComponent, {
      width: "350px"
      //
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}
