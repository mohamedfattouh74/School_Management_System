import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersFormComponent } from './teachers-form.component';

describe('TeachersFormComponent', () => {
  let component: TeachersFormComponent;
  let fixture: ComponentFixture<TeachersFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachersFormComponent],
    });
    fixture = TestBed.createComponent(TeachersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
