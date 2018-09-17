import { Component, OnInit } from '@angular/core';
import *as M from 'D:/Shailtech/src/assets/materialize/js/materialize.min.js';
@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [
    {img: "../../assets/public/images/iOS-9-OSqqq.jpg",text:"Web Designing",par:"As a professional web design company we don’t believe in formulas but we do believe in discipline. As creative thinkers, we make sure our designs are fresh."},
    {img: "../../assets/public/images/webb.jpg",text:"Web Development",par:"Our web development services use only the latest technology when building websites, making sure your website is displayed correctly to all those who view it."},
    {img: "../../assets/public/images/web_seo_circle.png",text:"SEO",par:"SEO (Onpage &amp; Offpage) Optimisation makes your site more visible to search engines, which in turn makes it more easily reachable to impending customers."},
    {img: "../../assets/public/images/iOS-9-OS.jpgg",text:"IOS App",par:"We make iOS apps with perfection for both iPhone and iPad and swift language with design compatibility for all iOS devices, always complete our projects."},
    {img: "../../assets/public/images/iphone-51.jpg",text:"Android App",par:"We are using the latest technology for android development. We are not providing just product in deadline, we also providing the quality."},
  ];
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1};
  // addSlide() {
  //   this.slides.push({img: "http://placehold.it/350x150/777777"})
  // }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
  constructor() { }
   
   options={};
  
  ngOnInit() {
     var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, this.options);
  }

}
