import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teachers } from 'src/app/models/teachers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeachersServiceService {
  baseurl = 'http://localhost:3000/teachers';
  teachers: any;
  teacherID: any;
  constructor(private http: HttpClient) {
    this.getTeachers();
  }
  getTeachers(): Observable<Teachers[]> {
    return this.http.get<Teachers[]>(this.baseurl);
  }
  addTeacher(teacher: any) {
    return this.http.post(this.baseurl, teacher);
  }

  deleteTeacher(id: Number) {
    let url = this.baseurl + `/${id}`;
    return this.http.delete(url);
  }
  getTeacherByID(id: Number): Observable<Teachers> {
    let url = this.baseurl + `/${id}`;
    this.teacherID = id;
    return this.http.get<Teachers>(url);
  }

  updateTeacher(id: Number, teacher: any) {
    let url = this.baseurl + `/${id}`;
    return this.http.put(url, teacher).subscribe();
  }
}
