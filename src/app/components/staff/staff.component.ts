import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/service/backend/users.service';
import {UserModel} from '../../shared/service/models/user.model';
import {color} from '../../shared/export.functions';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  staff: UserModel[];
  search: string;
  load: boolean = false;

  constructor(private _userService: UserService) {
    this.staff = [];
  }

  init() {
    this.load = true;
    this._userService.findAllUsers().subscribe(next => {
      this.staff = next;
      this.load = false;
    }, error => {
      this.load = false;
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
