import { Component } from '@angular/core';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  studentList:any
  constructor(private student:StudentsService ){}
  ngOnInit():void{
    this.student.getStudents().subscribe((Data)=>{
      this.studentList=Data
    })
  }
}
