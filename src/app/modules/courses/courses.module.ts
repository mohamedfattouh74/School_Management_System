import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses-list/courses.component';
import { CoursesEditComponent } from './courses-edit/courses-edit.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [CoursesComponent, CoursesEditComponent, CoursesFormComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatOptionModule,
    NgxPaginationModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [CoursesComponent, CoursesEditComponent, CoursesFormComponent],
})
export class CoursesModule {}
