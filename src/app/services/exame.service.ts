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

  // método para criar questionário (ou exame) - lembrando que esse método é do tipo Observable
  public criarQuestionario(exame: any){
    return this.http.post(`${baserUrl}/exame/`, exame);
  }

  // método para deletar questionário (ou exame) - lembrando que esse método é do tipo Observable
  public deletarQuestionario(exameId: any){
    return this.http.delete(`${baserUrl}/exame/${exameId}`);
  }
}
