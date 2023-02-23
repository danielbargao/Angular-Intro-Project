import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  message = "Loading..."
  success = false

  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
    this.user.getSomeData().subscribe(data => {
      if (data.success == false){
        this.router.navigate(['login'])
      } else{
        this.message = data.message
      }
    })

  }

}
