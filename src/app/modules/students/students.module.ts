import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students-list/students.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { StudentsFormComponent } from './students-form/students-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    StudentsComponent,
    StudentsEditComponent,
    StudentsFormComponent,
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatOptionModule,
    NgxPaginationModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [StudentsComponent, StudentsEditComponent, StudentsFormComponent],
})
export class StudentsModule {}
