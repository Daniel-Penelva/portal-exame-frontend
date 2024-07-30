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
}
