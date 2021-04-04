import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkReportComponent } from "./work-report.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [WorkReportComponent],
  imports: [CommonModule, FormsModule],
  exports: [WorkReportComponent],
  providers: []
})
export class WorkReportModule {}
