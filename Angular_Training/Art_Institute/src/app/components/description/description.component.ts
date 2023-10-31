import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from'@angular/common/http';
import { ArtworkListService } from 'src/app/Service/ArtworkList.service';

interface Artwork {
  title: string;
  image_id: string | null;
  date_display: string;
  id: number;
  description: string;
}

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {
  artwork: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient,private artworkListService: ArtworkListService  ) {
    this.route.params.subscribe((params) => {
      const artworkId = params['id'];

      this.http
        .get<any>(`https://api.artic.edu/api/v1/artworks/`.concat(artworkId as string))
        .subscribe((artwork) => {
          this.artwork.push(artwork);
          console.log(this.artwork[0]);
        });
    });
  }

  ngOnInit(): void {
    
  }

  addToCollection(data: any): void {
  {  
    this.artworkListService.addtoCollection(data);
    
  }
}
}