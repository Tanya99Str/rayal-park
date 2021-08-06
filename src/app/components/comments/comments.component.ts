import { Component, OnInit } from '@angular/core';
import {CommentsService} from '../../shared/service/backend/comments.service';
import {CommentModel} from '../../shared/service/models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments: CommentModel[];

  constructor(private _commentsService: CommentsService) {
    this.init();
  }

  init() {
    this._commentsService.findAllComments().subscribe(next => {
      this.comments = next;
    }, error => {
      console.error(error);
    });
  }

  ngOnInit(): void {
  }

}
