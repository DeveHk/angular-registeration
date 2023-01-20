import { Component } from '@angular/core';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registration';
  constructor(private stu: StudentsService){
  this.stu.httpOptions.headers=this.stu.httpOptions.headers.set('authorisation',(localStorage.getItem('auth') && localStorage.getItem('auth').slice(0,-1)) || '')
  }
}
