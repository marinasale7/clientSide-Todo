import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service'
import { Router } from '@angular/router';
 
export interface USER
{
  id:string;
  name:string;
  email:string;
  createdAt:string;
}
export interface AUTH_RES
{
  user: USER;
  token:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient ,private router:Router, private userService:UserService) { }
           
  //baseUrl = 'http://localhost:3000/user';

  signup(name:string,email:string,password:string)
  {
    this.http.post('http://localhost:3000/user/signup',{
      name,email,password
    }).subscribe(
      data=>this.router.navigate(['signin']),
      err=>console.log(err)
    );
  }


  signin(email:string,password:string)
  {
    this.http.post<AUTH_RES>('http://localhost:3000/user/signin',{
      email,password
    }).subscribe(
      data=>{
        this.userService.setUser(data);
        this.router.navigate(['todos'])
      },
      err=>console.log(err)
    );
  }
}
