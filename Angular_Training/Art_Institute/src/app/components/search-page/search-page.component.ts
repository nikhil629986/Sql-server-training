import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Artwork {
  title: string;
  image_id: string | null;
  date_display: string;
  id: number;
  description: string | null;
}

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  artworks: Artwork[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      const searchQuery = params['query'];
      this.http.get(`https://api.artic.edu/api/v1/artworks/search?q=${searchQuery}`)
        .subscribe((data: any) => {
          const artworks = data.data;
          console.log(artworks)
          for (let i = 0; i < artworks.length; i++) {
            const artwork = artworks[i];
            this.http.get(`https://api.artic.edu/api/v1/artworks/${artwork.id}`)
              .subscribe((artworkData: any) => {

                const newArtwork: Artwork = {
                  title: artworkData.data.title,
                  image_id: artworkData.data.image_id,
                  date_display: artworkData.data.date_display,
                  id: artworkData.data.id,
                  description: artworkData.data.description
                };
                console.log(newArtwork)

                this.artworks.push(newArtwork);
              });
          }
        });
    });
  }
}