import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name = "Huong";
  from = "GiaLai"
  constructor() { }

  ngOnInit() {

  }
  alert(name) {
    alert("Hello " + name)
  }
  hello() {
    alert("Hello " + this.name)
  }
}
