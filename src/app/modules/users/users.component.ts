import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {
  subs!:Subscription;
  users:any[];
  constructor(private usersService:UsersService,
    private router:Router
    ) {
    this.users = [];
   }

  loadDataSource(){
    this.subs = this.usersService.getUsers().subscribe((res:any)=>{
      this.users = res;
    })
  }

  ngOnInit(): void {
    this.loadDataSource();
  }

  navigateToFeeds(id:number){
    this.router.navigate(["posts",id])
  }

  navigateToAlbums(id:number){
    this.router.navigate(["albums",id])
  }

  navigateToTodos(id:number){
    this.router.navigate(["todos",id])
  }

  ngOnDestroy(){
    if(this.subs){
      this.subs.unsubscribe()
    }
  }

}
