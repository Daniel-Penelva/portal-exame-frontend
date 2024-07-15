import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  // método para gerar um token - lembrando que esse método é do tipo Observable
  public generateToken(loginData: any) {
    return this.http.post(`${baserUrl}/generate-token`, loginData);
  }

  // método para iniciar a sessão e armazenar o token de autenticação no localStorage do navegador
  public loginUser(token:any){
    localStorage.setItem('token', token);
  }

/* método para verificar se um usuário está logado ou não - verifica a presença de um token de autenticação no localStorage. Esse método 
  protege rotas e componentes da aplicação, garantindo que apenas usuários autenticados possam acessá-los.*/ 
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == null || tokenStr == ''){   // essas verificações garatem que o token seja considerado inválido ou ausente
      return false;                                                    // return false indica que o usuário não está logado
    }else{
      return true;                                                     // return true indica que o usuário está logado
    }
  }
  
}
