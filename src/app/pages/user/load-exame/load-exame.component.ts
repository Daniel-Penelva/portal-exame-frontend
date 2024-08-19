import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-load-exame',
  templateUrl: './load-exame.component.html',
  styleUrl: './load-exame.component.css',
})
export class LoadExameComponent implements OnInit {
  
  catId: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.catId = this.route.snapshot.params['catId'];
    if (this.catId == 0) {
      console.log('Carregando todos os exames');
    } else {
      console.log('Carregando um exame em específico');
    }
  }
}
