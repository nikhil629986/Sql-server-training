import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
productList=[
  {
    id:"1",
    name:"Burger",
    price:"$20",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjAJi-uyehakASBCR_wrY4aEkpqI3T5i4ApPxER6Vt&s"
  },
  {
    id:"2",
    name:"IceCream",
    price:"$40",
    image:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/ice-cream-cone-splash.jpg"
  },
  {
    id:"3",
    name:"Meal",
    price:"$50",
    image:"https://imgmedia.lbb.in/media/2021/04/607f9a072d39a822971fc2f3_1618975239547.jpg"

  },
  {
    id:"4",
    name:"chicken",
    price:"$50",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WcgGWLYXzyCf-gzIQI-Hf7ndsdgrcm_TtQ&usqp=CAU",

  }
]
  constructor() { }

  addProduct(product:any){
    this.productList.push(product)
  }
}
