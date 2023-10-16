import { Component,Input,Output,EventEmitter} from '@angular/core';

interface Product{
  
  ISBN: number,
  title: string,
  author: string,
  summary:string,
  image: string,
  price: number
    
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @ Input() product: Product|undefined;
  @Output() addProduct:EventEmitter<any> = new EventEmitter();

  addToCart(product:Product) {
    
    this.addProduct.emit(product);
  }
}
