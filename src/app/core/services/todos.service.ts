import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http:HttpClient) { }

  getTodos(id:number){
    return this.http.get(`${environment.apiUri}/todos?userId=${id}`);
  }
}
