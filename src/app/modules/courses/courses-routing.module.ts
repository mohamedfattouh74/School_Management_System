import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses-list/courses.component';
import { CoursesEditComponent } from './courses-edit/courses-edit.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'edit', component: CoursesEditComponent },
  { path: 'add', component: CoursesFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
