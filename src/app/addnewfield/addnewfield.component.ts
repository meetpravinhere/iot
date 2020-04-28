import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Field} from '../model/field';
import {UserService} from '../user.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-addnewfield',
  templateUrl: './addnewfield.component.html',
  styleUrls: ['./addnewfield.component.css']
})
export class AddnewfieldComponent implements OnInit {

    fieldModel = new Field('', '', '', '', '', '', '', '', '', false, false, false, false, false, false);


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  addnewfield() {

    this.fieldModel.emailid = localStorage.getItem('currentUserId');
    this.userService.addNewField(this.fieldModel).then(
      (result) => {
        if (JSON.stringify(result) === '[]') {
          console.log('Error while adding field.');
        } else {
          this.router.navigate(['landing/fieldslist']);
        }
      }
    );
  }
}
