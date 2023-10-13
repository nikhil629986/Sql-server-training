import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() Type:String="";
@Input() Price:String="";
@Input() UserQuantity:String="";
@Input()Storage:String="";
@Input()PublicProjects:String="";
@Input()Community:String="";
@Input()PrivateProjects:String="";
@Input()PhoneSupplier:String="";
@Input()Domains:String="";
@Input()Status:String="";
}
