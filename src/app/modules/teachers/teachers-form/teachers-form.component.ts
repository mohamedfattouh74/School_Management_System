import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { TeachersServiceService } from 'src/app/services/teacher/teachers-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-teachers-form',
  templateUrl: './teachers-form.component.html',
  styleUrls: ['./teachers-form.component.css'],
})
export class TeachersFormComponent {
  courses: any;

  constructor(
    private courseService: CoursesService,
    private teacherService: TeachersServiceService,
    private router: Router,
    private toastrService: ToastrService
  ) {}
  teacherForm = new FormGroup({
    name: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    firstCourse: new FormControl('', Validators.required),
    secondCourse: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.courseService.getCourses().subscribe((res) => {
      this.courses = res;
    });
    console.log(this.courses);
  }
  onSubmit() {
    if (this.teacherForm.valid) {
      this.teacherService
        .addTeacher(this.teacherForm.value)
        .subscribe((res) => {
          console.log(res);
        });
      this.toastrService.success('Successfully added a new teacher', 'Success');
      this.router.navigate(['teachers']);
    }
    console.log(this.teacherForm.value);
  }
}
