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

  timer: any;

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

        this.timer = this.perguntas.length * 2 * 60;

        this.perguntas.forEach((p: any) => {
          p['respostaDada'] = '';
        })
        console.log(this.perguntas);
        this.iniciarTemporizador();
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
          this.tentativas ++;                                  // Incrementa a tentativa
          this.avaliarExame();
        }
    });
  }

  avaliarExame(){
    this.enviado = true;

    this.perguntas.forEach((p: any) => {
      if(p.respostaDada == p.resposta){         // Verifica se a resposta dada é a correta
        this.respostasCorretas ++;
        let pontos = this.perguntas[0].exame.pontosMaximos/this.perguntas.length;
        this.pontosConseguidos += parseFloat(pontos.toFixed(1));                   // Arredonda para uma casa decimal
      }                 
    });
    console.log("Respostas Corretas: " + this.respostasCorretas);
    console.log("Pontos conseguidos: " + this.pontosConseguidos);
    console.log("Tentativas: " + this.tentativas);
    console.log(this.perguntas);
  }


  // Este método mantém o controle do tempo e aciona o envio do questionário quando o tempo acaba.
  iniciarTemporizador(){
    let t = window.setInterval(() => {        // O intervalo é armazenado na variável t, que pode ser usada posteriormente para limpar o intervalo.
      if(this.timer <= 0){                    // Verifica se o temporizador chegou a zero.
        this.avaliarExame();                  // Se o temporizador atingir zero, chama o método avaliarExame() para avaliar o questionário automaticamente.
        clearInterval(t);                     // Intervalo chegando a zero é limpado o temporizador
      }else{
        this.timer --;                        // Se o temporizador ainda não chegou a zero, ele é decrementado em 1 (ou seja, um segundo é subtraído).                       
      }
    }, 1000)                                  // Cria um intervalo que executa a função de callback a cada 1 segundo (1000 ms). 
  }


  // Este método transforma o tempo restante em um formato legível para o usuário
  obterHoraFormatada(){
    let mm = Math.floor(this.timer/60);       // Calcula os minutos restantes dividindo o tempo total por 60 e arredondando para baixo com Math.floor().
    let ss = this.timer - mm * 60;            // Calcula os segundos restantes subtraindo os minutos (convertidos para segundos) do tempo total.
    return `${mm} : min : ${ss} seg`;         // Retorna a string formatada mostrando os minutos e segundos restantes.
  }

}