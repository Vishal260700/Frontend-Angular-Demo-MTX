import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public afAuth: AngularFireAuth, private router : Router){}

  signIn(email : string, password : string){

    this.afAuth.signInWithEmailAndPassword(email, password).then((userCredential: { user: any; }) => {
      let user = userCredential.user;
      this.router.navigate(['/dashboard']);
    }).catch((error: { code: any; message: any; }) => {
      let errorCode = error.code;
      let errorMessage = error.message;
    });
  }

  signOut(){
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }
  

}
