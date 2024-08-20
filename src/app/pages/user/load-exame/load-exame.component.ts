import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExameService } from '../../../services/exame.service';

@Component({
  selector: 'app-load-exame',
  templateUrl: './load-exame.component.html',
  styleUrl: './load-exame.component.css',
})
export class LoadExameComponent implements OnInit {
  
  catId: any;
  exames: any;

  constructor(private route: ActivatedRoute, private exameService: ExameService) {}

  ngOnInit(): void {
    this.catId = this.route.snapshot.params['catId'];
    if (this.catId == 0) {
      console.log('Carregando todos os exames');
      this.exameService.listarQuestionarios().subscribe(
        (data) => {
          this.exames = data;
          console.log(this.exames);
      }, (error) => {
        console.log(error);
      })
    } else {
      console.log('Carregando um exame em específico');
    }
  }
}
