import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import * as moment from "moment";
import { WorkService } from "src/app/services/work/work.service";
import { Day } from "src/app/models/day";
import { Keyboard } from "src/app/enum/keyboard.enum";

@Component({
  selector: "work-off",
  templateUrl: "./work-off.component.html",
  styleUrls: ["./work-off.component.scss"]
})
export class WorkOffComponent implements OnInit {
  @Output()
  dayRespond = new EventEmitter<any>();

  // Quy ước ngày hiện tại
  thisYear = 2019;
  thisMonth: number;
  today: number;

  // Các mảng để generate Lịch
  dateWeek = [];
  dayOfWeek = [];
  calendar = [];

  // Ngày được chọn
  selectedDay: number;

  constructor(public workService: WorkService) {}

  ngOnInit() {
    moment.locale("vi");
    this.today = moment().date();
    this.thisMonth = moment().month();
    this.dayOfWeek = moment.weekdaysShort(true);
    this.generateCalendar();
  }

  // ------------
  // Tạo dữ liệu lịch
  // ------------
  generateCalendar() {
    const startWeek = moment()
      .startOf("month")
      .week();

    const endWeek = moment()
      .endOf("month")
      .week();

    for (let week = startWeek; week < endWeek + 1; week++) {
      this.calendar.push({
        weeks: week,
        days: Array(7)
          .fill(0)
          .map((n, i) =>
            moment()
              .week(week)
              .startOf("week")
              .clone()
              .add(n + i, "day")
              .format("Do")
          )
      });
    }
    console.log(this.calendar);

    for (let i = 0; i < 7; i++) {
      if (this.calendar[0].days[i] === "1") {
        return;
      } else {
        this.calendar[0].days[i] = "";
      }
    }
    for (let j = 6; j >= 0; j--) {
      if (this.calendar[this.calendar.length - 1].days[j] === "1") {
        this.calendar[this.calendar.length - 1].days[j] = "";
        return;
      } else {
        this.calendar[this.calendar.length - 1].days[j] = "";
      }
    }
  }

  // ------------
  // Chọn ngày bằng chuột
  // ---------
  clickDate(item) {
    this.selectedDay = parseInt(item);
    this.sendDate();
  }

  // ------------
  // Chuyển ngày khi ấn phím mũi tên
  // ---------
  keypressDate(e) {
    switch (e.keyCode) {
      case Keyboard.ArrowRight:
        this.selectedDay++;
        break;
      case Keyboard.ArrowLeft:
        this.selectedDay--;
        break;
      case Keyboard.ArrowDown:
        this.selectedDay += 7;
        break;
      case Keyboard.ArrowUp:
        this.selectedDay -= 7;
        break;
    }
    if (this.selectedDay > 31) {
      this.selectedDay = 31;
    }
    if (this.selectedDay < 1) {
      this.selectedDay = 1;
    }
  }

  // ------------
  // Convert sang DateTime C#
  // ---------
  convertToDate(day: number, month: number, year: number) {
    // const thisDate = new Date(2019, 4, this.selectedDay);
    // console.log(thisDate.toJSON());
    return new Date(year, month, day).toJSON();
  }

  sendDate() {
    const dateFormated = this.convertToDate(2019, 4, this.selectedDay);
    this.dayRespond.emit(dateFormated);
  }

  getData() {
    this.workService.viewWorkOff(1, 3, this.selectedDay).subscribe(
      resp => {
        if (resp.Data.length > 0) {
          console.log(resp.Data[0]);
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
