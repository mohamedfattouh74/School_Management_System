import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { TeachersServiceService } from 'src/app/services/teacher/teachers-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.css'],
})
export class CoursesFormComponent {
  constructor(
    private courseService: CoursesService,
    private router: Router,
    private toastrService: ToastrService
  ) {}
  courseForm = new FormGroup({
    title: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
  });
  ngOnInit() {}
  onSubmit() {
    if (this.courseForm.valid) {
      this.courseService.addCourse(this.courseForm.value).subscribe((res) => {
        this.toastrService.success(
          'Successfully added a new course',
          'Success'
        );
        this.router.navigate(['courses']);
      });
    }
  }
}
