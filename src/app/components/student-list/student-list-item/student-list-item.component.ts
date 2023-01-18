import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Student } from 'src/app/student';
import { StudentsService } from 'src/app/students.service';
@Component({
  selector: 'app-student-list-item',
  templateUrl: './student-list-item.component.html',
  styleUrls: ['./student-list-item.component.css']
})
export class StudentListItemComponent {
  @Input() student:Student
  stud:Student=new Student()
  @Input() index:number
  @Output() reLoadList: EventEmitter<string>= new EventEmitter()
  update:boolean=false
  constructor(private stu:StudentsService){

  }
  removeStu=()=>{
    this.stu.removeStudent(this.student.id).subscribe((result)=>{
      console.log(result)
    })
    this.reLoadList.emit()
  }
  updateStu=()=>{
    this.update=!this.update
    
    this.stud=this.student
    this.stu.updateStudent(this.student.id,this.stud).subscribe((result)=>{
      console.log(result)
      console.log(this.student.id)
    })
 
    
  }
}
