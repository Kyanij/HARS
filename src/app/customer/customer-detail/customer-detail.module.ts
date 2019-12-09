import { CustomerDetailComponent } from "./customer-detail.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [CustomerDetailComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [CustomerDetailComponent]
})
export class CustomerDetailModule {}
