import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './teachers-list/teachers.component';
import { TeachersEditComponent } from './teachers-edit/teachers-edit.component';
import { TeachersFormComponent } from './teachers-form/teachers-form.component';

const routes: Routes = [
  { path: '', component: TeachersComponent },
  { path: 'edit', component: TeachersEditComponent },
  { path: 'add', component: TeachersFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersRoutingModule {}
