import { Component, OnInit } from '@angular/core';
interface Artwork {
  title: string;
  image_id: string | null;
  date_display: string;
  id: number;
  description: string;
}


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  collection: Artwork[] = [];
  
  constructor() {
    
  }
  ngOnInit() {
    const favData = JSON.parse(localStorage.getItem('favData') || '{}');
    
      let artworkData: Artwork;
      artworkData = favData;
      
      for (const [id, data] of Object.entries(artworkData)) {
        const artwork: Artwork = {
          id: Number(id),
          title: data.title,
          image_id: data.image_id,
          date_display: data.date_display,
          description: data.description,
        };

        this.collection.push(artwork);
        console.log(this.collection)
      }
    
  }

  removeItem(id: number) {
    const favData = JSON.parse(localStorage.getItem('favData') || '{}');
    delete favData[id];
    localStorage.setItem('favData', JSON.stringify(favData));
    window.location.reload();
  }

   clearLocalStorage() {
    localStorage.clear();
  }

  
}
