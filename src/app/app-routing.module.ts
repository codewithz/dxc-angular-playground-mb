import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { ArchiveHomeComponent } from './archive-home/archive-home.component';
import { ArciveComponent } from './arcive/arcive.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent
  },
  {
    path: 'followers/:user',
    component: GithubProfileComponent

  },
  {
    path: 'followers',
    component: GithubFollowersComponent
  },
  {
    path: 'archive-home',
    component: ArchiveHomeComponent
  },
  {
    path: 'archive/:year/:month',
    component: ArciveComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
