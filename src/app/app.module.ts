import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { StaffComponent } from './components/staff/staff.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {RoomsDb} from './shared/service/in-memory-db/rooms.db';
import {CommonModule} from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CommentsComponent } from './components/comments/comments.component';
import {SearchFilterPipe} from './shared/pipes/search-filter.pipe';
import { CommentsOneUserComponent } from './components/comments/comments-one-user/comments-one-user.component';
import { LoadingComponent } from './components/loading/loading.component';
import {HomeCommentsOneUserComponent} from './components/home/home-comments-one-user/home-comments-one-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StaffComponent,
    FooterComponent,
    GalleryComponent,
    CommentsComponent,
    SearchFilterPipe,
    CommentsOneUserComponent,
    LoadingComponent,
    HomeCommentsOneUserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientInMemoryWebApiModule.forRoot(RoomsDb)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AppModule { }
