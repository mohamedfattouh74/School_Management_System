import { Component } from '@angular/core';
import { TeachersServiceService } from '../../../services/teacher/teachers-service.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})
export class TeachersComponent {
  page: number = 1;
  count: number = 0;
  tableSize: number = 9;
  tableSizes: any = [5, 10, 15, 20];
  teachers: any;
  constructor(
    private teacherService: TeachersServiceService,
    private toastrService: ToastrService
  ) {}
  ngOnInit() {
    this.getTeachers();
  }
  getTeachers() {
    this.teacherService.getTeachers().subscribe((res) => {
      this.teachers = res;
    });
  }
  deleteTeacher(id: Number) {
    this.teacherService.deleteTeacher(id).subscribe((res) => {
      this.getTeachers();
      this.toastrService.success('Successfully deleted a teacher', 'Success');
    });
  }

  getTeacherByID(id: Number) {
    this.teacherService.getTeacherByID(id);
  }
  onTableDataChange(event: any) {
    console.log(event);
    this.page = event;
    this.getTeachers();
  }
}
