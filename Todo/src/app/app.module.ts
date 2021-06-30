import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoDetailsComponent } from './pages/todo-details/todo-details.component';
import { TodoFormComponent } from './pages/todo-form/todo-form.component';
import { TodosComponent } from './pages/todos/todos.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { ActionsNavComponent } from './components/nav-bar/actions-nav/actions-nav.component';
import { DefaultNavComponent } from './components/nav-bar/default-nav/default-nav.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    TodoDetailsComponent,
    TodoFormComponent,
    TodosComponent,
    HomeComponent,
    NotFoundComponent,
    SigninComponent,
    SignupComponent,
    TodoListComponent,
    TodoListItemComponent,
    ActionsNavComponent,
    DefaultNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
