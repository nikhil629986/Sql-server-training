import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carousel';
  images=[
    'https://th.bing.com/th/id/R.1bc60bd3666fc3431cd8b1d1ac6c3d0a?rik=J5Pjsy7Dhb0HKg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fc%2f7%2f2%2f52697.jpg&ehk=bSFndpRj8KLi1JoWtUOLDphHPT%2bKC3nAvyYQgMDgSeQ%3d&risl=&pid=ImgRaw&r=0',
   'https://th.bing.com/th/id/OIP.6ne0ETRLpjb1I2uWlUdY2wHaEo?pid=ImgDet&rs=1',
   'https://th.bing.com/th/id/R.aeced419dc05b697f7d987c71096871c?rik=2YhvdlEZllSIpg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fe%2f2%2f0%2f52558.jpg&ehk=s%2bZr67xJO8OOT76WJLCjv3s8h0tIrgBdsVIpYOlkIkE%3d&risl=&pid=ImgRaw&r=0',
   'https://th.bing.com/th/id/R.aeced419dc05b697f7d987c71096871c?rik=2YhvdlEZllSIpg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fe%2f2%2f0%2f52558.jpg&ehk=s%2bZr67xJO8OOT76WJLCjv3s8h0tIrgBdsVIpYOlkIkE%3d&risl=&pid=ImgRaw&r=0'
  ]
  src=this.images[0];
  

  changepicture(){
    this.src=this.images[Math.floor(Math.random()*4)]
  }
}

