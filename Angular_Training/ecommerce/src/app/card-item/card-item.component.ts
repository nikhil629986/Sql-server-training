import { Component,Input } from '@angular/core';

interface Product{
  
  ISBN: number,
  title: string,
  author: string,
  summary:string,
  image: string,
  price: number
}
@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
@Input () item:Product|undefined
}
