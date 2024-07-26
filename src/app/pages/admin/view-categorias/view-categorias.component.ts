import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-categorias',
  templateUrl: './view-categorias.component.html',
  styleUrl: './view-categorias.component.css'
})
export class ViewCategoriasComponent implements OnInit{

  categorias:any = [
    {
      categoriaId :  1,
      titulo: 'Liguagem de Programação',
      descricao: 'Está é uma categoria de teste'
    },
    {
      categoriaId :  1,
      titulo: 'Liguagem de Programação',
      descricao: 'Está é uma categoria de teste'
    },
    {
      categoriaId :  1,
      titulo: 'Liguagem de Programação',
      descricao: 'Está é uma categoria de teste'
    },
    {
      categoriaId :  1,
      titulo: 'Liguagem de Programação',
      descricao: 'Está é uma categoria de teste'
    }
  ]

  constructor(){}

  ngOnInit(): void { }

}
