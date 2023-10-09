import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students-list/students.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { StudentsFormComponent } from './students-form/students-form.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'edit', component: StudentsEditComponent },
  { path: 'add', component: StudentsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
