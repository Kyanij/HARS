import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-customer-detail",
  templateUrl: "./customer-detail.component.html",
  styleUrls: ["./customer-detail.component.scss"]
})
export class CustomerDetailComponent implements OnInit {
  @Input() myName: string;
  @Output() message: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onButtomClick() {
    this.message.emit("whats up");
  }
}
