import { Component, Input, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {AddTechComponent} from '../add-tech/add-tech.component';

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
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  constructor(public dialog: MatDialog, private _userService: UserService) { }

  about = true;
  experience = false;
  contact = false;

  // API Calls for retrieving data for demoUser

  @Input() currUser : User = {
    id: '',
    name: 'currUsername',
    email: 'currUser@ghmail.com',
    title: 'sde',
    team: 'mtx',
    technologies: ['spring'],
    exp: null
  };

  demoUser = {
    userName : "Vishal Agarwal",
    userEmail : "vishal@mail.com",
    userTitle : "Software Engineer",
    userExp : [
      {
        position : "UI Developer at Github",
        information : "Developed new conversion funnels"
      },
      {
        position : "Frontend Developer at JotForm",
        information : "Disrupt tumpdown retro everyday cqarry unicorn"

      }
    ],
    userCurrentTeam : "Platform Team",
    userTechnologies : ["angular", "mongodb", "spring",]
  }

  showAbout(){
    this.about = true;
    this.experience = false;
    this.contact = false;

  }
  showExp(){
    this.about = false;
    this.experience = true;
    this.contact = false;
  }
  showContact(){
    this.about = false;
    this.experience = false;
    this.contact = true;
  }


  // API for updating/adding data
  openDialog(){
    this.dialog.open(AddTechComponent, {
      data: {
        UID : this.currUser.id
      }
    });
  }

  delDoc(){
    this._userService.delUserById(this.currUser.id);
  }

  ngOnInit() {
    console.log(this.currUser);
  }

}
