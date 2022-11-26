import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bootstap4NavBarDemo';
  navBarOpen=false;
  ddlOpen=false;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  navBar()
  {
    this.navBarOpen =!this.navBarOpen;
  }
  dropdownOpen()
  {
    this.ddlOpen =!this.ddlOpen;
  }
}
