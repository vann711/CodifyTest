import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FriendComponent } from './friend/friend.component';
import { TagComponent } from './tag/tag.component';
import { CommentComponent } from './comment/comment.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'home',component: HomeComponent},
  {path: 'friend',component: FriendComponent},
  {path: 'tag',component: TagComponent},
  {path: 'comment/:id',component: CommentComponent},
  {path: 'user-detail/:id',component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }