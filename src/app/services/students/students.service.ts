import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from 'src/app/models/students';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  score = [
    'A+',
    'A',
    'A-',
    'B+',
    'B',
    'B-',
    'C+',
    'C',
    'C-',
    'D+',
    'D',
    'D-',
    'F',
  ];
  levels = ['Middle', 'Elementary', 'Secondary'];
  studentID: any;
  baseurl = 'http://localhost:3000/students';
  constructor(private http: HttpClient) {
    this.getStudents();
  }

  getStudents(): Observable<Students[]> {
    return this.http.get<Students[]>(this.baseurl);
  }
  addStudent(student: any) {
    return this.http.post(this.baseurl, student);
  }

  deleteStudent(id: Number) {
    let url = this.baseurl + `/${id}`;
    return this.http.delete(url);
  }
  getStudentByID(id: Number): Observable<Students> {
    let url = this.baseurl + `/${id}`;
    this.studentID = id;
    return this.http.get<Students>(url);
  }

  updateStudent(id: Number, student: any) {
    let url = this.baseurl + `/${id}`;
    return this.http.put(url, student).subscribe();
  }
}
