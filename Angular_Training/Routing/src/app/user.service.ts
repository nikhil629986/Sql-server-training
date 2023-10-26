import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userList=[
  {
    id:1,
    name:'Person'
  },
  {
    id:2,
    name:'Person 2'
  }
]
  constructor() { }

  addUser(user:any){
    this.userList.push(user);
  }
}
