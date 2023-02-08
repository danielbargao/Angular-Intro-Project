import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username:any, password:any){
    //post these details ti API server return user info if correct
    return this.http.post('/api/auth.php', {
      username,
      password
    }).subscribe(data => {
      console.log(data, "is what we got from the server")
    })
  }
}
