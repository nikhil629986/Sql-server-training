import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  data="code step by step"
  
  getName(name:string)
  {
    alert("function called"+ name);
  }
  getNumber()
  {
    alert("number called")
  }
  displayVal=''
  getData(val:any)
  {
    console.warn(val)
    this.displayVal=val
  }
}
