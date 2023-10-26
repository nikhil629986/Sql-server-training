import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PriceComponent } from './price/price.component';
import { BlogComponent } from './blog/blog.component';
import { CategoryComponent } from './category/category.component';
const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"pricing",
    component:PriceComponent
  },{
    path:"blog/:categoryId",
    component:CategoryComponent,
    children:[
      {
        path:"article/:blogId",
        component:BlogComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
