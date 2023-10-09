import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolComponent } from './school.component';
import { SchoolRoutingModule } from './school-routing.module';

@NgModule({
  declarations: [SchoolComponent],
  imports: [CommonModule, SchoolRoutingModule],
  exports: [SchoolComponent],
})
export class SchoolModule {}
