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

  checkngIf = "huong";

  textEdit = '';
  idEdit = null;
  isShowForm = false;
  action = "edit"
  showEdit(event) {
    this.action = 'edit'
    this.textEdit = event.target.innerText
    this.idEdit = event.target.getAttribute('id')
    this.isShowForm = !this.isShowForm;
  }
  saveData() {
    if (this.action == 'add') {
      this.heroes.unshift({
        id: this.idEdit,
        name: this.textEdit
      })
    }
    else {
      this.heroes.forEach((hero) => {
        if (hero.id == this.idEdit) {
          hero.name = this.textEdit
        }
      })
    }
    this.isShowForm = !this.isShowForm;
  }
  deleteHero(id) {
    let position = this.heroes.map(hero => hero.id).indexOf(id);
    if (position != -1) {
      this.heroes.splice(position, 1);
    }
    else alert('Cannot find hero!')
  }
  addHero() {
    this.isShowForm = !this.isShowForm;
    this.textEdit = '';
    this.idEdit = '';
    this.action = 'add'
  }

}
