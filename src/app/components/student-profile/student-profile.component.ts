import { Component } from '@angular/core';
import { Profile, Student } from 'src/app/student';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {
  profile:any
  student:Student= new Student()
  active:boolean=false
  update:boolean=false
  constructor(private stu: StudentsService){
    stu.getStudent().subscribe((result)=>{
      this.profile=result
      this.active=true
      this.student.name=this.profile.info.name
    this.student.rollnumber=this.profile.info.rollnumber
    this.student.email=this.profile.info.email
    },(error)=>{console.log(error)})
    
  }
  delPro=()=>{
    this.stu.removeStudent().subscribe((result)=>{
      console.log(result)
    })

    localStorage.removeItem('auth')
    this.stu.httpOptions.headers=this.stu.httpOptions.headers.set('authorisation','')
  }
  updateStu=()=>{
    this.update=!this.update
    if(!this.update)
    this.stu.updateStudent(this.student).subscribe((result)=>{
    })
    else{
      this.student.name=this.profile.info.name
    this.student.rollnumber=this.profile.info.rollnumber
    this.student.email=this.profile.info.email
    }
  }
}
