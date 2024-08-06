import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.exameId = this.route.snapshot.params['exameId'];
    this.titulo = this.route.snapshot.params['titulo'];
    this.pergunta.exame['exameId'] = this.exameId;
  }
}
