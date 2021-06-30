import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  
  editMode: boolean = false;
  todoId: string = ''
  title: string = '';
  content: string = '';
  constructor(private route:ActivatedRoute, private todosService:TodosService) { }

  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id')!;
    if(id!= 'new')
    {
      const todo =this.todosService.getTodosById(id);
      this.title=todo?.title!;
      this.content=todo?.content!;
      this.todoId=id;
      this.editMode=true;
    }
  }
  
  submit(){
    if(this.editMode)
    {
      this.todosService.updateTodo(this.todoId,{
        title:this.title,
        content:this.content
      })
    }else
    {
      this.todosService.createTodo(this.title,this.content)
    }
  }

}
