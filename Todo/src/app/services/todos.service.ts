import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

   export interface TODO
   {
     _id:string;
     title:string;
     content:string;
     publisher:{
       id:string;
       name:string;
     };
     createdAT:string;
   }

export const defaultTodo: TODO = {
  _id:'',
  title:'',
  content: '',
  publisher:{
    id:'',
    name:'',
  },
  createdAT:''
}
  
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http:HttpClient,private router:Router ,private userService:UserService) { }

  private _todos:TODO[]=[];

  baseUrl='http://localhost:3000/todo';
  
  getRequestHeaders(){
    return{
      headers:{
        authorization:this.userService.getToken(),
      },
    };
  }

  fetchTodos()
  {
    this.http.get<{ todo:TODO[] }>(this.baseUrl,this.getRequestHeaders()).subscribe(
      data=>{this._todos=data.todo},
      err=>console.log(err)   
    );
   
  }
  
    get todos(){
      return this._todos.slice()
    }

    getTodosById(id:string){
      return this._todos.find((todo)=>todo._id==id);

    }

    createTodo(title:string, content:string)
    {
      this.http.post< {todo : TODO }>( this.baseUrl,{title,content},this.getRequestHeaders()).subscribe(
        (data)=>{
          this._todos.push(data.todo);
          this.router.navigate(['todos'])
        },
        err=>console.log(err)
      );
    }

    updateTodo(id:string,data:{title:string; content:string})
    {
      this.http.put<{todo : TODO}>(`${this.baseUrl}/${id}`,data,this.getRequestHeaders()).subscribe(
        (data)=>{
          const todoIndex=this.todos.findIndex(todo=>todo._id==id);
          if(todoIndex>-1)
          {
            this._todos[todoIndex]=data.todo;
          }
          this.router.navigate(['todos'])
        },
        err=>console.log(err)
      );
    }

    deleteTodo(id:string)
    {
      this.http.delete(`${this.baseUrl}/${id}`,this.getRequestHeaders()).subscribe(
        data=>{
          this._todos=this._todos.filter(todo=>todo._id!==id)
        },
        err=>console.log(err)
      );
    }
    
   
    
}
