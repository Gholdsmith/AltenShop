import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "app/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  message: string = "vous êtes déconnecté.";
  name: string;
  password: string;
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth = this.authService;
  }

  setMessage() {
    if (this.auth.isLoggedIn) {
      this.message = "Vous êtes connecté (admin/admin)";
    } else {
      this.message = "Identifiant ou mot de passe incorrect.";
    }
  }

  login() {
    this.message = "tentative de connexion en cours...";

    this.auth.login(this.name, this.password);
    this.setMessage();
    if (this.auth.isLoggedIn) 
      this.router.navigate(["admin/products"]);
    else {
      this.password = "";
      this.router.navigate(["login"]);
    }
  }

  logout() {
    this.auth.logout();
    this.message = "Vous êtes déconnecté";
  }
}
