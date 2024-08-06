import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerguntaService } from '../../../services/pergunta.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-exame-perguntas',
  templateUrl: './view-exame-perguntas.component.html',
  styleUrl: './view-exame-perguntas.component.css'
})
export class ViewExamePerguntasComponent implements OnInit{

  exameId: any;
  titulo: any;
  perguntas: any = [];

  constructor(private route: ActivatedRoute, private perguntaService: PerguntaService, private snack: MatSnackBar){}

  ngOnInit(): void {
      this.exameId = this.route.snapshot.params['exameId'];  // Acessa os parâmetros da rota instantaneamente usando snapshot. O snapshot captura o estado atual da rota. Aqui, ele obtém o valor do parâmetro exameId.
      this.titulo = this.route.snapshot.params['titulo'];    // Acessa os parâmetros da rota instantaneamente usando snapshot. O snapshot captura o estado atual da rota. Aqui, ele obtém o valor do parâmetro titulo.
      
      this.perguntaService.listarPerguntasDeExame(this.exameId).subscribe(
        (data) => {
          console.log(data);
          this.perguntas = data;
      }, (error) => {
        console.log(error);
      });
  }

}
