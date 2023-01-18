import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentListItemComponent } from './components/student-list/student-list-item/student-list-item.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    StudentListComponent,
    StudentLoginComponent,
    NavBarComponent,
    StudentListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
