import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './modules/albums/albums.component';
import { PostsComponent } from './modules/posts/posts.component';
import { TodosComponent } from './modules/todos/todos.component';
import { UsersComponent } from './modules/users/users.component';

const routes: Routes = [
  { path:"", component:UsersComponent },
  { path:"posts/:id", component:PostsComponent },
  { path:"albums/:id", component:AlbumsComponent },
  { path:"todos/:id", component:TodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
