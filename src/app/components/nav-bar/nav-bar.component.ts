import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  menu: boolean=true
  showMenu=()=>{
    this.menu=!this.menu
    console.log(this.menu)
  }
}
