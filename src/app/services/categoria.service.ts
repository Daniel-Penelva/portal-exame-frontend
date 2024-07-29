import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  // método para gerar listar todas categorias - lembrando que esse método é do tipo Observable
  public listarCategoria(){
    return this.http.get(`${baserUrl}/categoria/`);
  }

  // método para adicionar categoria - lembrando que esse método é do tipo Observable
  public adicionarCategoria(categoria: any){
    return this.http.post(`${baserUrl}/categoria/`, categoria);
  }
}
