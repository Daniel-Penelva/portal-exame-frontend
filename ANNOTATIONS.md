# Operador ?.

A interrogação `?` é chamada de "operador de acesso condicional" (optional chaining operator) em JavaScript. Ela é usada para evitar erros de referência nula (null reference errors) quando se tenta acessar propriedades de objetos que podem ser nulos ou indefinidos.

No meu exemplo:

```typescript
field?.hasError('phone')
```

O operador `?.` verifica se `field` é `null` ou `undefined` antes de tentar acessar o método `hasError()`. Isso significa que, se `field` for `null` ou `undefined`, a expressão simplesmente retornará `undefined` em vez de gerar um erro.

Sem o uso do operador `?.`, se `field` fosse `null` ou `undefined`, a expressão `field.hasError('phone')` geraria um erro de referência nula (Uncaught TypeError: Cannot read property 'hasError' of null/undefined).

Então, o uso do `?.` é uma forma segura de acessar propriedades e métodos de objetos que podem ser nulos ou indefinidos, evitando que o seu código quebre inesperadamente.

---

# pathMatch: 'full'

O parâmetro `pathMatch: 'full'` é usado no roteamento de aplicações Angular e tem a função de definir como o Angular deve comparar a URL atual com a rota definida.

Quando define uma rota com o parâmetro `pathMatch: 'full'` está dizendo ao Angular que a URL atual deve corresponder exatamente à rota definida, sem nenhum segmento adicional.

Por exemplo:

Suponha que tenha a seguinte rota definida:

```typescript
{
  path: 'home',
  component: HomeComponent,
  pathMatch: 'full'
}
```

Nesse caso, as seguintes URLs seriam consideradas correspondentes à rota:

- `/home`
- `http://example.com/home`

Mas as seguintes URLs **não** seriam consideradas correspondentes:

- `/home/about`
- `/home?query=value`
- `/home/123`

Isso acontece porque o `pathMatch: 'full'` exige que a URL corresponda exatamente ao caminho definido, sem nenhum segmento adicional.

Agora, se tiver a seguinte rota definida:

```typescript
{
  path: 'home',
  component: HomeComponent
}
```

Nesse caso, as seguintes URLs seriam consideradas correspondentes à rota:

- `/home`
- `/home/about`
- `/home?query=value`
- `/home/123`

Isso acontece porque, sem o `pathMatch: 'full'`, o Angular considera que a rota corresponde a qualquer URL que comece com o caminho definido.

Então, em resumo, `pathMatch: 'full'` é usado para garantir que a URL corresponda exatamente ao caminho definido, sem nenhum segmento adicional.

---

# Local Storage

O `localStorage` é um objeto que faz parte da Web Storage API no HTML5 e é utilizado para armazenar dados no navegador do usuário de maneira persistente. Diferentemente dos cookies, os dados armazenados no `localStorage` não expiram ao fechar o navegador. Isso torna o `localStorage` ideal para armazenar informações que precisam ser acessíveis durante várias sessões de navegação.

### Características do `localStorage`

1. **Persistência de Dados**:
   - Os dados armazenados no `localStorage` permanecem até que sejam explicitamente removidos. Isso significa que, mesmo que o usuário feche e reabra o navegador, os dados ainda estarão disponíveis.

2. **Capacidade de Armazenamento**:
   - O `localStorage` oferece uma capacidade de armazenamento maior comparada aos cookies, geralmente até 5MB por domínio.

3. **Escopo**:
   - Os dados no `localStorage` são específicos ao domínio. Isso significa que diferentes sites não podem acessar os dados uns dos outros.

4. **Armazenamento de Chave-Valor**:
   - Os dados no `localStorage` são armazenados como pares de chave-valor (strings). Cada item é armazenado como uma string, mas é possível converter objetos JSON para strings e vice-versa.

### Métodos do `localStorage`

- **`setItem(key, value)`**:
  Armazena um valor associado a uma chave.
  ```javascript
  localStorage.setItem('username', 'JohnDoe');
  ```

- **`getItem(key)`**:
  Recupera o valor associado a uma chave.
  ```javascript
  let username = localStorage.getItem('username');
  ```

- **`removeItem(key)`**:
  Remove o item associado a uma chave.
  ```javascript
  localStorage.removeItem('username');
  ```

- **`clear()`**:
  Remove todos os itens armazenados.
  ```javascript
  localStorage.clear();
  ```

