import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    name = "Huong";
    from = "GiaLai"

    imgUrl = "https://www.google.com.vn/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
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
