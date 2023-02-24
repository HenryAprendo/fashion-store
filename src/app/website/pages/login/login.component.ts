import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!:FormGroup;

  constructor(
    private fB:FormBuilder,
    private authService:AuthService,
    private router:Router
  ){
    this.buildForm();
  }

  private buildForm(){
    this.loginForm = this.fB.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.maxLength(15)]],
      remember: [false]
    })
  }

  login(){
    if(this.loginForm.valid){

      const username = this.usernameField?.value;
      const password = this.passwordField?.value;

      this.authService.login(username,password).subscribe({
        next: (response) => {
          if(response.token){
            this.router.navigate(['/home']);
          }
        },

        error: (err) => {
          console.log(err);
        }
      })
    }
    else {
      this.loginForm.markAllAsTouched();
    }
  }

  get usernameField(){
    return this.loginForm.get('username');
  }

  get emailIsValid(){
    return this.usernameField?.valid && this.usernameField.touched;
  }

  get emailIsInvalid(){
    return this.usernameField?.valid && this.usernameField.touched;
  }

  get passwordField(){
    return this.loginForm.get('password');
  }

  get passwordIsValid(){
    return this.passwordField?.valid && this.passwordField.touched;
  }

  get passwordIsInvalid(){
    return this.passwordField?.invalid && this.passwordField.touched;
  }

}







