import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularHttpReq';
  allProducts:Product[]=[]
//injecting the HttpClient
  constructor(private http:HttpClient)
  {}
  ngOnInit()
  {
    this.fetchproducts()
  }

  onProductFetch(){
    this.fetchproducts()
  }
  onProductCreate(products:{pName: string,desc: string,price:string}) {

    console.log(products)
    const headers=new  HttpHeaders({'myHeader':'proacademy'})
    this.http.post<{name:string}>('https://angularhttp-7a19f-default-rtdb.firebaseio.com/products.json',products)
    .subscribe((res)=>{
      console.log(res); 
    })
  }
    private fetchproducts()
    {
      this.http.get<{[key:string]:Product}>('https://angularhttp-7a19f-default-rtdb.firebaseio.com/products.json')
      .pipe(map((res)=>
      {const product=[]
        for(const key in res)
        {  if(res.hasOwnProperty(key))
          {
            product.push({...res[key],id:key});
          }


          
        }
        return product;
      }))
      .subscribe((product)=>{
        console.log(product)
        this.allProducts=product
      })
    }
    
}


