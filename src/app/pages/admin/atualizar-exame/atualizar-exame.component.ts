import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExameService } from '../../../services/exame.service';
import { CategoriaService } from '../../../services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-atualizar-exame',
  templateUrl: './atualizar-exame.component.html',
  styleUrl: './atualizar-exame.component.css',
})
export class AtualizarExameComponent implements OnInit {

  exameId = 0;
  exame: any;
  categorias: any;

  constructor(private route: ActivatedRoute, private exameService: ExameService, private categoriaService: CategoriaService, private router: Router) {}

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

  public atualizarQuestionario(){
    this.exameService.atualizarQuestionario(this.exame).subscribe(
      (data) => {
        Swal.fire('Questionário Atualizado', 'O questionário foi atualizado com sucesso', 'success').then(
          (e) => {
            this.router.navigate(['/admin/exames']);
        });
    }, (error) => {
      Swal.fire('Erro no sistema', 'Não se pode atualizar o exame', 'error');
      console.log(error);
    })
  }
}
