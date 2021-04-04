import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkOffModule } from "../components/work-off/work-off.module";
import { WorkReportModule } from "../components/work-report/work-report.module";
import { HomePageComponent } from "./home-page.component";

@NgModule({
  imports: [CommonModule, WorkOffModule, WorkReportModule],
  declarations: [HomePageComponent]
})
export class HomePageModule {}
