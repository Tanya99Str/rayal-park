import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {UserModel} from '../models/user.model';
import {SERVER_API_URL} from '../../config/url';
import {catchError} from 'rxjs/operators';
import {GalleryModel} from '../models/gallery.model';
import {CommentModel} from '../models/comment.model';

@Injectable({providedIn: 'root'})
export class CommentsService {
  constructor(private _httpClient: HttpClient) {
  }

  findAllComments(): Observable<CommentModel[]> {
    return this._httpClient.get<CommentModel[]>(SERVER_API_URL + '/posts')
      .pipe(catchError(err => throwError(err)));

  }

  oneComment(id: number): Observable<CommentModel> {
    return this._httpClient.get<CommentModel>(SERVER_API_URL + '/posts/' + id)
      .pipe(catchError(err => throwError(err)));
  }

}
