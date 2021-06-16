import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlbumsService } from 'src/app/core/services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  userId!:any;
  subscriptions:Subscription[];
  albums:any[];
  selectedAlbum!:number;
  images:any[];
  constructor(private activatedRoute:ActivatedRoute,
    private albumsService:AlbumsService
    ) {
    this.subscriptions = [];
    this.albums = [];
    this.images = [];
   }

  loadDataSource(){
    let sub = this.albumsService.getAlbums(this.userId).subscribe((albums:any)=>{
      this.albums = albums;
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

  selectAlbum(index:number){
    let sub = this.albumsService.getImages(index + 1).subscribe((images:any)=>{
      this.images = images;
      this.selectedAlbum = index;
    });

    this.subscriptions.push(sub);
  }

  ngOnDestroy(){
    this.subscriptions.forEach((sub:Subscription)=>{
      sub.unsubscribe();
    })
  }

}
