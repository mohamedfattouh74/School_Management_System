import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { TeachersServiceService } from 'src/app/services/teacher/teachers-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-teachers-edit',
  templateUrl: './teachers-edit.component.html',
  styleUrls: ['./teachers-edit.component.css'],
})
export class TeachersEditComponent {
  teacherToEdit: any = {};
  courses: any;
  constructor(
    private courseService: CoursesService,
    private teacherService: TeachersServiceService,
    private router: Router,
    private toastrService: ToastrService
  ) {}
  teacherEditForm = new FormGroup({
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

    this.teacherService
      .getTeacherByID(this.teacherService.teacherID)
      .subscribe((res) => {
        this.teacherToEdit = res;
      });
  }
  onSubmit() {
    if (this.teacherEditForm.valid) {
      this.teacherService.updateTeacher(
        this.teacherToEdit.id,
        this.teacherEditForm.value
      );

      this.toastrService.success('Successfully edited a teacher', 'Success');
      this.router.navigate(['teachers']);
    }
  }
}
