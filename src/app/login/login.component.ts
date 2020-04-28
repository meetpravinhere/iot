import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 // userModel = new User('', '', '');
  userModel = new User('', '123', 'meetyogeshhere@gmail.com');
  countryList: any;
  constructor(private router: Router, private userSerivce: UserService) { }

  ngOnInit() {
  }

  signin() {
    this.userSerivce.login(this.userModel).then(
      (loginInfo) => {
        if (JSON.stringify(loginInfo) === '[]') {
          console.log('Invalid user name or password');
        } else {
          localStorage.setItem('currentUserId', loginInfo[0].email);
          this.router.navigate(['/landing']);
        }
      }
    );

  }

}
