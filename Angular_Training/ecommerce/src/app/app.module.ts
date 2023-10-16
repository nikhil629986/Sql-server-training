import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardItemComponent } from './card-item/card-item.component';
import { SearchComponentComponent } from './search-component/search-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardItemComponent,
    SearchComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
