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
}
