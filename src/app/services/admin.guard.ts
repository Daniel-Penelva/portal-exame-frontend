import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// O decorator @Injectable com providedIn: 'root' faz com que este serviço seja um singleton e esteja disponível em toda a aplicação.
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

   // O constructor injeta o LoginService e o Router no guard. O LoginService é usado para verificar o status de login e o papel do usuário, e o Router é usado para redirecionar o usuário se necessário.
  constructor(private loginService: LoginService, private router: Router) {}

  // O método canActivate é chamado pelo Angular Router para determinar se a rota pode ser ativada.
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginService.isLoggedIn() && this.loginService.getUserRole() === 'ADMIN') {        // Verifica se o usuário está logado e se o seu papel é 'ADMIN'.
      return true;                                                                              // Se as condições forem verdadeiras, permite a ativação da rota retornando true.
    }

    this.router.navigate(['login']);                                                             // Se as condições não forem satisfeitas, redireciona o usuário para a página de login.
    return false;                                                                                // Retorna false para impedir a ativação da rota.
  }
}

/* Esse guard tem como finalidade decidir se a rota pode ser ativada ou não. O AdminGuard verifica se o usuário está logado e se possui o papel 
de "ADMIN". Se ambas as condições forem verdadeiras, ele permite o acesso à rota protegida. Caso contrário, ele redireciona o usuário para a 
página de login. */