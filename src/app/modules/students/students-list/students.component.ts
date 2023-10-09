import { Component } from '@angular/core';
import { StudentsService } from 'src/app/services/students/students.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  page: number = 1;
  count: number = 0;
  tableSize: number = 9;
  students: any;
  constructor(
    private studentService: StudentsService,
    private toastrService: ToastrService
  ) {}
  ngOnInit() {
    this.getStudents();
  }
  getStudents() {
    this.studentService.getStudents().subscribe((res) => {
      this.students = res;
    });
  }
  deleteStudent(id: Number) {
    this.studentService.deleteStudent(id).subscribe((res) => {
      this.getStudents();
      this.toastrService.success('Successfully deleted a student', 'Success');
    });
  }
  getStudentByID(id: Number) {
    this.studentService.getStudentByID(id);
  }
  onTableDataChange(event: any) {
    console.log(event);
    this.page = event;
    this.getStudents();
  }
}
