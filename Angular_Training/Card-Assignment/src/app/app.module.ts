import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MessageComponent } from './message/message.component';
import { MessageChildComponent } from './message/message-child/message-child.component';
import { HeaderComponent } from './header/header.component';
import { DisplayPaneComponent } from './display-pane/display-pane.component';


@NgModule({
  declarations: [
    AppComponent,
   
    MessageComponent,
    MessageChildComponent,
    HeaderComponent,
    DisplayPaneComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
