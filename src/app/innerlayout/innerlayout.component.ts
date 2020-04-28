import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-innerlayout',
  templateUrl: './innerlayout.component.html',
  styleUrls: ['./innerlayout.component.css']
})
export class InnerlayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout()
  {
    this.router.navigate(['/home']);
  }
}
