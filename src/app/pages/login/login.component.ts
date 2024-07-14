import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private snack: MatSnackBar){

  }

  ngOnInit(): void {
      
  }

  formSubmit(){
    //console.log('Click em botão de login', `Username: ${this.loginData.username} | senha: ${this.loginData.password}`);

    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null){
      this.snack.open("Username requerido", 'Fechar',{duration: 3000});
      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this.snack.open("Password requerido", 'Fechar',{duration: 3000});
      return;
    }
  }

}
