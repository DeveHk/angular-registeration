import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url:string="https://register-student-json.onrender.com/students"
  
  constructor(private http: HttpClient) { 
    
  }
  getStudents(){
      return this.http.get(this.url)
  }
  addStudent(data){
    console.log(data)
    return this.http.post(this.url,data)
  }
  removeStudent(id){
    console.log(id)
    return this.http.delete(`${this.url}/${id}`)
  }
  updateStudent(id,data){
    return this.http.patch(`${this.url}/${id}`,data)
  }
}
