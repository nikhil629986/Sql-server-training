import {Input, Component } from '@angular/core';

interface CardDetail{
  title:string,
  logo:string,
  value:string,
  percent:string,
  lastweek:string,
  theme:string
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() cardData:CardDetail|undefined;
}
