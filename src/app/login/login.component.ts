import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../services/login/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  success = false;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {}

  login() {
    this.loginService.authencation(this.username, this.password).subscribe(
      resp => {
        if (resp.Data) {
          console.log(resp.Data);
          this.router.navigate(["main"]);
        } else {
          console.log("Sai");
        }
      },
      err => {}
    );
  }

  logout() {}
}
