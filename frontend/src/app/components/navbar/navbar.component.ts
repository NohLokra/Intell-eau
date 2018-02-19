import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean = true;

  collapsed(event: any) : void {
    // console.log(event);
  }

  expanded(event: any) : void {
    // console.log(event);
  }

  constructor() { }

  ngOnInit() {
    
  }

}
