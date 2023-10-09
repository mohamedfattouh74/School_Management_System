import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TeachersComponent } from './teachers-list/teachers.component';
import { TeachersEditComponent } from './teachers-edit/teachers-edit.component';
import { TeachersFormComponent } from './teachers-form/teachers-form.component';

@NgModule({
  declarations: [
    TeachersComponent,
    TeachersEditComponent,
    TeachersFormComponent,
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatOptionModule,
    NgxPaginationModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  exports: [TeachersComponent, TeachersEditComponent, TeachersFormComponent],
})
export class TeachersModule {}
