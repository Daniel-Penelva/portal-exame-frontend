import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {

  constructor(private http: HttpClient) { }

  // método para gerar listar de todas as perguntas do exame - lembrando que esse método é do tipo Observable
  public listarPerguntasDeExame(exameId: any){
    return this.http.get(`${baserUrl}/pergunta/exame/todos/${exameId}`);
  }

  // método para gerar criar pergunta do exame - lembrando que esse método é do tipo Observable
  public criarPergunta(pergunta: any){
    return this.http.post(`${baserUrl}/pergunta/`, pergunta);
  }
}
