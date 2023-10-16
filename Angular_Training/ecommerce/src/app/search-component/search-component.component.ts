import { Component ,OnInit,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent {


  enteredSearchValue: string="";
  @Output()
  searchTextChange:EventEmitter<string> = new EventEmitter<string>();


  onSearchTextChange(){
    this.enteredSearchValue=document.getElementsByTagName('input')[0].value;
    console.log(this.enteredSearchValue)
    this.searchTextChange.emit(this.enteredSearchValue)
  }
}
