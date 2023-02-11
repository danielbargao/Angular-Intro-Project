import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface myData {
  success: boolean,
  message: string
}

interface isLoggedIn {
  status: boolean
}


@Injectable({providedIn: 'root'})
export class AuthService {

  private loggedInStatus = false

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value
    localStorage.setItem('loggedIn', 'true')
  }

  isLoggedIn(): Observable<isLoggedIn>{
    return this.http.get<isLoggedIn>('/api/isloggedin.php')
  }
  

  getUserDetails(username:any, password:any){
    //post these details ti API server return user info if correct
    return this.http.post<myData>('/api/auth.php', {
      username,
      password
    })
  }
}
