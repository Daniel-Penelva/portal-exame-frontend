import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { CategoriaService } from '../../../services/categoria.service';
import { ExameService } from '../../../services/exame.service';
import { Router } from '@angular/router';

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
  
  constructor(private categoriaService: CategoriaService, private snack: MatSnackBar, private exameService: ExameService, private router: Router){

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

  criarQuestionario(){
    console.log(this.exameData);
    if(this.exameData.titulo.trim() == '' || this.exameData.titulo == null){
      this.snack.open('Título é obrigatório', '', {duration: 3000});
      return;
    }

    this.exameService.criarQuestionario(this.exameData).subscribe((data: any)=>{
      console.log(data);
      Swal.fire('Exame cadastrado', 'O exame foi cadastrado com sucesso', 'success');
      this.exameData = {
        titulo: '',
        descricao: '',
        pontosMaximos: '',
        numeroDePerguntas: '',
        ativo: true,
        categoria:{
          categoriaId: ''
        }
      }
      this.router.navigate(['/admin/exames']);
    }, (error)=>{
      Swal.fire('Error', 'Erro ao cadastrar o exame', 'error');
    });
    
  }

}
