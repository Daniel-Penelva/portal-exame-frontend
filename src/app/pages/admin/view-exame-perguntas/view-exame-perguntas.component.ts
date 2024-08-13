import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerguntaService } from '../../../services/pergunta.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

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

  deletarPergunta(perguntaId: any){
    Swal.fire({
      title:'Remover pergunta',
      text:'Está seguro de remover está pergunta?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Remover',
      cancelButtonText:'Cancelar'
    }).then((resultado) => {
      if(resultado.isConfirmed){
        this.perguntaService.deletarPergunta(perguntaId).subscribe(
          (data) => {
            this.snack.open('Pergunta removida','',{ duration:3000 })
            this.perguntas = this.perguntas.filter((pergunta: any) => pergunta.perguntaId != perguntaId);  // filtra a lista local de perguntas para remover a pergunta que foi deletada, atualizando a lista exibida na interface do usuário.
          },
          (error) => {
            this.snack.open('Erro ao remover a pergunta','',{ duration:3000 })
            console.log(error);
          }
        )
      }
    })
  }

}
