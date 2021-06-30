import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-default-nav',
  templateUrl: './default-nav.component.html',
  styleUrls: ['./default-nav.component.css']
})
export class DefaultNavComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  get userLoggedIn():boolean{
           
    return this.userService.isLoggedIn()
  } 

  signout()
  {
    this.userService.clear();
    this.router.navigate(['signin'])
  }

}
