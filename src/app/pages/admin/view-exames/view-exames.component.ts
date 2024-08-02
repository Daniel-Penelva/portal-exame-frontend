import { Component, OnInit } from '@angular/core';
import { ExameService } from '../../../services/exame.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-exames',
  templateUrl: './view-exames.component.html',
  styleUrl: './view-exames.component.css',
})
export class ViewExamesComponent implements OnInit {

  exames: any = [

  ];
  
  constructor(private exameService: ExameService) {}

  ngOnInit(): void {
    this.exameService.listarQuestionarios().subscribe((data: any)=>{
      this.exames = data;
      console.log(this.exames);
    }, (error)=>{
      console.log(error);
      Swal.fire('Error', 'Erro ao carregar os questionários', 'error');
    });
  }

  eliminarExame(exameId: any){
    Swal.fire({
      title: 'Deletar exame',
      text: 'Está seguro de deletar o exame?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Deletar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {                                                                       // Após o usuário responder à caixa de diálogo, a resposta é tratada.
      if(result.isConfirmed){                                                                   // Se o usuário confirmar a ação (clicar em "Deletar"), o bloco de código dentro do if é executado.
        this.exameService.deletarQuestionario(exameId).subscribe(                               // Chama o método deletarQuestionario do serviço ExameService para fazer a requisição de deleção ao backend. O subscribe permite lidar com a resposta assíncrona da requisição HTTP.
          (data) => {
            this.exames = this.exames.filter((exame:any) => exame.exameId != exameId);          // Se a requisição for bem-sucedida, o exame é removido da lista local 'exames' usando 'filter' para criar uma nova lista sem o exame deletado.
            Swal.fire('Exame deletado','O questionário foi deletado com sucesso','success');
          },
          (error) => {
            Swal.fire('Erro','Erro ao deletar questionário','error');
          }
        )
      }
    })
  }
}
