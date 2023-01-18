import { Component } from '@angular/core';
import { Student } from 'src/app/student';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  error:boolean=false
  student:Student=new Student()
  studentReset:Student=new Student()
  sub:boolean=false
  constructor(private stu:StudentsService){

  }
  ngOnInit(){

  }
  onClick=()=>{
    if(this.student.name && this.student.email && this.student.rollnumber ){
      this.error=false
      console.log(this.student)
      this.stu.addStudent(this.student).subscribe((result)=>{
        console.log(result)
      })
      this.student=this.studentReset
      this.sub=true
      setTimeout(() => {
        this.sub=false
      }, 1500);
    }
    else{
      this.error=true
    }
  }
}
