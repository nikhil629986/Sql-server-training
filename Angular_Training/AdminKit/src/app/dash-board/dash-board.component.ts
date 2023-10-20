import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {
cards=[
  {
    title:"Sales",
    logo:"truck",
    value:"2.382",
    percent:"-3.65%",
    lastweek:"Since Last week",
    theme:"danger"

  },
  {
    title:"Visitors",
    logo:"users",
    value:"14.212",
    percent:"5.25%",
    lastweek:"Since Last week",
    theme:"success"

  },
  {
    title:"Earnings",
    logo:"dollar-sign",
    value:"$21.300",
    percent:"6.65%",
    lastweek:"Since Last week",
    theme:"success"

  },
  {
    title:"Orders",
    logo:"shopping-cart",
    value:"64",
    percent:"-2.25%",
    lastweek:"Since Last week",
    theme:"danger"

  }

]
}
