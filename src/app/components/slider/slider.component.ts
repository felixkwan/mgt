import { Component, OnInit } from '@angular/core';
import Flickity from 'flickity';
import * as $ from 'jquery';
import * as imagesLoaded from 'imagesloaded';

@Component({
  selector: 'app-slider',
  template:
  `
    <section id="themes" class="themes is-info clearfix">
      <h2 class="section-heading is-bold fadeInLeft">Simple and Clear</h2>
      <h2 class="section-heading is-bold fadeInLeft">You would probably like.</h2>
      <div class="themes-wrap">
        <div class="main-carousel">

          <!-- Raginsk -->
          <div class="carousel-cell">
            <figure class="theme-preview">
              <img class="theme-thumb" src="assets/img/raginsk-1440.png">
            </figure>
            <div class="theme-caption">
              <h3 class="theme-title is-bold"><a href="https://raginsk.tumblr.com">Raginsk</a></h3>
              <p class="caption on-tumblr"><a href="https://www.tumblr.com/theme/41125">Available</a> on Tumblr</p>
            </div>
          </div>

          <!-- Forsa -->
          <div class="carousel-cell">
            <figure class="theme-preview">
              <img class="theme-thumb" src="assets/img/theme-thumb-forsa.jpg">
            </figure>
            <div class="theme-caption">
              <h3 class="theme-title is-bold"><a href="https://forsa-theme.tumblr.com">Forsa</a></h3>
              <p class="caption on-tumblr"><a href="https://www.tumblr.com/theme/40930">Available</a> on Tumblr</p>
            </div>
          </div>
          <!-- Mori -->
          <div class="carousel-cell">
            <figure class="theme-preview">
              <img class="theme-thumb" src="assets/img/theme-thumb-mori.jpg">
            </figure>
            <div class="theme-caption">
              <h3 class="theme-title is-bold"><a href="https://mori-theme.tumblr.com">Mori</a></h3>
              <p class="caption on-tumblr"><a href="https://www.tumblr.com/theme/40928">Available</a> on Tumblr</p>
            </div>
          </div>

          <!-- Arakinema -->
          <div class="carousel-cell">
            <figure class="theme-preview">
              <img class="theme-thumb" src="assets/img/theme-thumb-araki.jpg">
            </figure>
            <div class="theme-caption">
              <h3 class="theme-title is-bold"><a href="https://araki-theme.tumblr.com">Arakinema</a></h3>
              <p class="caption on-tumblr"><a href="https://www.tumblr.com/theme/40927">Available</a> on Tumblr</p>
            </div>
          </div>

          <!-- Midori -->
          <div class="carousel-cell">
            <figure class="theme-preview">
              <img class="theme-thumb" src="assets/img/theme-thumb-midori.jpg">
            </figure>
            <div class="theme-caption">
              <h3 class="theme-title is-bold"><a href="https://midori-theme.tumblr.com">Midori</a></h3>
              <p class="caption on-tumblr"><a href="https://www.tumblr.com/theme/40943">Available</a> on Tumblr</p>
            </div>
          </div>

          <!-- Kaze -->
          <div class="carousel-cell">
            <figure class="theme-preview">
              <img class="theme-thumb" src="assets/img/theme-thumb-kaze.jpg">
            </figure>
            <div class="theme-caption">
              <h3 class="theme-title is-bold"><a href="https://kaze-theme.tumblr.com">Kaze</a></h3>
              <p class="caption on-tumblr"><a href="https://www.tumblr.com/theme/40953">Available</a> on Tumblr</p>
            </div>
          </div>

          <!-- Hikari -->
          <div class="carousel-cell">
            <figure class="theme-preview">
              <img class="theme-thumb" src="assets/img/theme-thumb-hikari.jpg">
            </figure>
            <div class="theme-caption">
              <h3 class="theme-title is-bold"><a href="https://hikari-theme.tumblr.com">Hikari</a></h3>
              <p class="caption on-tumblr"><a href="https://www.tumblr.com/theme/40932">Available</a> on Tumblr</p>
            </div>
          </div>

          <!-- Ame -->
          <div class="carousel-cell">
            <figure class="theme-preview">
              <img class="theme-thumb" src="assets/img/theme-thumb-ame.jpg">
            </figure>
            <div class="theme-caption">
              <h3 class="theme-title is-bold"><a href="https://ame-theme.tumblr.com">Ame</a></h3>
              <p class="caption on-tumblr"><a href="https://www.tumblr.com/theme/40998">Available</a> on Tumblr</p>
            </div>
          </div>

          <!-- Hachiman -->
          <div class="carousel-cell">
            <figure class="theme-preview">
              <img class="theme-thumb" src="assets/img/hachi-1440.jpg">
            </figure>
            <div class="theme-caption">
              <h3 class="theme-title is-bold"><a href="https://hachi-theme.tumblr.com">Hachiman</a></h3>
              <p class="caption on-tumblr"><a href="https://www.tumblr.com/theme/41006">Available</a> on Tumblr</p>
            </div>
          </div>

          <!-- Kyuu -->
          <div class="carousel-cell">
            <figure class="theme-preview">
              <img class="theme-thumb" src="assets/img/theme-thumb-kyuu.jpg">
            </figure>
            <div class="theme-caption">
              <h3 class="theme-title is-bold"><a href="https://kyuu-theme.tumblr.com">Kyuu</a></h3>
              <p class="caption on-tumblr"><a href="https://www.tumblr.com/theme/41013">Available</a> on Tumblr</p>
            </div>
          </div>

          <!-- Sawano -->
          <div class="carousel-cell">
            <figure class="theme-preview">
              <img class="theme-thumb" src="assets/img/sawano-1440.png">
            </figure>
            <div class="theme-caption">
              <h3 class="theme-title is-bold"><a href="https://sawano-theme.tumblr.com">Sawano</a></h3>
              <p class="caption on-tumblr"><a href="https://www.tumblr.com/theme/41039">Available</a> on Tumblr</p>
            </div>
          </div>
        </div>
        <!-- /.main-carousel -->
      </div>
    </section>
  `,
  styles: []
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function() {
      var themes = document.querySelectorAll('.themes-wrap');

      imagesLoaded( themes, function() {
        var elem = document.querySelector('.main-carousel');
        var flkty = new Flickity( elem, {
          // options
          cellAlign: 'left',
          wrapAround: true,
          contain: true
        });
      });

      console.log('slider ready');
    });
  }
}

const slider= new SliderComponent();

// Angular calls this when necessary
slider.ngOnInit();
