import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Registration} from './model/Registration';
import {User} from './model/user';
import {Field} from './model/field';
import { AddnewfieldComponent } from './addnewfield/addnewfield.component';

export interface IUser
{
  fName;  lName;  email;  password;  country;
}

export interface ICountry
{
  countryName;
}
const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private httpservice: HttpClient) { }
message: string;

getCountries() {
  return this.httpservice.get('http://localhost:3000/getCountries')
  .toPromise()
  .then(res => res as ICountry[]);
 }

 registerUser(registration: Registration) {

  return this.httpservice.post('http://localhost:3000/registeruser', registration)
              .toPromise()
              .then(res => res);
 }

 login(user: User) {
  return this.httpservice.post('http://localhost:3000/getloginDetails', user)
  .toPromise()
  .then(res => res);
  }

  addNewField(field: Field) {
    return this.httpservice.post('http://localhost:3000/addNewField', field)
    .toPromise()
    .then(res => res);
  }
  // Get all fields of user
  getAllfields(emailid: string) {
    const params = new HttpParams()
    .set('emailid', emailid);
    return this.httpservice.get('http://localhost:3000/getAllFields', {params})
    .toPromise()
    .then(res => res);
  }

  // Get specific fieldr
  getfielddetails(fieldid: string) {
    const params = new HttpParams()
    .set('fieldid', fieldid);
    return this.httpservice.get('http://localhost:3000/getFieldDetails', {params})
    .toPromise()
    .then(res => res);
  }

   // Get field by ID
   getfieldById(fieldid: string) {
    const params = new HttpParams()
    .set('fieldid', fieldid);
    return this.httpservice.get('http://localhost:3000/getFieldById', {params})
    .toPromise()
    .then(res => res);
  }

  addSensorData(sensorId: string, sensorValue: string) {
    const params = new HttpParams()
    .set('sensorId', sensorId)
    .set('sensorValue', sensorValue);
    this.httpservice.post('http://localhost:3000/addSensorValues', {params});
  }

 }