- **`key(index)`**:
  Recupera a chave no índice especificado.
  ```javascript
  let key = localStorage.key(0);
  ```

### Exemplo de Uso

```javascript
// Armazenando um item
localStorage.setItem('token', 'abc123');

// Recuperando um item
let token = localStorage.getItem('token');
console.log(token); // Output: 'abc123'

// Removendo um item
localStorage.removeItem('token');

// Limpando todo o localStorage
localStorage.clear();
```

### Considerações de Segurança

- **Dados Sensíveis**:
  - Evite armazenar dados sensíveis no `localStorage` (como senhas ou informações pessoais) porque esses dados podem ser acessados por scripts no mesmo domínio e são vulneráveis a ataques XSS (Cross-Site Scripting).

- **Limitações de Tamanho**:
  - Embora o `localStorage` ofereça mais espaço do que os cookies, ainda há um limite (geralmente 5MB). Portanto, é importante gerenciar eficientemente o espaço de armazenamento.

### Usos Comuns

- Armazenamento de preferências do usuário.
- Armazenamento de tokens de autenticação para sessões persistentes.
- Cache de dados para melhorar a performance da aplicação.

Em resumo, o `localStorage` é uma ferramenta poderosa para armazenar dados no navegador do usuário de maneira persistente e é amplamente utilizado em aplicações web modernas para melhorar a experiência do usuário e a eficiência da aplicação.

## Meu exemplo - método `loginUser`

O método `loginUser` armazena um token de autenticação no `localStorage` do navegador. Esse token é geralmente utilizado para autenticar e autorizar o usuário em futuras requisições à API. Aqui está uma explicação detalhada sobre o que o método faz:

### Método `loginUser`

```typescript
public loginUser(token: any) {
    localStorage.setItem('token', token);
}
```

### Explicação

1. **Método Público**: 
   - O método é declarado como `public`, o que significa que pode ser acessado de fora da classe onde está definido.

2. **Parâmetro `token`**: 
   - O método aceita um parâmetro `token` do tipo `any`. O `token` é geralmente uma string que contém o token de autenticação retornado pelo servidor após o login bem-sucedido.

3. **Armazenamento no `localStorage`**: 
   - `localStorage.setItem('token', token);`
   - Esta linha armazena o token no `localStorage` do navegador. A chave usada é `'token'` e o valor é o `token` passado como argumento.
   - Isso significa que o token será armazenado no navegador até que seja explicitamente removido ou que o usuário limpe o armazenamento do navegador.

### Usos Comuns

- **Autenticação Persistente**:
  - Armazenar o token no `localStorage` permite que a sessão do usuário permaneça ativa mesmo após a página ser recarregada ou o navegador ser fechado e reaberto.
  
- **Autorização de Requisições**:
  - Em requisições subsequentes à API, o token pode ser recuperado do `localStorage` e incluído nos cabeçalhos das requisições para autenticar o usuário.
  
- **Melhoria da Experiência do Usuário**:
  - Ao manter o usuário logado entre sessões, a experiência do usuário é significativamente melhorada, eliminando a necessidade de login repetido.


### Considerações de Segurança

- **Dados Sensíveis**: 
  - Embora o `localStorage` seja conveniente, evite armazenar informações extremamente sensíveis nele. Tokens de autenticação são geralmente seguros para armazenamento, mas certifique-se de proteger seu aplicativo contra ataques XSS (Cross-Site Scripting), que podem expor o conteúdo do `localStorage`.

- **Expiração de Tokens**: 
  - Tokens geralmente têm um tempo de expiração. Garanta que seu aplicativo verifique a validade do token antes de utilizá-lo e que trate corretamente os tokens expirados (por exemplo, redirecionando o usuário para a tela de login).

Com essas informações, você tem uma visão clara sobre o propósito e o funcionamento do método `loginUser`.

---

# HttpClient

O `HttpClient` é um serviço do Angular que facilita a comunicação com servidores remotos por meio de solicitações HTTP. Ele está disponível no módulo `@angular/common/http` e é amplamente utilizado para fazer solicitações HTTP em aplicações Angular.

### Principais Funcionalidades

