import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DescriptionComponent } from './components/description/description.component';
import { CollectionComponent } from './components/collection/collection.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
const routes: Routes = [

  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"description/:id",
    component:DescriptionComponent
  },
  {
    path:"collections",
    component:CollectionComponent
  },
  {
    path:"searchResults/:query",
    component:SearchPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
