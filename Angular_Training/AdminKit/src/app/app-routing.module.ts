import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { DashBoardContentComponent } from './dash-board-content/dash-board-content.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {
    path: "",
    component: DashBoardContentComponent
  },

  {
    path: "register",
    component: SignupComponent,
  },
  {
    path:"login",
    component:SignInComponent
  },
  {
    path:"user/:id",
    component:UserComponent
  },
  {
    path:"product/:id",
    component:ProductComponent
  },
  {
   path:"addProduct",
   component:AddProductComponent
  },
  {
    path:"user-edit/:id",
    component:UserEditComponent
  },{
    path:"cart",
    component:CartComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
