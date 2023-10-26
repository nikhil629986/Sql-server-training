import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
interface UserData {
  id: string;
  username: string;
  email_id: string;
  password: string;
}
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  userId: string|undefined;
  EditForm = new FormGroup({
    username: new FormControl(''),
    email_id: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    
    });
   
  }
  

  saveUser() {
    const users = JSON.parse(localStorage.getItem('userData') || '[]');
    console.log(users[0]);
    const userIndex = users.findIndex((user: UserData) => user.id == this.userId);
    console.log(userIndex);
    if(userIndex !== -1)
    {
      users[userIndex].username=this.EditForm.value.username;
      users[userIndex].email_id = this.EditForm.value.email_id;
      users[userIndex].password = this.EditForm.value.password;
      localStorage.setItem('userData', JSON.stringify(users));
      console.log('User saved successfully');
  
    }
    else{
      console.log('User not found');
    }
  }
}