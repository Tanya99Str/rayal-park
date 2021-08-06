import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RoomsService} from '../../shared/service/backend/rooms.service';
import {color} from '../../shared/export.functions';
import {CommentsService} from '../../shared/service/backend/comments.service';
import {CommentModel} from '../../shared/service/models/comment.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('mainSlider', {static: false}) mainSlider: ElementRef;
  translate: number = 0;
  comments: CommentModel[];
  load: boolean = false;

  constructor(private _roomsService: RoomsService,
              private _commentsService: CommentsService) {
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

  next() {
    if (this.mainSlider.nativeElement.clientWidth > 100 && this.translate > (-(32 + 2) * this.comments.length)) {
      if (this.translate != 100 - this.mainSlider.nativeElement.clientWidth) {
        this.translate -= 32 + 2;
        this.mainSlider.nativeElement.style.transform = 'translateX(' + this.translate + '%)';
      }
    }
  }

  back() {
    if (this.translate != 0) {
      this.translate += 32 + 2;
      this.mainSlider.nativeElement.style.transform = 'translateX(' + this.translate + '%)';
    }
  }

  color(i) {
    return color(i);
  }

  ngOnInit(): void {
  }

}
