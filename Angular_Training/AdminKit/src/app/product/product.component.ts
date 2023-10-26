import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';

interface product{
  id: string,
  name:string,
  price:string,
  image:string
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 productData:Array<any>=[]
  constructor(private productService: ProductService,private cartService: CartService)
  {
   this.productData=this.productService.productList
  }
  addToCart(product:product)
  {  
    this.cartService.addToCart(product)
    Swal.fire(
      'Product Added SuccessFully!',
      'Product Added SuccessFully.',
      'success'
    );
  }
}
