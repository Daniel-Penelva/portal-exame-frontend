import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerguntaService } from '../../../services/pergunta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-pergunta',
  templateUrl: './add-pergunta.component.html',
  styleUrl: './add-pergunta.component.css',
})
export class AddPerguntaComponent implements OnInit {
  exameId: any;
  titulo: any;
  pergunta: any = {
    exame: {},
    conteudo: '',
    opcao1: '',
    opcao2: '',
    opcao3: '',
    opcao4: '',
    resposta: '',
  };

  constructor(
    private route: ActivatedRoute,
    private perguntaService: PerguntaService
  ) {}

  ngOnInit(): void {
    this.exameId = this.route.snapshot.params['exameId'];
    this.titulo = this.route.snapshot.params['titulo'];
    this.pergunta.exame['exameId'] = this.exameId;
  }

  formSubmit() {
    if (this.pergunta.conteudo.trim() == '' || this.pergunta.conteudo == null) {
      return;
    }
    if (this.pergunta.opcao1.trim() == '' || this.pergunta.opcao1 == null) {
      return;
    }
    if (this.pergunta.opcao2.trim() == '' || this.pergunta.opcao2 == null) {
      return;
    }
    if (this.pergunta.opcao3.trim() == '' || this.pergunta.opcao3 == null) {
      return;
    }
    if (this.pergunta.opcao4.trim() == '' || this.pergunta.opcao4 == null) {
      return;
    }
    if (this.pergunta.resposta.trim() == '' || this.pergunta.resposta == null) {
      return;
    }

    this.perguntaService.criarPergunta(this.pergunta).subscribe(
      (data) => {
        Swal.fire('Pergunta criada', 'A pergunta foi salva com sucesso', 'success');
        
        // Limpa os campos
        this.pergunta.conteudo = '';
        this.pergunta.opcao1 = '';
        this.pergunta.opcao2 = '';
        this.pergunta.opcao3 = '';
        this.pergunta.opcao4 = '';
        this.pergunta.resposta = '';
    }, (error) => {
      Swal.fire('Error', 'Erro ao salvar a pergunta na base de dados', 'error');
      console.log(error);
    })
  }
}
