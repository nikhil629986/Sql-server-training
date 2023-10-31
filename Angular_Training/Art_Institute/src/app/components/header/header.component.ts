import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArtworkListService } from 'src/app/Service/ArtworkList.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
searchForm = new FormGroup({
  search:new FormControl('')
})

constructor(private ArtworkService:ArtworkListService){}

onSubmit()
{
  this.ArtworkService.fetchArtwork(this.searchForm.value.search)
  // console.log(this.searchForm.value.search)
}
}