1. **Solicitações HTTP**:
   - `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `HEAD`, `OPTIONS`.

2. **Intercepções de Requisições e Respostas**:
   - Permite modificar ou inspecionar solicitações e respostas HTTP antes de serem processadas.

3. **Suporte a Observables**:
   - Utiliza Observables da biblioteca RxJS para operações assíncronas.

4. **Manipulação de Erros**:
   - Fornece mecanismos para capturar e tratar erros de solicitações HTTP.

5. **Configurações de Cabeçalhos e Parâmetros**:
   - Permite adicionar cabeçalhos HTTP personalizados e parâmetros de consulta.

### Importação e Configuração

Para usar `HttpClient`, é necessário importar o módulo `HttpClientModule` no módulo principal da aplicação (geralmente `AppModule`).

#### Passos:

1. **Instalar o Módulo**:
   ```typescript
   import { HttpClientModule } from '@angular/common/http';
   ```

2. **Adicionar no Import**:
   ```typescript
   @NgModule({
     declarations: [
       AppComponent,
       // outros componentes
     ],
     imports: [
       BrowserModule,
       HttpClientModule,
       // outros módulos
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```

### Exemplos de Uso

#### Injeção de `HttpClient` em um Serviço

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://api.example.com/data';

  constructor(private http: HttpClient) { }

  // Método GET
  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método POST
  postData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
```

#### Uso em um Componente

```typescript
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Erro ao buscar dados', error);
      }
    );
  }

  onSubmit(data: any): void {
    this.dataService.postData(data).subscribe(
      (response) => {
        console.log('Dados enviados com sucesso', response);
      },
      (error) => {
        console.error('Erro ao enviar dados', error);
      }
    );
  }
}
```

### Interceptores

Interceptores são usados para modificar solicitações e respostas HTTP. Eles são úteis para adicionar autenticação, registrar atividades ou manipular erros globalmente.

#### Exemplo de Interceptor

```typescript
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(cloned).pipe(
        catchError(err => {
          // Tratamento de erro global
          return throwError(err);
        })
      );
    }
    return next.handle(req);
  }
}
```

#### Registro de Interceptor

```typescript
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class AppModule { }
```

### Conclusão

O `HttpClient` é uma ferramenta poderosa e flexível para fazer requisições HTTP no Angular. Ele simplifica a comunicação com servidores remotos, oferece suporte robusto para operações assíncronas com Observables e fornece mecanismos avançados para manipulação de erros, autenticação e intercepção de requisições e respostas.

---

# Interceptor

Os **Interceptores** no Angular são uma poderosa funcionalidade do módulo `@angular/common/http` que permitem interceptar e modificar requisições e respostas HTTP antes de serem enviadas ou processadas. Eles são ideais para adicionar cabeçalhos de autenticação, manipular erros globalmente e realizar outras tarefas relacionadas às chamadas HTTP.

### Principais Características

1. **Interceptação de Requisições**:
   - Você pode modificar ou adicionar informações a uma requisição antes que ela seja enviada ao servidor.

2. **Interceptação de Respostas**:
   - Permite manipular a resposta recebida de uma requisição antes que ela seja processada pelo componente que fez a chamada.

3. **Tratamento de Erros**:
   - Os interceptores podem ser usados para capturar e tratar erros de forma centralizada, como redirecionar usuários não autenticados.

4. **Encadeamento de Interceptores**:
   - Vários interceptores podem ser registrados e serão executados em ordem, permitindo uma configuração modular e reutilizável.

### Uso Comum
Interceptors são comumente usados para:

  - Adicionar tokens de autenticação a cabeçalhos.
  - Tratar erros globais.
  - Registrar atividades de requisições.
  - Manipular respostas, como transformar dados.

### Como Criar um Interceptor - Exemplo Simples

#### Passo 1: Criar o Interceptor

Você pode criar um interceptor implementando a interface `HttpInterceptor`.

```typescript
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clonar a requisição para adicionar um novo cabeçalho
    const token = localStorage.getItem('token');
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(cloned).pipe(
        catchError(err => {
          // Tratamento de erro
          console.error('Erro na requisição:', err);
          throw err;
        })
      );
    }
    return next.handle(req);
  }
}
```

Explicação dos Componentes
  - @Injectable(): Indica que a classe pode ser injetada como um serviço.

  - HttpInterceptor: Interface que você deve implementar para criar um interceptor.

  - intercept(): Método onde você pode manipular a requisição. Ele recebe a requisição original (req) e o próximo manipulador (next). Você pode modificar a requisição e, em seguida, passar para o próximo manipulador.

#### Passo 2: Registrar o Interceptor

Os interceptores devem ser registrados no módulo principal da aplicação (`AppModule`) ou em um módulo específico.

```typescript
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class AppModule { }
```

### Fluxo de Funcionamento

1. **Requisição**:
   - Quando uma requisição HTTP é feita, o Angular a intercepta e a envia para o interceptor.
   - O interceptor pode modificar a requisição (adicionar cabeçalhos, modificar o corpo, etc.) e, em seguida, passa a requisição para o próximo manipulador.

2. **Resposta**:
   - Após a requisição ser processada pelo servidor, a resposta é recebida pelo interceptor, onde também pode ser manipulada antes de ser enviada ao componente que a fez.

### Exemplo de Interceptor com Tratamento de Erro

Aqui está um exemplo completo que captura erros de autenticação:

```typescript
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(err => {
        if (err.status === 401) {
          // Redirecionar para a página de login ou mostrar um alerta
          console.error('Usuário não autenticado!');
        }
        return throwError(err);
      })
    );
  }
}
```

## Implementação do Interceptor da aplicação

Detalhando a implementação do `AuthInterceptor`.

### Estrutura do AuthInterceptor

```typescript
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.loginService.getToken();
    
    if (token != null) {
      authReq = authReq.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }
    
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
];
```

### Explicação dos Componentes

1. **Importações**:
   - `HTTP_INTERCEPTORS`, `HttpEvent`, `HttpHandler`, `HttpInterceptor`, `HttpRequest`: São classes e interfaces do Angular para trabalhar com requisições HTTP.
   - `Injectable`: Decorador que marca a classe como um serviço que pode ser injetado.
   - `Observable`: Tipo do RxJS usado para manipular operações assíncronas.
   - `LoginService`: Serviço que deve conter a lógica relacionada ao login e gerenciamento de tokens.

2. **Classe AuthInterceptor**:
   - A classe implementa a interface `HttpInterceptor`, que requer a implementação do método `intercept`.

3. **Método `intercept`**:
   - **Parâmetros**:
     - `req`: A requisição HTTP original.
     - `next`: O próximo manipulador na cadeia de interceptação.
   - **Lógica**:
     - Verifica se um token JWT está disponível através do `LoginService`.
     - Se um token for encontrado, ele clona a requisição original e adiciona o cabeçalho `Authorization` com o token.
     - Em seguida, passa a requisição (original ou clonada) para o próximo manipulador na cadeia.

4. **Exportação de Providers**:
   - O `authInterceptorProviders` é um array que registra o `AuthInterceptor` como um provedor de `HTTP_INTERCEPTORS`.
   - `multi: true` indica que múltiplos interceptors podem ser usados, permitindo que outros interceptors sejam registrados juntamente com esse.

### Uso Comum

Esse interceptor é útil para:

- **Autenticação**: Automatiza a inclusão do token em todas as requisições que requerem autenticação.
- **Centralização**: Mantém a lógica de autenticação em um único lugar, facilitando a manutenção.

### Registro no Módulo

Para utilizar o interceptor, você deve registrá-lo no seu módulo principal (geralmente `AppModule`):

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptorProviders } from './path/to/auth.interceptor';

@NgModule({
  declarations: [
    // Componentes
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Outros módulos
  ],
  providers: [
    authInterceptorProviders,
    // Outros provedores
  ],
  bootstrap: [/* Componente raiz */]
})
export class AppModule { }
```

Esse `AuthInterceptor` é uma implementação eficiente para garantir que seu aplicativo Angular esteja sempre enviando o token de autenticação necessário em requisições HTTP, melhorando a segurança e a organização do código.

### Conclusão

Os interceptores são uma ferramenta valiosa no Angular, permitindo que você centralize a lógica de manipulação de requisições e respostas HTTP. Eles ajudam a manter seu código organizado e a aplicar funcionalidades como autenticação e tratamento de erros de forma consistente em toda a aplicação.

---

# Guards

Em Angular, um guard (guarda) é um serviço que pode usar para determinar se uma rota pode ser ativada ou desativada. Os guards são usados para implementar funcionalidades como controle de acesso, verificações de autenticação, autorizações, carregamento de dados, e confirmação de saída de páginas. 

Um guard é uma funcionalidade em Angular que permite controlar o acesso a rotas específicas. Ele é utilizado para proteger rotas de serem acessadas por usuários que não têm permissão.

Existem diferentes tipos de guards em Angular:

1. **CanActivate**: Decide se uma rota pode ser ativada.
2. **CanActivateChild**: Decide se uma rota filha pode ser ativada.
3. **CanDeactivate**: Decide se a rota atual pode ser desativada, ou seja, se pode sair da rota.
4. **CanLoad**: Decide se um módulo pode ser carregado (usado principalmente para carregamento tardio ou lazy loading).
5. **Resolve**: Busca dados antes da rota ser ativada.

### Exemplo simples de CanActivate Guard

criando e usar um `CanActivate` guard:

#### 1. Criar o Guard

Primeiro, crie o guard usando o Angular CLI:

```sh
ng generate guard auth
```

Isso gera um serviço guard (`auth.guard.ts`) que implementa a interface `CanActivate`.

#### 2. Implementar o Guard

No arquivo gerado é implementado a lógica para decidir se a rota pode ser ativada:

```typescript
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Serviço de autenticação fictício

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = this.authService.isLoggedIn(); // Verifica se o usuário está logado
    if (isLoggedIn) {
      return true;
    } else {
      // Redireciona para a página de login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
```

#### 3. Usar o Guard nas Rotas

Aplicando o guard às rotas no arquivo de roteamento (`app-routing.module.ts`):

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Rota protegida pelo guard
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### Outros Tipos de Guards

- **CanActivateChild**: Similar ao `CanActivate`, mas aplica-se a rotas filhas. Implementa a interface `CanActivateChild`.
- **CanDeactivate**: Usado para decidir se é permitido sair de uma rota. Implementa a interface `CanDeactivate`.
- **CanLoad**: Usado para proteger módulos carregados tardiamente. Implementa a interface `CanLoad`.
- **Resolve**: Utilizado para pré-carregar dados antes de ativar uma rota. Implementa a interface `Resolve`.

### Exemplo simples de CanDeactivate Guard

Um exemplo de `CanDeactivate` guard, que pergunta ao usuário se ele quer realmente sair da página:

#### 1. Criar o Guard

```sh
ng generate guard can-deactivate
```

#### 2. Implementar o Guard

```typescript
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
```

#### 3. Implementar no Componente

No componente que deseja proteger, implementa a interface `CanComponentDeactivate`:

```typescript
import { Component } from '@angular/core';
import { CanComponentDeactivate } from './can-deactivate.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements CanComponentDeactivate {

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('Você tem certeza que quer sair? As alterações não salvas serão perdidas.');
  }
}
```

#### 4. Usar o Guard nas Rotas

```typescript
const routes: Routes = [
  { path: 'edit-profile', component: EditProfileComponent, canDeactivate: [CanDeactivateGuard] }
];
```

Esses exemplos simples demonstram como criar e usar diferentes tipos de guards em Angular para proteger as rotas e gerenciar a navegação no aplicativo.

## Meu exemplo Guard Admin na aplicação

### Objetivo do `AdminGuard`
O `AdminGuard` no seu exemplo verifica se o usuário está logado e se possui o papel de "ADMIN". Se ambas as condições forem verdadeiras, ele permite o acesso à rota protegida. Caso contrário, ele redireciona o usuário para a página de login.

### Detalhamento do Código

Comentando o código passo a passo:

```typescript
import { Injectable } from '@angular/core'; // Importa o decorator Injectable para permitir a injeção de dependência.
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'; // Importa interfaces e classes necessárias para criar um guard.
import { Observable } from 'rxjs'; // Importa Observable do RxJS.
import { LoginService } from './login.service'; // Importa o serviço de login, que contém métodos para verificar a autenticação do usuário.

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  // O decorator @Injectable com providedIn: 'root' faz com que este serviço seja um singleton e esteja disponível em toda a aplicação.

  constructor(private loginService: LoginService, private router: Router) {}
  // O constructor injeta o LoginService e o Router no guard. O LoginService é usado para verificar o status de login e o papel do usuário, e o Router é usado para redirecionar o usuário se necessário.

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // O método canActivate é chamado pelo Angular Router para determinar se a rota pode ser ativada.
    // Ele pode retornar um booleano, uma Promise ou um Observable de booleano.

    if (this.loginService.isLoggedIn() && this.loginService.getUserRole() === 'ADMIN') {
      // Verifica se o usuário está logado e se o seu papel é 'ADMIN'.
      return true; // Se as condições forem verdadeiras, permite a ativação da rota retornando true.
    }

    this.router.navigate(['login']); // Se as condições não forem satisfeitas, redireciona o usuário para a página de login.
    return false; // Retorna false para impedir a ativação da rota.
  }
}
```

### Uso do Guard no Roteamento
Para aplicar o `AdminGuard` a uma rota específica deve configurá-lo no módulo de roteamento. Por exemplo:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },         // Já está definido a URL raiz para o HomeComponent que vai ser a página principal
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {path: 'admin', component: DashboardComponent, pathMatch: 'full', canActivate:[AdminGuard]},
  {path: 'user-dashboard', component: UserDashboardComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

### Explicação do Processo
1. **Tentativa de Acesso à Rota Protegida**:
   Quando um usuário tenta acessar a rota protegida (`/admin`), o Angular Router chama o método `canActivate` do `AdminGuard`. Se o guard retornar true, o acesso à rota é permitido. Caso contrário, o usuário é redirecionado para a página de login.

2. **Verificação de Autenticação e Autorização**:
   O método `canActivate` verifica se o usuário está autenticado (`isLoggedIn()`) e se possui o papel de "ADMIN" (`getUserRole() === 'ADMIN'`).

3. **Acesso Permitido ou Negado**:
   - Se o usuário está autenticado e possui o papel "ADMIN", a função retorna `true`, permitindo que a rota seja ativada.
   - Caso contrário, a função redireciona o usuário para a página de login (`this.router.navigate(['login'])`) e retorna `false`, impedindo a ativação da rota.

### Benefícios do Uso de Guards
- **Segurança**: Protege rotas sensíveis, garantindo que apenas usuários autorizados possam acessá-las.
- **Controle de Navegação**: Permite controlar e redirecionar usuários com base em suas permissões e estado de autenticação.
- **Manutenção de Código Limpo**: Separa a lógica de autenticação e autorização do componente, mantendo o código mais limpo e fácil de manter.

Em resumo, o `AdminGuard` é um mecanismo para garantir que apenas usuários autenticados com o papel de "ADMIN" possam acessar determinadas rotas na aplicação.

### Fluxo de Verificação com o Guard

Quando um usuário tenta navegar para uma rota que possui um `Guard` associado, o Angular Router primeiro verifica se o `Guard` permite ou não o acesso a essa rota. Vamos detalhar como isso funciona.

1. **Usuário Tenta Navegar para a Rota Protegida**:
   - Quando um usuário tenta acessar uma rota, o Angular Router inicia o processo de verificação.

2. **`canActivate` do Guard é Chamado**:
   - O método `canActivate` do `Guard` associado à rota é chamado.
   - No exemplo, é o método `canActivate` do `AdminGuard`.

3. **Verificação de Condições no Guard**:
   - O `Guard` executa a lógica para determinar se o acesso à rota deve ser permitido.
   - No `AdminGuard`, a lógica verifica se o usuário está logado (`this.loginService.isLoggedIn()`) e se possui o papel de "ADMIN" (`this.loginService.getUserRole() === 'ADMIN'`).

4. **Decisão de Acesso**:
   - Se o `Guard` retornar `true`, o Angular Router permite a navegação para a rota solicitada.
   - Se o `Guard` retornar `false`, o Angular Router impede a navegação e, no caso do `AdminGuard`, redireciona o usuário para a página de login (`this.router.navigate(['login'])`).

### Exemplo Prático

Considerando novamente o `AdminGuard`:

```typescript
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.isLoggedIn() && this.loginService.getUserRole() === 'ADMIN') {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
```

### Passos na Prática

1. **Usuário Navega para `/admin`**:
   - O usuário tenta acessar a rota `/admin`.

2. **Angular Router Chama `AdminGuard`**:
   - O `AdminGuard` é chamado para verificar se o usuário pode acessar a rota.

3. **Verificação de Login e Papel**:
   - `this.loginService.isLoggedIn()` verifica se o usuário está logado.
   - `this.loginService.getUserRole()` verifica se o papel do usuário é "ADMIN".

4. **Decisão do Guard**:
   - Se ambas as condições são verdadeiras, o método `canActivate` retorna `true`, permitindo o acesso à rota `/admin`.
   - Se qualquer condição falhar, o método `canActivate` retorna `false`, redirecionando o usuário para a rota de login.

### Resumo

Quando define um `Guard` para uma rota, o Angular Router sempre executa o `Guard` antes de permitir o acesso à rota. O `Guard` atua como um ponto de verificação que decide se a navegação pode prosseguir com base em condições especificadas na lógica do `Guard`. Isso é crucial para proteger rotas que devem ser acessíveis apenas para usuários autenticados ou que possuem certos privilégios, como administradores.