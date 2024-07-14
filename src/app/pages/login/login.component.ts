import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginData = {
    "username": '',
    "password": ''
  }

  constructor(){

  }

  ngOnInit(): void {
      
  }

  formSubmit(){
    console.log('Click em botão de login', `Username: ${this.loginData.username} | senha: ${this.loginData.password}`);
  }

}
