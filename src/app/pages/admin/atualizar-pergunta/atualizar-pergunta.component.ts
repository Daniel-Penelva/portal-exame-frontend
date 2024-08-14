import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerguntaService } from '../../../services/pergunta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-atualizar-pergunta',
  templateUrl: './atualizar-pergunta.component.html',
  styleUrl: './atualizar-pergunta.component.css'
})
export class AtualizarPerguntaComponent implements OnInit{

  perguntaId: any = 0;
  pergunta: any;
  exame: any;

  constructor(private route: ActivatedRoute, private perguntaService: PerguntaService, private router: Router){}

  ngOnInit(): void {
    this.perguntaId = this.route.snapshot.params['perguntaId'];
    this.perguntaService.obterPerguntaPorId(this.perguntaId).subscribe(
      (data: any) => {
        this.pergunta = data;
        console.log(this.pergunta);
    }, (error) => {
      console.log(error);
    });
  }

  atualizarPergunta(){
    this.perguntaService.atualizarPergunta(this.pergunta).subscribe(
      (data: any) => {
        Swal.fire('Pergunta Atualizada', 'Pergunta atualizada com sucesso', 'success').then(
          (e) => {
            this.router.navigate(['/admin/ver-perguntas/'+this.pergunta.exame.exameId+'/'+this.pergunta.exame.titulo]);
        })
    })
  }

}
