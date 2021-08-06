import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {UserModel} from '../models/user.model';
import {SERVER_API_URL} from '../../config/url';
import {catchError} from 'rxjs/operators';
import {GalleryModel} from '../models/gallery.model';

@Injectable({providedIn: 'root'})
export class GalleryService {
  constructor(private _httpClient: HttpClient) {
  }

  findAllPhotos(): Observable<GalleryModel[]> {
    return this._httpClient.get<GalleryModel[]>(SERVER_API_URL + '/photos')
      .pipe(catchError(err => throwError(err)));

  }

  onePhoto(id: number): Observable<GalleryModel> {
    return this._httpClient.get<GalleryModel>(SERVER_API_URL + '/photos/' + id)
      .pipe(catchError(err => throwError(err)));
  }

}
