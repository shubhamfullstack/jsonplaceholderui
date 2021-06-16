import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit,OnDestroy {
  userId!:any;
  subscriptions:Subscription[];
  feeds:any[];
  selectedPost!: number;
  comments:any[];
  constructor(private activatedRoute:ActivatedRoute,
    private postsService:PostsService
    ) {
    this.subscriptions = [];
    this.feeds = [];
    this.comments = []
   }

  loadDataSource(){
    let sub = this.postsService.getPosts(this.userId).subscribe((posts:any)=>{
      this.feeds = posts;
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

  selectPost(index:number){
    let sub = this.postsService.getComments(index + 1).subscribe((comments:any)=>{
      this.comments = comments;
      this.selectedPost = index;
    });

    this.subscriptions.push(sub);
  }

  ngOnDestroy(){
    this.subscriptions.forEach((sub:Subscription)=>{
      sub.unsubscribe();
    })
  }
}
