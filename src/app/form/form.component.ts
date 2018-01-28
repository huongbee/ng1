import { Component, OnInit } from '@angular/core';
import { Hero } from "../helpers/hero"
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  heroes: Hero[] = [
    { id: 1, name: "Huong" },
    { id: 2, name: "Huong 1" },
    { id: 3, name: "Huong 2" },
    { id: 4, name: "Huong 3" },
    { id: 5, name: "Huong 4" }
  ]
  constructor() { }

  ngOnInit() {
  }

  inputValue = '';

  showDataInput(event) {
    this.inputValue = event.target.value
  }

  checkngIf = "huong"

}
