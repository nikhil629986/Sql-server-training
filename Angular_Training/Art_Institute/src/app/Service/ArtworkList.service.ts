interface Artwork {
  title: string;
  image_id: string | null;
  date_display: string;
  id: number;
  description:string;
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ArtworkListService {
  constructor(private http: HttpClient) {}

  fetchArtwork(query?:any) {
    console.log(query)
    console.log(query==null)
    let url =query!=null 
      ?  `https://api.artic.edu/api/v1/artworks/search?q=`+query
      : `https://api.artic.edu/api/v1/artworks?page=1&limit=100`;
    return this.http.get<{data: Artwork[];pagination: { total_pages: number };
    }>(url);
  }


  addtoCollection(data: Artwork)
  {  
    const favData = JSON.parse(localStorage.getItem('favData') || '{}');
     console.log(typeof(favData));
    if (favData[data.id]) {
      alert(`${data.title} already in favourites!`);
    } else {
   
      favData[data.id] = data;
      localStorage.setItem('favData', JSON.stringify(favData));
      let item=localStorage.getItem('favData')
      console.log(item)
      alert(`${data.title} added to favourites!`);
    }



    
}
}
