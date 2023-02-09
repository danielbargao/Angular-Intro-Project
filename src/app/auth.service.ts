import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  success: boolean,
  message: string
}

@Injectable({providedIn: 'root'})
export class AuthService {

  loggedInStatus = false

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value
  }

  get isLoggedIn(){
    return this.loggedInStatus
  }
  

  getUserDetails(username:any, password:any){
    //post these details ti API server return user info if correct
    return this.http.post<myData>('/api/auth.php', {
      username,
      password
    })
  }
}
