import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { ProductService } from '../product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  AddProductForm=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    price:new FormControl(),
    image:new FormControl()

  })

  constructor(private productService: ProductService) { }

  addProduct() {
    const newProduct = this.AddProductForm.value;
    this.productService.addProduct(newProduct);
    this.AddProductForm.reset();
    Swal.fire({
      icon: 'success',
      title: 'Product Added Successfully!',
      showConfirmButton: false,
      timer: 1500
    });
  }
}