import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate/translate.pipe';
import { AuthService } from '../../services/auth/auth.service';

// use translate pipe for all text
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.scss'],
  providers: [AuthService],
  imports: [TranslatePipe, NgIf, ReactiveFormsModule],
})
export class LoginComponent {
  loginForm: FormGroup;
  logInFormatError = false;
  logInCallError = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.logInFormatError = true;
      return;
    }
    this.logInFormatError = false;

    this.authService.login(this.loginForm.value).subscribe({
      next: (logInResponse) => {
        if (logInResponse && logInResponse.token) {
          // Successful login, navigate to '/'
          this.router.navigate(['/']);
        } else {
          // Handle invalid login response
          this.logInCallError = 'Invalid login response';
        }
      },
      error: (error) => {
        console.error('Error logging in:', error);
        this.logInCallError = 'Unknown error logging in';
      },
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
