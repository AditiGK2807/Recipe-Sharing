import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { AuthServiceService } from '../../services/Auth/auth-service.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, MatRadioModule,
    ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  isRegister=false;

  constructor(public authService: AuthServiceService){}

 registerationForm=new FormGroup({
  fullName:new FormControl('', [Validators.required]),
  email:new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(6)])
 })


 loginForm=new FormGroup({
  email:new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required])
 })


 handleRegister(){
  console.log("register ", this.registerationForm.value);
  this.authService.register(this.registerationForm.value).subscribe({
    next:(response)=>{
      localStorage.setItem("jwt", response.jwt);
      this.authService.getUserProfile().subscribe();
      console.log("Signup success", response)
    }
  })
 }

 handleLogin(){
  console.log("Login ", this.loginForm.value);
  this.authService.login(this.loginForm.value).subscribe({
    next:(response)=>{
      localStorage.setItem("jwt", response.jwt);
      this.authService.getUserProfile().subscribe();
      console.log("Login success", response)
    }
  })
 }

 togglePannel(){
  this.isRegister=!this.isRegister
 }
}
