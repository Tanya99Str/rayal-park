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
  load: boolean = false;

  constructor(private _commentsService: CommentsService) {
    this.init();
  }

  init() {
    this.load = true;
    this._commentsService.findAllComments().subscribe(next => {
      this.comments = next;
      this.load = false;
    }, error => {
      console.error(error);
      this.load = false;
    });
  }

  ngOnInit(): void {
  }

}
