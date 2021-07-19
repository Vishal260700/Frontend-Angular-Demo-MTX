import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import {AddTechComponent} from '../add-tech/add-tech.component';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(public dialog: MatDialog, private afAuth : 
    AuthServiceService) { }

  openDialog(){
    const dialogRef = this.dialog.open(AddTechComponent);
  }

  logOut(){
    this.afAuth.signOut();
  }

  ngOnInit(): void {
  }

}
