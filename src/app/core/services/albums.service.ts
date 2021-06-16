import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http:HttpClient) { }

  getAlbums(userId:number){
    return this.http.get(`${environment.apiUri}/albums?userId=${userId}`);
  }

  getImages(albumId:number){
    return this.http.get(`${environment.apiUri}/photos?albumId=${albumId}`);
  }
}
