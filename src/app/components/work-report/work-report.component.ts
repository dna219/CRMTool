import { Component, OnInit, Input } from "@angular/core";
import { WorkService } from "src/app/services/work/work.service";
import { Work } from "src/app/models/work";
import { stringify } from "@angular/core/src/render3/util";

@Component({
  selector: "work-report",
  templateUrl: "./work-report.component.html",
  styleUrls: ["./work-report.component.scss"]
})
export class WorkReportComponent implements OnInit {
  @Input()
  thisDate: string;

  constructor(public workService: WorkService) {}

  listOfWork: Array<Work> = [];

  ngOnInit() {
    const workItem = new Work();
    this.listOfWork = [workItem];
  }

  addItem() {
    console.log(this.thisDate);
    const workItem = new Work();
    this.listOfWork.push(workItem);
  }

  removeItem() {
    if (this.listOfWork.length === 1) {
      return;
    }
    this.listOfWork.pop();
  }

  sendData(e) {
    this.workService.addWork(this.listOfWork).subscribe(
      resp => {
        console.log(resp);
      },
      err => {
        console.log(err);
      }
    );
  }
}
