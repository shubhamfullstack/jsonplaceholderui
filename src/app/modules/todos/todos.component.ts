import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodosService } from 'src/app/core/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit,OnDestroy {
  userId!:any;
  subscriptions:Subscription[];
  todos:any[];
  constructor(private activatedRoute:ActivatedRoute,
    private todosService:TodosService
    ) {
    this.subscriptions = [];
    this.todos = [];
   }

  loadDataSource(){
    let sub = this.todosService.getTodos(this.userId).subscribe((todos:any)=>{
      this.todos = todos;
    })

    this.subscriptions.push(sub);
  }

  ngOnInit(): void {
    let sub = this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.userId = params.get('id');
      this.loadDataSource();
    });

    this.subscriptions.push(sub);
  }

  ngOnDestroy(){
    this.subscriptions.forEach((sub:Subscription)=>{
      sub.unsubscribe();
    })
  }

}
