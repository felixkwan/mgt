import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:
  `
  <footer class="footer">
      <div class="footer-link">
        <ul class="links">
          <li><a href="https://www.facebook.com/felix.kwan.351"><i class="is-icon fb fab fa-facebook-square"></i></a></li>
          <li><a href="https://twitter.com/FelixKwan101"><i class="is-icon twitter fab fa-twitter"></i></a></li>
          <li><a href="https://www.dribbble.com/felixkwan"><i class="is-icon dribbble fab fa-dribbble"></i></a></li>
          <li><a routerLink="/privacy">Privacy Policy</a></li>
          <li><a routerLink="/terms">Terms & Conditions</a></li>
          <li class="copyright"><small>©mgt 2019. All rights reserved.</small></li>
        </ul>
    </div>
  </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
