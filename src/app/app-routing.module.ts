import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'users', canActivate: [AuthGuard], component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ] },
  { path: 'posts', canActivate: [AuthGuard], component: PostsComponent, children: [
    { path: ':id', component: PostComponent },
    { path: ':id/edit', component: PostEditComponent }
  ] },
  { path: 'register', component: RegisterComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
