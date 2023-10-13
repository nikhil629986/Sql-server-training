import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic-pricing-table';
  CardContent=[
    {
      Type:"Free",
      Price:"$0",
      UserQuantity:"Single User",
      Storage:"5GB Storage",
      PublicProjects:"Unlimited Public Projects",
      Community:"Community Access",
      PrivateProjects:"Unlimited Private Projects",
      PhoneSupplier:"Dedicated Phone Support",
      Domains:"Free Subdomain",
      Status:"Monthly Status Report"
    },
    {
      Type:"Plus",
      Price:"$9",
      UserQuantity:"5 Users",
      Storage:"50GB Storage",
      PublicProjects:"Unlimited Public Projects",
      Community:"Community Access",
      PrivateProjects:"Unlimited Private Projects",
      PhoneSupplier:"Dedicated Phone Support",
      Domains:"Free Subdomain",
      Status:"Monthly Status Report"
    },
    {
      Type:"Pro",
      Price:"$49",
      UserQuantity:"Unlimited Users",
      Storage:"150GB Storage",
      PublicProjects:"Unlimited Public Projects",
      Community:"Community Access",
      PrivateProjects:"Unlimited Private Projects",
      PhoneSupplier:"Dedicated Phone Support",
      Domains:"Unlimited Free Subdomain",
      Status:"Monthly Status Report"
    }
  ];
}