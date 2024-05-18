import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string = 'vous êtes déconnecté.';
  name: string;
  password: string;

  constructor() { } 

  ngOnInit(): void {
  }

}
