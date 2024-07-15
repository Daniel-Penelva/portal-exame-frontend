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

}
