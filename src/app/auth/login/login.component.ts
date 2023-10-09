import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/auth/login/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private toastrService: ToastrService) {}
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  onSubmit() {
    if (this.loginForm.valid) {
      // this.teacherService
      //   .addTeacher(this.teacherForm.value)
      //   .subscribe((res) => {
      //     console.log(res);
      //   });
      this.toastrService.success('Successfully logged in', 'Success');
      this.router.navigate(['school']);
    }
    console.log(this.loginForm.value);
  }
}
