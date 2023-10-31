import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { ArtworkListService } from '../../Service/ArtworkList.service';
import { FormBuilder, FormGroup } from '@angular/forms';
interface Artwork {
  title: string;
  image_id: string | null;
  date_display: string;
  id: number;
  description:string;

}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  artworks: Artwork[] = [];
  currentPage = 1;
  totalPages = 0;
  pageSize = 10;
  searchForm: FormGroup;
 constructor(private artworkListService: ArtworkListService,private fb: FormBuilder, private router: Router) {
  this.searchForm = this.fb.group({
    search: ''
  });
}
  ngOnInit() {
    this.fetchArtwork();
    this.searchForm = this.fb.group({
      search: ''
    });
  }

  private fetchArtwork() {
    this.artworkListService.fetchArtwork()
      .subscribe((res) => {
        this.artworks = res.data;
  console.log(this.artworks)
      });

    
  }
  onSubmit() {
    const searchQuery = this.searchForm.value.search;
    if (searchQuery) {
      this.router.navigate(['/searchResults', searchQuery]);
    }
  }
  
  addToCollection(data: any): void {
    {  
      this.artworkListService.addtoCollection(data);
      
    }

  }

  onPaginateChange(event: any) {
    this.currentPage = event.pageIndex + 1;
    this.fetchArtwork();
  }
  
}




