import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

  constructor(private http: HttpClient) { }

  // método para gerar listar todos os questionários - lembrando que esse método é do tipo Observable
  public listarQuestionarios(){
    return this.http.get(`${baserUrl}/exame/`);
  }
}
