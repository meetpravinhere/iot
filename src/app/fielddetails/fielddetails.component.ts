import { Component, OnInit, NgZone, ViewEncapsulation } from '@angular/core';
import {UserService} from '../user.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { map, filter, scan } from 'rxjs/operators';
import { Field } from '../model/field';
import 'src/assets/js/wb.js';
declare let subscribeName1: any;
declare let subscribeName2: any;
declare let subscribeName3: any;
//declare var addSubscription: any;
declare var switchMotor: any;
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { STOCKS } from '../shared/stocks';
// This lets me use jquery
declare var $: any;

interface IField {
  fieldid: string;
 // fieldname: string;
  sensorname: string;
  emailid: string;
  createdDate: string;
  ismotor: boolean;

}

@Component({
  selector: 'app-fielddetails',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './fielddetails.component.html',
  styleUrls: ['./fielddetails.component.css']
})
export class FielddetailsComponent implements OnInit {
  title = 'Line Chart';
  gaugemap = {};
  fieldid: any;
  fieldDetails: any;
  fieldname: string;
  fieldInfo: any;
  ismotor: boolean;
  submessage: String;

  private margin = {top: 20, right: 20, bottom: 30, left: 50};
    private width: number;
    private height: number;
    private x: any;
    private y: any;
    private svg: any;
    private line: d3Shape.Line<[number, number]>;

  constructor(private route: ActivatedRoute, private userService: UserService, private ngZone: NgZone) {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.fieldid = params.get('fieldid');
        this.fieldname = params.get('fieldname');
      }
    );

    this.width = 700 - this.margin.left - this.margin.right;
    this.height = 350 - this.margin.top - this.margin.bottom;
  }

ngOnInit() {
    this.getFieldDetails();

    // calling angular function from javascript
    window['angularComponentReference'] = {
        zone: this.ngZone,
        loadAngularFunction: (topic, message, date) => this.angularFunctionCalled(topic, message, date),
        component: this
      };

      this.initSvg();
      this.initAxis();
      this.drawAxis();
      this.drawLine();
  }
  private initSvg() {
    this.svg = d3.select('svg')
        .append('g')
        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
}

private initAxis() {
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(STOCKS, (d) => d.date ));
    this.y.domain(d3Array.extent(STOCKS, (d) => d.value ));
}

private drawAxis() {

    this.svg.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + this.height + ')')
        .call(d3Axis.axisBottom(this.x));

    this.svg.append('g')
        .attr('class', 'axis axis--y')
        .call(d3Axis.axisLeft(this.y))
        .append('text')
        .attr('class', 'axis-title')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '.71em')
        .style('text-anchor', 'end')
        .text('°C');
}

private drawLine() {
    this.line = d3Shape.line()
        .x( (d: any) => this.x(d.date) )
        .y( (d: any) => this.y(d.value) );

    this.svg.append('path')
        .datum(STOCKS)
        .attr('class', 'line')
        .attr('d', this.line);
}


  angularFunctionCalled(topic: string, submessage: string, date: string) {
     this.fieldDetails.forEach(function (fielddetail) {
       if (topic.includes(fielddetail.sensorname)) {
         debugger;
        document.getElementById(fielddetail.fieldid + fielddetail.sensorname).innerHTML = submessage;
      //  window.localStorage.setItem(fielddetail.sensorname + '1', submessage);
       }
    });
  }

  // addSensorValues(sensorname: string, sensorvalue: string) {
  //    if (localStorage.getItem(sensorname).toString() === sensorname) {
  //       this.userService.addSensorData(localStorage.getItem(sensorname), sensorvalue);

  //    }
  // }

  getFieldDetails()  {

    // let prefixname = '';
    this.userService.getfieldById(this.fieldid).then(
      (fieldinfo) => {
        if (JSON.stringify(fieldinfo) === '[]') {
          console.log('Error while getting field details.');
        } else {
          this.fieldInfo  = fieldinfo;
         // prefixname = fieldinfo[0].fieldid + '/' +  fieldinfo[0].name + '/';
        }
      }
    ); // end of getfielddetails
    this.userService.getfielddetails(this.fieldid).then(
      (result) => {
        if (JSON.stringify(result) === '[]') {
          console.log('Error while getting field details.');
        } else {
          this.fieldDetails = result;
          // if (this.fieldDetails.length === 1) {
          //   subscribeName1 = prefixname + this.fieldDetails[0].sensorname;
          //   debugger;
          // }
          // if (this.fieldDetails.length === 2) {
          //   subscribeName2 = prefixname + this.fieldDetails[1].sensorname;
          //   debugger;
          // }
          // if (this.fieldDetails.length === 3) {
          //   subscribeName3 = prefixname + this.fieldDetails[2].sensorname;
          //   debugger;
          // }

          //addSubscription();
          // if (this.fieldDetails.length === 1) {
          // localStorage.setItem(this.fieldDetails[0].sensorname, this.fieldDetails[0]._id);
          // }
          // if (this.fieldDetails.length === 2) {
          // localStorage.setItem(this.fieldDetails[1].sensorname, this.fieldDetails[1]._id);
          // }
          // if (this.fieldDetails.length === 3) {
          // localStorage.setItem(this.fieldDetails[2].sensorname, this.fieldDetails[2]._id);
          // }
        }
      }
    ); // end of getfielddetails

  }



  showModal(): void {
    alert('called');
    $('#myModal').modal('show');
  }
  sendModal(): void {
    //do something here
    this.hideModal();
  }
  hideModal(): void {
    document.getElementById('close-modal').click();
  }

  checkValue(event: any) {
    if (event.target.checked) {
      switchMotor('1');
    } else {
      switchMotor('0');
    }
 }
}
