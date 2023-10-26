import { Component } from '@angular/core';
import { CartService } from '../cart.service';
interface cart{
  id: string,
  name:string,
  price:string,
  image:string
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
   cartData:Array<any> = [];
   constructor(private cartService: CartService){
    this.cartData=this.cartService.cartData
   }

   DeleteFromCart(cart:cart){
    this.cartService.deletefromcart(cart)
   }
}
