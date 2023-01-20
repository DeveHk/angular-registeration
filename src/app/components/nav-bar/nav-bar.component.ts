import { Component } from '@angular/core';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  menu: boolean=true
  login:boolean=false
  constructor(private stu: StudentsService ){
    if(localStorage.getItem('auth'))
    this.login=true
  }
  showMenu=()=>{
    this.menu=!this.menu
    console.log(this.menu)
    
  }
}
