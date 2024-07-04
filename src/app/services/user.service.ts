import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Lembrando que esse método é do tipo Observable
  public cadastrarUsuario(user: any){
    return this.http.post(`${baserUrl}/usuarios/`, user);
  }
}
