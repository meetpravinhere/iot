import { Component, OnInit } from '@angular/core';
import {Registration} from '../model/Registration';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regModel = new Registration('', '', '', '', '', '');
  result: string;

  constructor(private userService: UserService, private router: Router) {  }

  ngOnInit() {
  }

  async register() {

    const data = await this.userService.registerUser(this.regModel);
    if (JSON.stringify(data) === 'success') {
      this.regModel = null;
    }
    this.result = data.toString();
    this.router.navigate(['home/login']);


  }
}
