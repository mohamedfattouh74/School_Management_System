import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from 'src/app/services/auth/signup/signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private signupService: SignupService
  ) {}
  signupForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    mobile: new FormControl(''),
  });

  onSubmit() {
    if (this.signupForm.valid) {
      // this.signupService.signup(this.signupForm.value).subscribe((res) => {
      //   console.log(res);
      //   this.toastrService.success('Successfully created new account', 'Success');
      // this.router.navigate(['login']);
      // },
      // error=>{
      //   this.toastrService.error('Eror created new account', 'Success');
      // });
    }
    console.log(this.signupForm.value);
  }
}
