import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersEditComponent } from './teachers-edit.component';

describe('TeachersEditComponent', () => {
  let component: TeachersEditComponent;
  let fixture: ComponentFixture<TeachersEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachersEditComponent],
    });
    fixture = TestBed.createComponent(TeachersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
