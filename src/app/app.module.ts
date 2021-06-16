import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { UsersComponent } from './modules/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsComponent } from './modules/albums/albums.component';
import { TodosComponent } from './modules/todos/todos.component';
import { PostsComponent } from './modules/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    AlbumsComponent,
    TodosComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
