import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../shared/service/backend/users.service';
import {UserModel} from '../../../shared/service/models/user.model';
import {color} from '../../../shared/export.functions';

@Component({
  selector: 'app-home-comments-one-user',
  templateUrl: './home-comments-one-user.component.html',
  styleUrls: ['./home-comments-one-user.component.scss']
})
export class HomeCommentsOneUserComponent implements OnInit {

  @Input() userId: number;
  user: UserModel;

  constructor(private _userService: UserService) { }

  init() {
    this._userService.oneUser(this.userId).subscribe(next => {
      this.user = next;
    }, error => {
      console.error(error);
    });
  }

  color(i) {
    return color(i);
  }

  ngOnInit(): void {
    this.init();
  }

}
