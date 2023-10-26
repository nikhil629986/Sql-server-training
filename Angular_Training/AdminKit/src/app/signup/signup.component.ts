import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm = new FormGroup({
    username: new FormControl(''),
    email_id: new FormControl(''),
    password: new FormControl('')
  });

  signupUser() {
    let userData: any[] = [];
    const existingUserData = localStorage.getItem('userData');
    if (existingUserData) {
      userData = JSON.parse(existingUserData);
      let userExists = false;
      userData.forEach((user) => {
        if (user.email_id === this.signupForm.value.email_id) {
          userExists = true;
          return;
        }
      });
      if (userExists) {
        Swal.fire(
          'User already registered!',
          'User is already registered. Please sign in.',
          'warning'
        );
        return;
      }
    }
  
    const newUser = {
      id: userData.length + 1,
      username: this.signupForm.value.username,
      email_id: this.signupForm.value.email_id,
      password: this.signupForm.value.password
    };
    userData.push(newUser);
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log(userData);
  
    Swal.fire(
      'User registered!',
      'You have successfully registered as a new user.',
      'success'
    );
  }
}