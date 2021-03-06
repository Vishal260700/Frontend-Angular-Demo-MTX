
import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'frontend';
  constructor(private _userService: UserService) { }


  allUsers : any;

  ngOnInit() {
    this._userService.getUsers().subscribe(data => this.allUsers = data);
  }

}