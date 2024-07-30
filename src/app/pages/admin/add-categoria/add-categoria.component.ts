import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrl: './add-categoria.component.css',
})
export class AddCategoriaComponent implements OnInit {
  
  categoria = {
    titulo: '',
    descricao: '',
  };

  constructor(private categoriaService: CategoriaService, private snack: MatSnackBar, private router:Router) {}

  ngOnInit(): void {}

  formSubmit(){
    if(this.categoria.titulo.trim() == '' || this.categoria.titulo == null){        // verifica o campo titulo da categoria é vazio ou nulo
      this.snack.open("O título da categoria é obrigatório!",'',{duration: 3000})   // Exibe uma msg de erro
      return;                                                                       // Este 'return' impede a continuação da execução
    }

    this.categoriaService.adicionarCategoria(this.categoria).subscribe((data:any)=>{
      this.categoria.titulo = '';                                                              // Limpa o campo titulo
      this.categoria.descricao = '';                                                           // Limpa o campo descricao
      Swal.fire('Categoria Adicionada', 'A categoria foi adicionada com sucesso', 'success');  // Exibe uma msg de sucesso usando o Swal
      this.router.navigate(['/admin/categorias']);                                             // Redireciona o usuário para a página de visualização de categorias usando 'Router'

    }, (error)=>{
      console.log(error);
      Swal.fire('Error!', 'Error ao adicionar a categoria', 'error');
    });
  }
}
