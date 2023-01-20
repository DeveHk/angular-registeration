import { Component } from '@angular/core';
import { Student, User } from 'src/app/student';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  error: boolean = false
  user: User = new User()
  log: boolean = true
  accessTocken: string
  //showpass:boolean=false
  pass: string
  errorMsg: string
  logging: boolean = false
  
  constructor(private stu: StudentsService) {
    this.accessTocken=localStorage.getItem('auth')    
  }
  ngOnInit() {
    
  }

  signUp = () => {
    if (this.user.password && this.user.user && this.pass == this.user.password) {
      this.error = false
      this.logging = true
      this.stu.signUp(this.user).subscribe((result: any) => {
        this.logging = false
        this.accessTocken = result.accessTocken
        localStorage.setItem('auth',JSON.stringify(`Bearer ${result.accessTocken}`))
        this.stu.httpOptions.headers=this.stu.httpOptions.headers.set('authorisation',`Bearer ${result.accessTocken}`)
        

      },
        (error) => {
          this.logging = false
          this.errorMsg = error.error
        })
      /*this.stu.addStudent(this.user).subscribe((result)=>{
        console.log(result)
      })*/
    }
    else {
      this.error = true
    }
  }
  login = () => {
    if (this.user.password && this.user.user) {
      this.error = false
      this.logging = true
      this.stu.logIn(this.user).subscribe(
        (result: any) => {
          this.logging = false 
         this.accessTocken = result.accessTocken
         localStorage.setItem('auth',JSON.stringify(`Bearer ${result.accessTocken}`))
       
          this.stu.httpOptions.headers=this.stu.httpOptions.headers.set('authorisation',`Bearer ${result.accessTocken}`)
      
        },
        (error) => {
          this.logging = false
          this.errorMsg = error.error
        })
      /*this.stu.addStudent(this.user).subscribe((result)=>{
        console.log(result)
      })*/
    }
    else {
      this.error = true
    }
  }
  logOut=()=>{
    localStorage.removeItem("auth")
    this.accessTocken=null
    this.stu.httpOptions.headers=this.stu.httpOptions.headers.set('authorisation',``)
  }
  toggleLog = () => {
    this.errorMsg=''
    this.error = false
    this.log = !this.log
  }
  /*showPass=()=>{this.showpass=!this.showpass
  console.log('clicked')}*/
}
