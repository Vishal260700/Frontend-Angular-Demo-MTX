import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  });

  constructor(private auth: AuthServiceService, private router : Router) { }

  onSubmit(){
    let result = this.auth.signIn(this.loginForm.value.email, this.loginForm.value.password);
  }

  ngOnInit(): void {
  }

}
