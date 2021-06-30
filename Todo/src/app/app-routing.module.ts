import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UnAuthGuard } from './guards/un-auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TodoDetailsComponent } from './pages/todo-details/todo-details.component';
import { TodoFormComponent } from './pages/todo-form/todo-form.component';
import { TodosComponent } from './pages/todos/todos.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    canActivate:[UnAuthGuard]
  },
  {
    path:'signup',
    component:SignupComponent,
    canActivate:[UnAuthGuard]
  },
  {
    path:'signin',
    component:SigninComponent,
    canActivate:[UnAuthGuard]
  },
  
  {
    path:'todos',
    component:TodosComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'todo-form/:id',
    component:TodoFormComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'todos/:id',
    component:TodoDetailsComponent,
  },
  {
    path:'**',
    component:NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
exports: [RouterModule]
})
export class AppRoutingModule { }
