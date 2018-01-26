import { Component, OnInit } from '@angular/core';
import { Hero } from '../helpers/hero'

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],

})

export class HeroesComponent implements OnInit {
    title = "Hello Huong";

    hero: Hero = {
        id: 1,
        name: "huong Huong"
    }
    constructor() { }
    ngOnInit() { }
}