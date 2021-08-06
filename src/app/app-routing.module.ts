import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {StaffComponent} from './components/staff/staff.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {CommentsComponent} from './components/comments/comments.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'comments', component: CommentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
