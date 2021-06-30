import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { defaultTodo, TODO, TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  todoId : string ='';
  todo : TODO= defaultTodo
  constructor(private route:ActivatedRoute, private todosService:TodosService) { }

  ngOnInit(): void {

    this.todoId=this.route.snapshot.paramMap.get('id')!
    const todoData=this.todosService.getTodosById(this.todoId)
    if(todoData) this.todo=todoData
  }

}
