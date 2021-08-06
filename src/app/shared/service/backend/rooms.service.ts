import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {RoomModel} from '../models/room.model';
import {catchError} from 'rxjs/operators';
import {SERVER_API_URL_ROOMS} from '../../config/url';

@Injectable({providedIn: 'root'})

export class RoomsService {

  constructor(private _http: HttpClient) {
  }

  getAllRooms(): Observable<RoomModel[]> {
    return this._http.get<RoomModel[]>(SERVER_API_URL_ROOMS + 'rooms')
      .pipe(catchError(err => throwError(err)));
  }

  getOneRoomById(id: number): Observable<RoomModel> {
    return this._http.get<RoomModel>(`${SERVER_API_URL_ROOMS + 'rooms'}/${id}`)
      .pipe(catchError(err => throwError(err)));
  }

}
