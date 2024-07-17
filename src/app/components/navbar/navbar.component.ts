import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  constructor(public login: LoginService){}

  ngOnInit(): void { }

  /* método para deslogar o usuário, removendo seus dados de autenticação e recarregando a página para refletir o estado deslogado.*/
  public logout(){
    this.login.logout();           // remove os dados de autenticação
    window.location.reload();      // recarrega a página atual
  }

}
