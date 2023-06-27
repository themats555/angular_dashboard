import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    const user = form.value.user
    const pass = form.value.password
    // chiamare authservice
  }
}

