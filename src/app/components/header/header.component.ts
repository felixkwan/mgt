import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template:
  `
  <div class="header">
    <div class="navbar fadeInTop">
        <a class="brand-title" routerLink="">
          <h2>mgt.</h2>
        </a>
      <div class="nav-links">
        <ul class="nav list">
          <li><a routerLink="/themes">Themes</a></li>
          <li><a routerLink="/support" >Support</a></li>
          <li><a href="https://kwanfushing.tumblr.com">Blog</a></li>
        </ul>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
