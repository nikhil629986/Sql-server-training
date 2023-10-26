import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent {
  userData:Array<any>=[]
constructor(private userService: UserService){
this.userData=this.userService.userList
}
}
