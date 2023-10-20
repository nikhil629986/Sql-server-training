import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { CardComponent } from './card/card.component';
import { DashBoardComponent } from './dash-board/dash-board.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,

    CardComponent,
    DashBoardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
