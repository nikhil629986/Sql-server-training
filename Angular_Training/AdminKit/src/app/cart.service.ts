import { Injectable } from '@angular/core';
interface product{
  id: string,
  name:string,
  price:string,
  image:string
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartData:Array<any>=[]
  constructor() { }
  addToCart(product:product){
     this.cartData.push(product);
     console.log(this.cartData)
  }

  deletefromcart(product: product): void {
    const indexToRemove = this.cartData.findIndex(
      (cartProduct) => cartProduct.id === product.id
    );
    if (indexToRemove !== -1) {
      this.cartData.splice(indexToRemove, 1);
    }
    console.log(this.cartData);
  }
}

