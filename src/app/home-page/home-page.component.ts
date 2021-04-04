import { Component, OnInit } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  data: object;

  // Mảng chứa các tháng trong năm
  monthOfYear = [];

  isShowCalendar = true;

  constructor() {}

  ngOnInit() {
    moment.locale("vi");
    this.monthOfYear = moment.months();
  }

  receiveDay(e) {
    this.data = e;
    console.log(this.data);
  }

  showCalendar(e) {
    if (this.isShowCalendar) {
      this.isShowCalendar = false;
    } else {
      this.isShowCalendar = true;
    }
  }
}
