import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiRespond } from "../common/api-respond";

@Injectable()
export class LoginService {
  constructor(public http: HttpClient) {}

  authencation(username: string, password: string): Observable<ApiRespond> {
    const data = {
      Username: username,
      Password: password
    };
    const uri = "http://localhost:49674/login/";
    return this.http.post<ApiRespond>(uri, data);
  }
}
