import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/services/students/students.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.css'],
})
export class StudentsEditComponent {
  studentToEdit: any = {};
  score: any;
  levels: any;
  constructor(
    private router: Router,
    private studentService: StudentsService,
    private toastrService: ToastrService
  ) {}
  studentEditForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    score: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.score = this.studentService.score;
    this.levels = this.studentService.levels;
    this.studentService
      .getStudentByID(this.studentService.studentID)
      .subscribe((res) => {
        this.studentToEdit = res;
      });
  }

  onSubmit() {
    if (this.studentEditForm.valid) {
      this.studentService.updateStudent(
        this.studentToEdit.id,
        this.studentEditForm.value
      );

      this.toastrService.success('Successfully edited a student', 'Success');
      this.router.navigate(['students']);
    }
  }
}
