import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

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

  constructor(private snack: MatSnackBar, private loginService: LoginService, private router: Router){

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

    this.loginService.generateToken(this.loginData).subscribe((data:any)=>{
      console.log(data);

      this.loginService.loginUser(data.token);
      this.loginService.getCurrentUser().subscribe((user: any) => {
        this.loginService.setUser(user);                                  // acessa as informações do usuário
        console.log(user);

        if(this.loginService.getUserRole() == "ADMIN"){                   // obtêm o role "ADMIN" do usuário para acessar a página dashboard admin
          //window.location.href = '/admin';
          this.router.navigate(['admin']);
          this.loginService.loginStatusSubject.next(true);

        }else if(this.loginService.getUserRole() == "USER"){              // obtêm o role "USER" do usuário para acessar a página dashboard user
          //window.location.href = '/user-dashboard';
          this.router.navigate(['user-dashboard/0']);
          this.loginService.loginStatusSubject.next(true);

        }else{
          this.loginService.logout();                                     // remove os dados de autenticação e fecha a sessão
        }

      });
    },(error)=>{
      console.log(error);
      this.snack.open('Username ou password inválido', 'Fechar', {
        duration: 3000
      });
    });
  }

}
