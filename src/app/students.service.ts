import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  urlStu:string="http://localhost:3001/students"
  urlAuth:string="http://localhost:3001/auth"
  httpOptions:any
  constructor(private http: HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'authorisation':  ''
      })
    };
  }

  getStudents(){
      return this.http.get(this.urlStu)
  }
  getStudent(){
    return this.http.get(`${this.urlStu}/user`,this.httpOptions)
  }
  signUp(user){
    return this.http.post(`${this.urlAuth}/signup`,user)
  }
  logIn(user){
    return this.http.post(`${this.urlAuth}/login`,user)
  }
  removeStudent(){
    return this.http.delete(this.urlStu,this.httpOptions)
  }
  updateStudent(data){
    console.log(data)
    return this.http.patch(this.urlStu,data,this.httpOptions)
  }
}
