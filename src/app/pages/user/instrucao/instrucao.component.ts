import { Component, OnInit } from '@angular/core';
import { ExameService } from '../../../services/exame.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instrucao',
  templateUrl: './instrucao.component.html',
  styleUrl: './instrucao.component.css'
})
export class InstrucaoComponent implements OnInit{

  exameId: any;
  exame: any = new Object();

  constructor(private exameService: ExameService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.exameId = this.route.snapshot.params['exameId'];
    this.exameService.buscarQuestionarioPorId(this.exameId).subscribe(
      (data) => {
        this.exame = data;
        console.log(this.exame);
    }, (error) => {
      console.log(error);
    });
  }

  iniciarExame(){
    Swal.fire({
      title: 'Quer começar o exame?',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Começar',
      icon: 'info'
    }).then((result: any) => {
      if(result.isConfirmed){
        this.router.navigate(['/start/'+this.exameId]);
      }
    })
  }

}
