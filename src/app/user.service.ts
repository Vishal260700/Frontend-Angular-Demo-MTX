import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface User{
  name : string,
  email: string,
  title : string,
  team : string,
  technologies : any,
  exp : any
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }

  private _url = "http://localhost:8080/api/v1/users";

  // get all users - ngOnInit -- FRONT END DONE
  getUsers(){
    return this.http.get(this._url);
  }

  // get specific user - search bar - FRONT END DONE
  
  // Helper Queries for search bar
  getUserByName(queryName : string){
    return this.http.get(this._url + "/getUser/" + queryName);
  }
  getUserByEmail(queryEmail : string){
    return this.http.get(this._url + "/userSearch/" + queryEmail);
  }
  getUserById(queryId : string){
    return this.http.get(this._url + "/" + queryId);
  }

  // PUT REQUEST
  putUser(newUser : User){
    console.log(newUser);
    this.http.put<User>(this._url, newUser).subscribe(data => console.log(data));
  }

  // POST REQUEST
  addTech(updates : any){
    this.http.post(this._url + "/editUserDetail", updates).subscribe(data => console.log(data));
  }





}
