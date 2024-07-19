import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  isLoggedIn = false;
  user: any = null;

  constructor(public login: LoginService){}

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();     // Armazena o estado de autenticação do usuário (se está logado ou não). E Chama o método do LoginService que verifica se o usuário está logado, retornando true ou false.
    this.user = this.login.getUser();              // Armazena as informações do usuário logado. e chama o método do LoginService que obtém os detalhes do usuário a partir do armazenamento local (localStorage).

    this.login.loginStatusSubject.asObservable().subscribe(data => {  // Notifica os assinantes sobre mudanças no estado de login. O asObservable converte o Subject em um Observable, permitindo que outros componentes se inscrevam para receber atualizações. E  o subscribe(...) inscreve o componente para receber notificações sempre que o estado de login mudar.
      this.isLoggedIn = this.login.isLoggedIn();                      // Atualiza a propriedade isLoggedIn do componente com o estado de login mais recente.
      this.user = this.login.getUser();                               // Atualiza a propriedade user do componente com os dados do usuário mais recentes.
    })
   }

  /* método para deslogar o usuário, removendo seus dados de autenticação e recarregando a página para refletir o estado deslogado.*/
  public logout(){
    this.login.logout();           // remove os dados de autenticação
    window.location.reload();      // recarrega a página atual
  }

}
