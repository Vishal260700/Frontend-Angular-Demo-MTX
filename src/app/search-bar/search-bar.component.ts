import { Component, OnInit } from '@angular/core';

import {ResultCompComponent} from '../result-comp/result-comp.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private _userService: UserService, public dialog: MatDialog) {}
  

  searchQuery = new FormControl('');

  async search(){
    let searchResult;

    if(this.validateEmail(this.searchQuery.value)){
      console.log("Email");
      await this._userService.getUserByEmail(this.searchQuery.value).subscribe(data => {
        searchResult = data;
        console.log(searchResult);
        console.log(typeof(searchResult));
        this.dialog.open(ResultCompComponent, {
          data: searchResult
        })
      });
    }else{
      await this._userService.getUserByName(this.searchQuery.value).subscribe(data => {
        searchResult = data;
        console.log(searchResult);
        console.log(typeof(searchResult));
        this.dialog.open(ResultCompComponent, {
          data: searchResult
        })
      });
    }

  }

  // Helper functions
  validateEmail(email : any) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  ngOnInit(): void {
  }

}
