import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http:HttpClient) { }

  getPosts(id:number){
    return this.http.get(`${environment.apiUri}/posts?userId=${id}`);
  }

  getComments(postId:number){
    return this.http.get(`${environment.apiUri}/comments?postId=${postId}`);
  }
}
