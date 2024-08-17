import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrl: './sidebar-user.component.css'
})
export class SidebarUserComponent implements OnInit{

  categorias: any;

  constructor(private categoriaService: CategoriaService, private snack: MatSnackBar){}

  ngOnInit(): void {
    this.categoriaService.listarCategoria().subscribe(
      (data) => {
        this.categorias = data;
    }, (error) => {
      this.snack.open('Erro ao carregar as categorias', '', { duration: 3000 });
      console.log(error);
    })
  }
}
