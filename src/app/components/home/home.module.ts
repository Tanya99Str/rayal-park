import {NgModule} from '@angular/core';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {RoomsDb} from '../../shared/service/in-memory-db/rooms.db';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(RoomsDb)
  ],
  exports: [
    BrowserModule,
    HttpClientModule,
  ]
})

export class HomeModule { }
