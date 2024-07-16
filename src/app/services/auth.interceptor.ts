import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let authReq = req;                                         // Inicializa uma variável authReq com a requisição original
    const token = this.loginService.getToken();                // Obtém o token de autenticação do LoginService
    
    if (token != null) {                                       // Verifica se o token não é nulo
      authReq = authReq.clone({                                
        setHeaders: { Authorization: `Bearer ${token}` },      // Clona a requisição original e adiciona o cabeçalho Authorization com o token
      });
    }
    return next.handle(authReq);                               // Passa a requisição (original ou clonada) para o próximo manipulador na cadeia
  }
}


/* Exporta um array de provedores que registra o AuthInterceptor como um interceptor HTTP */
export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,                                 // Define que este é um provedor de HTTP_INTERCEPTORS
    useClass: AuthInterceptor,                                  // Usa a classe AuthInterceptor como a implementação
    multi: true,                                                // Permite múltiplos interceptors
  },
];

/* Esse AuthInterceptor garante que a aplicação esteja sempre enviando o token de autenticação necessário em requisições HTTP, melhorando a 
segurança e a organização do código. */

/* Como vai funcionar a lógica da class AuthInterceptor: 
    -> Verifica se um token JWT está disponível através do LoginService.
    -> Se um token for encontrado, ele clona a requisição original e adiciona o cabeçalho Authorization com o token.
    -> Em seguida, passa a requisição (original ou clonada) para o próximo manipulador na cadeia.
*/

/* Exportação de Providers: 
    -> O authInterceptorProviders é um array que registra o AuthInterceptor como um provedor de HTTP_INTERCEPTORS.
    -> multi: true indica que múltiplos interceptors podem ser usados, permitindo que outros interceptors sejam registrados juntamente com esse.
*/

/* Esse interceptor é útil para:
    -> Autenticação: Automatiza a inclusão do token em todas as requisições que requerem autenticação.
    -> Centralização: Mantém a lógica de autenticação em um único lugar, facilitando a manutenção.
*/
