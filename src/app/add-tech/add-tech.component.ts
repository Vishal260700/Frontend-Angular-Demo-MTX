import { Inject } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {UserService} from '../user.service';

interface User{
  name : string,
  email: string,
  title : string,
  team : string,
  technologies : any,
  exp : any
}

@Component({
  selector: 'app-add-tech',
  templateUrl: './add-tech.component.html',
  styleUrls: ['./add-tech.component.css']
})
export class AddTechComponent implements OnInit {

  constructor(private _userService: UserService, 
    @Inject(MAT_DIALOG_DATA) public data: {UID : string}) {}

  profileForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    title : new FormControl(''),
    team : new FormControl(''),
    technologies : new FormControl(''),
    exp: new FormControl('')
  });

  onSubmit() {
    let insertVal : User = {
      "name": this.profileForm.value.name,
      "email" : this.profileForm.value.email,
      "title" : this.profileForm.value.title,
      "team" : this.profileForm.value.team,
      "technologies" : this.profileForm.value.technologies,
      "exp" : this.profileForm.value.exp
    }
    this._userService.putUser(insertVal);
    console.log(this.profileForm.value);
  }


  // Add new tech

  addTechForm = new FormGroup({
    tech : new FormControl('')
  });

  addNewTech(){
    // get user document
    let currUser;
    this._userService.getUserById(this.data.UID).subscribe(data => currUser = data);
    console.log(currUser);

    // save user document
    // this._userService.addTech(currUser)
  }

  ngOnInit(): void {
  }

}
