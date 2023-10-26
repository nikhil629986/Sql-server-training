import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userData: any;
  
  constructor()
  {
    const userDataStr = localStorage.getItem('userData');
    this.userData = userDataStr ? JSON.parse(userDataStr) : null;
    console.log(this.userData);
  }

  deleteUser(user: any) {
    const index = this.userData.indexOf(user);
    if (index > -1) {
      this.userData.splice(index, 1); 
      localStorage.setItem('userData', JSON.stringify(this.userData));
    }
  }

  // editUser(user: any) {
  //   // navigate to an edit page for the selected user, passing the userId as a route parameter
  //   this.Router.navigate(['/user-edit', user.id]);
  // }
}
