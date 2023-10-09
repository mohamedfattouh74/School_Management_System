import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsEditComponent } from './students-edit.component';

describe('StudentsEditComponent', () => {
  let component: StudentsEditComponent;
  let fixture: ComponentFixture<StudentsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsEditComponent],
    });
    fixture = TestBed.createComponent(StudentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
