import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {
    this.isLoggedIn = !!this.getToken();
  }

  isLoggedIn: boolean = false;
  private readonly TOKEN_KEY = "authToken";

  login(name: string, password: string): boolean {
    this.isLoggedIn = name == "admin" && password == "admin";
    this.setToken("token");
    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
    this.removeToken();
  }

  private setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  private getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private removeToken(){
    localStorage.removeItem(this.TOKEN_KEY)
  }
}
