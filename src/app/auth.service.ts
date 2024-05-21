import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  
  isLoggedIn: boolean = false;
  userRole: string | null = null;
  private readonly TOKEN_KEY = "authToken";
  private readonly ROLE_KEY = "userRole";

  private authStatusSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
  authStatus$ = this.authStatusSubject.asObservable();
  
  constructor() {
    this.isLoggedIn = !!this.getToken();
    this.userRole = this.getRole();
  }
  
  login(name: string, password: string): boolean {
    if (name === "admin" && password === "admin") {
      this.isLoggedIn = true;
      this.setToken("token");
      this.setRole("admin");
      this.authStatusSubject.next(true);
      return true;
    } else if (name === "user" && password === "user") {
      this.isLoggedIn = true;
      this.setToken("token");
      this.setRole("user");
      this.authStatusSubject.next(true);
      return true;
    }

    return false;
  }

  logout() {
    this.isLoggedIn = false;
    this.removeToken();
    this.removeRole();
  }

  private setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  private getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private removeToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  private setRole(role: string) {
    localStorage.setItem(this.ROLE_KEY, role);
  }

  private getRole(): string | null {
    return localStorage.getItem(this.ROLE_KEY);
  }

  private removeRole() {
    localStorage.removeItem(this.ROLE_KEY);
  }

  public isAdmin(): boolean {
    return this.userRole === 'admin';
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
