import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public afAuth: AngularFireAuth){}

  signIn(email : string, password : string){

    this.afAuth.signInWithEmailAndPassword(email, password).then((userCredential: { user: any; }) => {
      let user = userCredential.user;
      console.log(user);
    }).catch((error: { code: any; message: any; }) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }
  

}
