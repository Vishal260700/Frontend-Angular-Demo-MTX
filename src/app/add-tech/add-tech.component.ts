import { Inject } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {UserService} from '../user.service';

interface User{
  id : string,
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
    @Inject(MAT_DIALOG_DATA) public data : User) {}

  profileForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    title : new FormControl(''),
    team : new FormControl(''),
    technologies : new FormControl(''),
    position : new FormControl(''),
    information : new FormControl('')
  });


  onSubmit() {

    let technologies : string = this.profileForm.value.technologies;
    let tech = technologies.split(';')

    let insertVal = {
      "name": this.profileForm.value.name,
      "email" : this.profileForm.value.email,
      "title" : this.profileForm.value.title,
      "team" : this.profileForm.value.team,
      "technologies" : tech,
      "exp" : [{"position" : this.profileForm.value.position, "information" : this.profileForm.value.information}]
    }

    this._userService.putUser(insertVal);

    setTimeout(() => {
      window.location.reload();
    }, 1000);

  }

  ngOnInit(): void {}

}
