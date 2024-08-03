import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atualizar-exame',
  templateUrl: './atualizar-exame.component.html',
  styleUrl: './atualizar-exame.component.css',
})
export class AtualizarExameComponent implements OnInit {

  exameId = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.exameId = this.route.snapshot.params['exameId'];
    alert(this.exameId);
  }
}
