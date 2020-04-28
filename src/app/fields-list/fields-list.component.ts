import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';


interface Field {
  fieldid: string;
  name: string;
  createdDate: string;
}

@Component({
  selector: 'app-fields-list',
  templateUrl: './fields-list.component.html',
  styleUrls: ['./fields-list.component.css']
})
export class FieldsListComponent implements OnInit {

  allFields: any;
  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit() {
    this.getAllFields();
  }

  getAllFields() {
    this.userservice.getAllfields(localStorage.getItem('currentUserId')).then(
      (result) => {
        if (JSON.stringify(result) === '[]') {
          console.log('Error while adding field.');
        } else {
          this.allFields = result;
        }
      }
    );
  }

  onUpdate(field: Field) {
    console.log(field);
    this.router.navigate(['landing/fielddetails', {fieldid: field.fieldid, fieldname: field.name}]);
  }

  addnewfield() {
    this.router.navigate(['landing/addnewfield']);
  }

}

