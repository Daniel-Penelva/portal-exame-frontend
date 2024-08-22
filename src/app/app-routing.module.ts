import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { ViewExamesComponent } from './pages/admin/view-exames/view-exames.component';
import { AddExameComponent } from './pages/admin/add-exame/add-exame.component';
import { AtualizarExameComponent } from './pages/admin/atualizar-exame/atualizar-exame.component';
import { ViewExamePerguntasComponent } from './pages/admin/view-exame-perguntas/view-exame-perguntas.component';
import { AddPerguntaComponent } from './pages/admin/add-pergunta/add-pergunta.component';
import { AtualizarPerguntaComponent } from './pages/admin/atualizar-pergunta/atualizar-pergunta.component';
import { LoadExameComponent } from './pages/user/load-exame/load-exame.component';
import { InstrucaoComponent } from './pages/user/instrucao/instrucao.component';
import { StartComponent } from './pages/user/start/start.component';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    pathMatch: 'full' 
  },         // Já está definido a URL raiz para o HomeComponent que vai ser a página principal
  { 
    path: 'signup', 
    component: SignupComponent, 
    pathMatch: 'full' 
  },
  { 
    path: 'login', 
    component: LoginComponent, 
    pathMatch: 'full' 
  },
  {
    path: 'admin', 
    component: DashboardComponent, 
    canActivate:[AdminGuard], 
    children:[
      {path: 'profile', component: ProfileComponent}, 
      {path: '', component: WelcomeComponent},
      {path: 'categorias', component: ViewCategoriasComponent},
      {path: 'add-categoria', component: AddCategoriaComponent},
      {path: 'exames', component: ViewExamesComponent},
      {path: 'add-exame', component: AddExameComponent},
      {path: 'exame/:exameId', component: AtualizarExameComponent},
      {path: 'ver-perguntas/:exameId/:titulo', component: ViewExamePerguntasComponent},
      {path: 'add-pergunta/:exameId/:titulo', component: AddPerguntaComponent},
      {path: 'add-pergunta/:exameId', component: AddPerguntaComponent},
      {path: 'pergunta/:perguntaId', component: AtualizarPerguntaComponent}
    ]
  },
  {
    path: 'user-dashboard', 
    component: UserDashboardComponent, 
    canActivate:[UserGuard], 
    children:[
      {path: ':catId', component: LoadExameComponent},
      {path: 'instrucoes/:exameId', component: InstrucaoComponent}
    ]
  },
  { // Rota para usuários com o papel USER
    path: 'start/:exameId',
    component: StartComponent,
    canActivate:[UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
