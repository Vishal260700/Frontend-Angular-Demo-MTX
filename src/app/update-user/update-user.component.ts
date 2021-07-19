import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../user.service';


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
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : User, private userservice : UserService) { }

  updateForm = new FormGroup({
    title : new FormControl(''),
    team : new FormControl(''),
    technologies : new FormControl(''),
    position : new FormControl(''),
    information : new FormControl('')
  });

  onSubmit(){
    if(this.updateForm.value.title != ''){
      this.data.title = this.updateForm.value.title;
    }
    if(this.updateForm.value.team != ''){
      this.data.team = this.updateForm.value.team;
    }
    if(this.updateForm.value.technologies != ''){
      console.log(this.updateForm.value.technologies.split(';'));
      this.data.technologies = this.data.technologies.concat(this.updateForm.value.technologies.split(';'));
      console.log(this.data.technologies);
    }
    if(this.updateForm.value.position != '' || this.updateForm.value.information != ''){
      this.data.exp.push({"position" : this.updateForm.value.position , "information" : this.updateForm.value.information });
    }
    this.userservice.updateUser(this.data);

    setTimeout(() => {
      window.location.reload()
    }, 500);
  }

  ngOnInit(): void {
  }

}
