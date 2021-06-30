import { Component, Input, OnInit } from '@angular/core';
import { defaultTodo, TODO, TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
@Input() todo: TODO =defaultTodo;
  constructor(private todosService:TodosService) { }

  ngOnInit(): void {
  }
  deleteTodo(){
    this.todosService.deleteTodo(this.todo._id)
  }

}
