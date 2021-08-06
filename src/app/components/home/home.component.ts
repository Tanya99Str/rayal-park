import { Component, OnInit } from '@angular/core';
import {RoomsService} from '../../shared/service/backend/rooms.service';
import {RoomModel} from '../../shared/service/models/room.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rooms: RoomModel[];

  constructor(private _roomsService: RoomsService) {
    this.init();
  }

  init() {
    this._roomsService.getAllRooms().subscribe(next => {
      this.rooms = next;
    }, error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

}
