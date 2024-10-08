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

  // método para deletar por id pergunta do exame - lembrando que esse método é do tipo Observable
  public deletarPergunta(perguntaId: any){
    return this.http.delete(`${baserUrl}/pergunta/${perguntaId}`)
  }

  // método para atualizar por id uma pergunta do exame - lembrando que esse método é do tipo Observable
  public atualizarPergunta(pergunta: any){
    return this.http.put(`${baserUrl}/pergunta/`, pergunta);
  }

  // método para obter pergunta por id de uma pergunta do exame - lembrando que esse método é do tipo Observable
  public obterPerguntaPorId(perguntaId: any){
    return this.http.get(`${baserUrl}/pergunta/${perguntaId}`);
  }

  // método para listar todas as perguntas do exame para a prova - lembrando que esse método é do tipo Observable
  public listarPerguntaDoExameParaProva(exameId: any){
    return this.http.get(`${baserUrl}/pergunta/exame/todos/${exameId}`);
  }

  // método é para enviar as respostas de um exame - lembrando que esse método é do tipo Observable
  public avaliarExame(perguntas: any){
    return this.http.post(`${baserUrl}/pergunta/avaliar-exame`, perguntas);
  }

}
