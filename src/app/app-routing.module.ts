import { NgModule } from '@angular/core';
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
      {path: 'add-categoria', component: AddCategoriaComponent}
    ]
  },
  {
    path: 'user-dashboard', 
    component: UserDashboardComponent, 
    pathMatch: 'full', 
    canActivate:[UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
