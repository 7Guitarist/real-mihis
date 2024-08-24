import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UsernameValidators } from '../../../shared/validators/username.validators';
import { PasswordValidators } from '../../../shared/validators/password.validators';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  loginForm: FormGroup;
  buttonLabel: string = 'Login';
  isSubmitted = false;
  // signUpService = inject(SignUpService);

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      username: [
        '',
        [
          Validators.required,
          UsernameValidators.isEmailOrPhone,
          UsernameValidators.cannotContainSpace,
        ],
      ],
      password: ['', Validators.required],
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    this.isSubmitted = true;
    // if (this.loginForm.invalid) return;
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); // Mark all controls as touched
      return;
    }

    alert(
      `username: ${this.username?.value} , \n password: ${this.password?.value}`
    );
  }
}
