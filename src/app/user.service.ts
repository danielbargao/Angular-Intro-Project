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

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get<myData>('/api/database.php')
  }

  isLoggedIn(): Observable<isLoggedIn>{
    return this.http.get<isLoggedIn>('/api/isloggedin.php')
  }
}
