import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/services/students/students.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css'],
})
export class StudentsFormComponent {
  students: any;
  score: any;
  levels: any;

  constructor(
    private router: Router,
    private studentService: StudentsService,
    private toastrService: ToastrService
  ) {}
  studentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    score: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.studentForm.valid) {
      this.studentService
        .addStudent(this.studentForm.value)
        .subscribe((res) => {
          console.log(res);
        });
      this.toastrService.success('Successfully added a new student', 'Success');
      this.router.navigate(['students']);
    }
    console.log(this.studentForm.value);
  }
  ngOnInit() {
    this.score = this.studentService.score;
    this.levels = this.studentService.levels;
    this.studentService.getStudents().subscribe((res) => {
      this.students = res;
    });
  }
}
