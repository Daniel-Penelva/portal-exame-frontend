import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-exame-perguntas',
  templateUrl: './view-exame-perguntas.component.html',
  styleUrl: './view-exame-perguntas.component.css'
})
export class ViewExamePerguntasComponent implements OnInit{

  exameId: any;
  titulo: any;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
      this.exameId = this.route.snapshot.params['exameId'];  // Acessa os parâmetros da rota instantaneamente usando snapshot. O snapshot captura o estado atual da rota. Aqui, ele obtém o valor do parâmetro exameId.
      this.titulo = this.route.snapshot.params['titulo'];    // Acessa os parâmetros da rota instantaneamente usando snapshot. O snapshot captura o estado atual da rota. Aqui, ele obtém o valor do parâmetro titulo.
      console.log(this.exameId);
      console.log(this.titulo);
  }

}
