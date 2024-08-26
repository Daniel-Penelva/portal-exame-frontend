import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerguntaService } from '../../../services/pergunta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent implements OnInit{

  exameId: any;
  perguntas: any;

  pontosConseguidos = 0;
  respostasCorretas = 0;
  tentativas = 0;

  enviado = false;

  constructor(private locationSt: LocationStrategy, private route: ActivatedRoute, private perguntaService: PerguntaService){}

  ngOnInit(): void {
      this.desativarBotaoVoltar();
      
      this.exameId = this.route.snapshot.params['exameId'];
      console.log(this.exameId);
      this.carregarPerguntas();
  }

  // Este método carrega as perguntas relacionadas ao exame específico que está sendo iniciado.
  carregarPerguntas(){
    this.perguntaService.listarPerguntaDoExameParaProva(this.exameId).subscribe(
      (data: any) => {
        console.log(data);
        this.perguntas = data;

        this.perguntas.forEach((p: any) => {
          p['respostaDada'] = '';
        })
        console.log(this.perguntas);
    }, (error) => {
      Swal.fire('Error', 'Erro ao carregar as perguntas da prova', 'error');
    });
  }


  // Este método desativa o botão "Voltar" do navegador durante a realização de um exame, impedindo que o usuário retorne à página anterior.
  desativarBotaoVoltar(){
    history.pushState(null, null!, location.href);
    this.locationSt.onPopState(
      () => {
        history.pushState(null, null!, location.href);
    })
  }

  enviarQuestionario(){
    Swal.fire({
      title: 'Quer enviar o questionário?',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Enviar',
      icon: 'info'
    }).then(
      (e) => {
        if(e.isConfirmed){
          
          this.tentativas ++;                           // Incrementa a tentativa
          this.enviado = true;

          this.perguntas.forEach((p: any) => {
              if(p.respostaDada == p.resposta){         // Verifica se a resposta dada é a correta
                this.respostasCorretas ++;
                let pontos = this.perguntas[0].exame.pontosMaximos/this.perguntas.length;
                this.pontosConseguidos += pontos;
              }                 
          });
          console.log("Respostas Corretas: " + this.respostasCorretas);
          console.log("Pontos conseguidos: " + this.pontosConseguidos);
          console.log("Tentativas: " + this.tentativas);
          console.log(this.perguntas);
        }
    })
  }

}