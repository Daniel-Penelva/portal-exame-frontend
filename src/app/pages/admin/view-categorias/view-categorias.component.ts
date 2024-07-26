import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categorias',
  templateUrl: './view-categorias.component.html',
  styleUrl: './view-categorias.component.css',
})
export class ViewCategoriasComponent implements OnInit {
  categorias: any = [];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categoriaService.listarCategoria().subscribe(
      (data: any) => {        
        this.categorias = data;
        console.log(this.categorias);                     // Callback executada quando a resposta é bem-sucedida. A resposta (data) é atribuída à propriedade categorias, o que atualiza a lista de categorias exibida no template.
      },
      (error) => {
        console.log(error);
        Swal.fire('Erro', 'Erro ao carregar as categorias', 'error');
      }
    );
  }
}
