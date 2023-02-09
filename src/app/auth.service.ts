import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
}
)
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username:any, password:any){
    //post these details ti API server return user info if correct
    return this.http.post('/api/auth.php', {
      username,
      password
    })
  }
}
