import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkOffComponent } from "./work-off.component";
import { WorkService } from "src/app/services/work/work.service";

@NgModule({
  declarations: [WorkOffComponent],
  imports: [CommonModule],
  providers: [WorkService],
  exports: [WorkOffComponent]
})
export class WorkOffModule {}
