import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users;
  loading = true;
  error: any;

  reviewSlideOptions = {
    margin: 16,
    loop: true,
    nav: false,
    center: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true
      },
      600: {
        items: 2,
        nav: false,
        dots: true
      },
      1000: {
        items: 2,
        nav: false,
        dots: true
      }
    }
  };

  premisesSlideOption = {
    center: true,
    items: 5,
    dots: true,
    nav: false,
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  };

  constructor(
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    
  }

  scrollToElement(element): void {
    element.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
  }

}
