import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    UserComponent,
    FormComponent,
    PersonComponent,
    ListPersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
