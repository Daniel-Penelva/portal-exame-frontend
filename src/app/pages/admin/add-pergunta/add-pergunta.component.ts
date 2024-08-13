import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PerguntaService } from '../../../services/pergunta.service';
import { ExameService } from '../../../services/exame.service';

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

  maxPerguntas: number = 0;

  constructor(
    private route: ActivatedRoute,
    private perguntaService: PerguntaService,
    private router: Router,
    private exameService: ExameService
  ) {}

  ngOnInit(): void {
    this.exameId = this.route.snapshot.params['exameId'];
    this.titulo = this.route.snapshot.params['titulo'];
    this.pergunta.exame['exameId'] = this.exameId;

    // Buscar os detalhes do exame e verificar o limite de perguntas
    this.exameService.buscarQuestionarioPorId(this.exameId).subscribe(
      (exame) => {
        this.maxPerguntas = (exame as { numeroDePerguntas: number }).numeroDePerguntas;  // cast para informar que o objeto que estou manipulando é de um determinado tipo. Nesse caso, você vai dizer que o objeto retornado da API é um objeto que contém a propriedade numeroDePerguntas. 
        this.verificarLimitePerguntas();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  formSubmit() {
    if (
      this.pergunta.conteudo.trim() === '' ||
      this.pergunta.opcao1.trim() === '' ||
      this.pergunta.opcao2.trim() === '' ||
      this.pergunta.opcao3.trim() === '' ||
      this.pergunta.opcao4.trim() === '' ||
      this.pergunta.resposta.trim() === ''
    ) {
      Swal.fire('Erro', 'Todos os campos devem ser preenchidos.', 'error');
      return;
    }

    this.perguntaService.criarPergunta(this.pergunta).subscribe(
      (data) => {
        Swal.fire('Pergunta criada','A pergunta foi salva com sucesso','success');
        this.pergunta.conteudo = '';
        this.pergunta.opcao1 = '';
        this.pergunta.opcao2 = '';
        this.pergunta.opcao3 = '';
        this.pergunta.opcao4 = '';
        this.pergunta.resposta = '';

      // Verificar o número atual de perguntas
      this.perguntaService.contarPerguntas(this.exameId).subscribe(
        (count) => {
          if (count >= this.maxPerguntas) {
            Swal.fire('Limite atingido','Está foi a última pergunta a ser adicionada.','warning');
            this.router.navigate(['/admin/exames']);
          }
        },
        (error) => {
          console.log(error);
        }
    );
      },
      (error) => {
        Swal.fire('Erro', 'Erro ao salvar a pergunta na base de dados', 'error');
        console.log(error);
      }
    );
  }

  // Este método verifica se o número atual de perguntas excede o limite definido pelo administrador.
  verificarLimitePerguntas() {
    this.perguntaService.contarPerguntas(this.exameId).subscribe(
      (count) => {
        if (count >= this.maxPerguntas) {
          Swal.fire('Limite atingido', 'Não é possível adicionar mais perguntas a este exame.', 'warning');
          this.router.navigate(['/admin/exames']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
