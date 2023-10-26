import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { CardComponent } from './card/card.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { SignupComponent } from './signup/signup.component';
import { DashBoardContentComponent } from './dash-board-content/dash-board-content.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,

    CardComponent,
    DashBoardComponent,
    SignupComponent,
    DashBoardContentComponent,
   SignInComponent,
   UserComponent,
   ProductComponent,
   AddProductComponent,
   CartComponent,
   UserEditComponent,
   ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
