import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { TeachersServiceService } from 'src/app/services/teacher/teachers-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.css'],
})
export class CoursesEditComponent {
  courseToEdit: any = {};

  constructor(
    private courseService: CoursesService,
    private router: Router,
    private toastrService: ToastrService
  ) {}
  courseEditForm = new FormGroup({
    title: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.courseService
      .getCourseByID(this.courseService.courseID)
      .subscribe((res) => {
        this.courseToEdit = res;
      });
  }

  onSubmit() {
    this.courseService.updateCourse(
      this.courseToEdit.id,
      this.courseEditForm.value
    );
    this.toastrService.success(`Successfully edited a course`, 'Success');
    this.router.navigate(['/courses']);
  }
}
