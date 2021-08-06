import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/service/backend/users.service';
import {UserModel} from '../../shared/service/models/user.model';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  staff: UserModel[];
  search: string;

  constructor(private _userService: UserService) {
    this.staff = [];
  }

  init() {
    this._userService.findAllUsers().subscribe(next => {
      this.staff = next;
    }, error => {
      console.error(error);
    });
  }

  ngOnInit(): void {
    this.init();
  }

}
