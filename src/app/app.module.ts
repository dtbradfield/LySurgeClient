import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UserComponent,
    PostComponent,
    RegisterComponent,
    LoginComponent,
    PostEditComponent,
    PageNotFoundComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
