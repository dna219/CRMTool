import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WorkService {
  constructor(private http: HttpClient) {}

  // ------------
  // Xem ngày nghỉ của User
  // -------------
  viewWorkOff(userID: number, month?: number, day?: number) {
    const uri = `http://localhost:49674/workoff/${userID}/${month}/${day}`;
    return this.http.get<any>(uri);
  }

  // ------------
  // Gửi điểm năng suất
  // ------------
  addWork(data) {
    debugger;
    const uri = "http://localhost:49674/work/";
    return this.http.post<any>(uri, data);
  }
}
