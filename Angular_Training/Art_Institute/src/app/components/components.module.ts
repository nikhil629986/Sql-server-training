import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { DescriptionComponent } from './description/description.component';
import { CollectionComponent } from './collection/collection.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    DescriptionComponent,
    CollectionComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    
    RouterModule
  ],
  exports:[
    HeaderComponent,
    HomePageComponent,
    DescriptionComponent
  ]
})
export class ComponentsModule { }
