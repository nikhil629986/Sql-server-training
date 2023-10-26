import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

interface Blog{
id: Number;
title: string;
}
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  
  
  currentBlog:Blog|undefined;
  constructor(
    
    private activeRoute: ActivatedRoute,
    private blogservice:BlogService)
  {
    
    this.activeRoute.params.subscribe((params: any) => {

      let blogIndex=this.blogservice.blogs.findIndex((b)=>b.id==params.id);
      this.currentBlog = this.blogservice.blogs[blogIndex]
    })
  
  }

}
