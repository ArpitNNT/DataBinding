import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent implements OnInit {

  constructor() { }

  result = "";

  display(name) {
    this.result = name;
    //console.log("Name : "+this.result);
    return this.result;
  }

  ngOnInit() {
  }

}
