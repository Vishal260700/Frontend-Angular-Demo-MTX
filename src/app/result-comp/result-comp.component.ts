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
  selector: 'app-result-comp',
  templateUrl: './result-comp.component.html',
  styleUrls: ['./result-comp.component.css']
})
export class ResultCompComponent implements OnInit {




  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Array<User>) { }

  ngOnInit(): void {}

}
