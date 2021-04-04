import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      {
        path: "main",
        component: HomePageComponent
      },
      {
        path: "login",
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
