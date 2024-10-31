import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  loginFailed = false;

  form = new FormGroup({
    uname: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
      this.loginFailed = false;
      if (this.authService.login(this.form.value.uname || "", this.form.value.password || "")) {
         this.router.navigate(['/']);
      } else {
        this.loginFailed = true;
        console.error('Login failed');
        
      }
  }
}
