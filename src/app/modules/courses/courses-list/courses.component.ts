import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Courses } from 'src/app/models/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  courses: Courses[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 9;
  tableSizes: any = [5, 10, 15, 20];
  constructor(
    private courseService: CoursesService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses().subscribe((res) => {
      this.courses = res;
      this.courseService.allCourses = res;
    });
  }

  deleteCourse(id: Number) {
    this.courseService.deleteCourse(id).subscribe((res) => {
      this.router.navigate(['courses']);
      this.getCourses();
      this.toastrService.success('Successfully deleted a course', 'Success');
    });
  }

  getCourseByID(id: Number) {
    this.courseService.getCourseByID(id);
  }

  onTableDataChange(event: any) {
    console.log(event);
    this.page = event;
    this.getCourses();
  }
}
