import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Courses } from 'src/app/models/courses';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  selectedCourse: any = {};
  courseID: any;

  baseurl = 'http://localhost:3000/courses';
  constructor(private http: HttpClient) {}

  allCourses: any;
  getCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>(this.baseurl);
  }

  addCourse(course: any) {
    return this.http.post(this.baseurl, course);
  }

  deleteCourse(id: Number) {
    let url = this.baseurl + `/${id}`;
    return this.http.delete(url);
  }

  getCourseByID(id: Number): Observable<Courses> {
    let url = this.baseurl + `/${id}`;
    this.courseID = id;
    return this.http.get<Courses>(url);
  }

  updateCourse(id: Number, course: any) {
    let url = this.baseurl + `/${id}`;
    return this.http.put(url, course).subscribe();
  }
}
