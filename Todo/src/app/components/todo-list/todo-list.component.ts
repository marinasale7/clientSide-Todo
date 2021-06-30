import { Component, OnInit } from '@angular/core';
import { TODO, TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todosService:TodosService) { }

  ngOnInit(): void {
  }
  get todos():TODO[]
  {
    return this.todosService.todos;
  }
}
