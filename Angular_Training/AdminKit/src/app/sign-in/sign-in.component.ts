import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {


  signin = new FormGroup({
    email_id: new FormControl(''),
    password: new FormControl('')
  });
  
  signinuser() {
    const dataStr = localStorage.getItem('userData');
    console.log(dataStr);
    if (dataStr) {
      const data = JSON.parse(dataStr);
      let newUser = true;
      data.forEach((user:any) => {
        if (user.email_id === this.signin.value.email_id&&user.password === this.signin.value.password) {
          newUser = false;
        }
      });

      if(newUser)
      {
        Swal.fire(
          'Login Failed !',
          'Login Failed.',
          'warning',
        );
      }
      else{
         Swal.fire(
          'Login SuccessFull!',
          'Login SuccessFull.',
          'success'
        );
      }
    }
  }
}


