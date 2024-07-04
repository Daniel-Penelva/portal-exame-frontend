import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  public user = {
    username:'',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
  };

  constructor(private userService: UserService){

  }

  ngOnInit(): void {

  }

  forSubmit(){
    console.log(this.user);
    if(this.user.username == null || this.user.username == ''){
      alert('O username é requerido');
      return;
    }

    this.userService.cadastrarUsuario(this.user).subscribe((data) => {
      console.log(data);
      alert('Usuário cadastrado com sucesso');
    }, (error) => {
      console.log(error);
      alert('Sistema ocorreu um erro');
    });
  }

}
