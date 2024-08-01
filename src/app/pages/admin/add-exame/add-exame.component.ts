import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-add-exame',
  templateUrl: './add-exame.component.html',
  styleUrl: './add-exame.component.css'
})
export class AddExameComponent implements OnInit{

  categorias: any =[

  ];

  exameData = {
    titulo: '',
    descricao: '',
    pontosMaximos: '',
    numeroDePerguntas: '',
    ativo: true,
    categoria:{
      categoriaId: ''
    }
  }
  
  constructor(private categoriaService: CategoriaService, private snack: MatSnackBar){

  }

  ngOnInit(): void {
    this.categoriaService.listarCategoria().subscribe((data: any)=>{
      this.categorias = data;
      console.log(this.categorias);
    }, (error) =>{
      console.log(error);
      Swal.fire('error', 'Erro ao carregar os dados', 'error');
    });
  }
  

}
