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

  // Fechar sessão e eliminar o token - remove os dados de autenticação armazenados no localStorage, o que efetivamente 'desloga' o usuário.
  public logout(){
    localStorage.removeItem('token');                   // remove o item associado a chave 'token' do localStorage, lembrando que o token está associado a autenticação do usuário
    localStorage.removeItem('user');                    // remove o item chave 'user' do localStorage, aqui inclui os detalhes do username, roles, ou qualquer outro dado relevante armazenado durante a sessão
    return true;                                        // return true para indicar que a operação de logout foi realizada com sucesso
  }

  /* Recuperar o token JWT de autenticação armazenado no localStorage que foi recebido após o login do usuário e é necessário para autenticar 
  futuras requisições feitas pelo usuário*/ 
  public getToken(){
    return localStorage.getItem('token');               // recupera o valor associado à chave 'token' do localStorage. Se achave estiver presente no localStorage, o método retorna o valor do token de autenticação. Caso contrário retorna null.
  }


  /* método é utilizado para armazenar informações do usuário no localStorage. Esse método garante a facilidade de acesso as informações do 
  usuário em diferentes partes da aplicação sem a necessidade de fazer requisições ao servidor.*/ 
  public setUser(user:any){
    localStorage.setItem('user', JSON.stringify(user));  // converte o objeto 'user' em uma string JSON e em seguida armazena essa string no localStorage com a chave 'user'.
  }

  /* método para recuperar as informações do usuário armazenadas no localStorage.*/
  public getUser(){
    let userStr = localStorage.getItem('user');          // recupera a string armazenada no localStorage com a chave 'user'
    if(userStr != null){
      return JSON.parse(userStr);                        // Caso o string não seja nulo, ela é convertida de volta para um objeto JavaScript usando o 'JSON.parse'.
    }else{
      this.logout();
      return null;                                       // se a string for nula, significa que não há informações do usuário armazenadas. E é chamado o logout() para remover o token ou informações residuais no localStorage.
    }
  }

  
  /* método é utilizado para obter o role do usuário que está armazenado no localStorage. Esse método é útil quando a aplicação precisa 
  determinar as permissões ou o nível de acesso do usuário. Por exemplo, saber se o usuário tem permissões administrativas ou apenas 
  permissões de usuário comum.*/
  public getUserRole(){
    let user = this.getUser();                            // obtêm as informações do usuário armazenadas no localStorage. 
    return user.authorities[0].authority;                 // acessa o role do usuário na lista de authorities e retorna o valor da propriedade 'authority'.
  }

}
