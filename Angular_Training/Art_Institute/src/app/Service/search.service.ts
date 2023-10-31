interface Artwork {
  title: string;
  image_id: string | null;
  date_display: string;
  id: number;
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  searchArtworks(query: string) {
    return this.http.get<{ data: Artwork[]; pagination: { total_pages: number } }>(
      `https://api.artic.edu/api/v1/artworks/search?q=${query}`
    );
  }
}