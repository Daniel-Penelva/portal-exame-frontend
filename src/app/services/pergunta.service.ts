import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Observable } from 'rxjs';

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

  // método para contar perguntas do exame - lembrando que esse método é do tipo Observable
  public contarPerguntas(exameId: any): Observable<number> {
    return this.http.get<number>(`${baserUrl}/pergunta/exame/contar/${exameId}`);
  }
}
