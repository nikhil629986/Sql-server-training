import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  [x: string]: any;
blogs=[
  {
    id:1,
    title:"isarel War Update"
  },
  {
    id:2,
    title:"Important Political Update"
  }
  ,
  {
    id:3,
    title:"Isarel-Hamas-War"
  }
  ,
  {
    id:4,
    title:"Nsa Doval Offers Central Asia"
  }
  ,
  {
    id:5,
    title:"India to send Man to Moon by 2024"
  }
  ,
  {
    id:6,
    title:"National Film Award"
  }
  ,
  {
    id:7,
    title:"NetherLand Beat South Africa"
  }
]
  constructor() { }
}
