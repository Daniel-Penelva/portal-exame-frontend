import { Component, OnInit } from '@angular/core';
import { ExameService } from '../../../services/exame.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instrucao',
  templateUrl: './instrucao.component.html',
  styleUrl: './instrucao.component.css'
})
export class InstrucaoComponent implements OnInit{

  exameId: any;
  exame: any = new Object();

  constructor(private exameService: ExameService, private route: ActivatedRoute){}

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

}
