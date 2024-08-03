import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExameService } from '../../../services/exame.service';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-atualizar-exame',
  templateUrl: './atualizar-exame.component.html',
  styleUrl: './atualizar-exame.component.css',
})
export class AtualizarExameComponent implements OnInit {

  exameId = 0;
  exame: any;
  categorias: any;

  constructor(private route: ActivatedRoute, private exameService: ExameService, private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.exameId = this.route.snapshot.params['exameId'];
    this.exameService.buscarQuestionarioPorId(this.exameId).subscribe(
      (data) => {
        this.exame = data;
        console.log(this.exame);
    }, (error) => {
      console.log(error);
    })

    this.categoriaService.listarCategoria().subscribe(
      (data: any) => {
        this.categorias = data;
        console.log(this.categorias);
    }, (error) => {
      alert('Erro ao carregar a categoria');
    })
  }
}
