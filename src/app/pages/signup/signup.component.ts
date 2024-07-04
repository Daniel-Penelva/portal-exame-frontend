import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

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

  constructor(private userService: UserService, private snack: MatSnackBar){

  }

  ngOnInit(): void {

  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == null || this.user.username == ''){
      this.snack.open('Nome do usuário é requerido', 'Fechar',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    this.userService.cadastrarUsuario(this.user).subscribe((data) => {
      console.log(data);
      Swal.fire('Usuário cadastrado', 'Usuário cadastrado com sucesso','success');
    }, (error) => {
      console.log(error);
      this.snack.open('Ocorreu um erro do sistema', 'Fechar',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
    });
  }

}
