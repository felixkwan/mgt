import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import featherlight from 'featherlight';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TimelineMax } from "gsap/all";
declare let ScrollMagic: any;
declare let TweenMax: any;


@Component({
  selector: 'app-themes',
  template: `
      <section class="themes themespage clearfix">
        <section class="theme-wrap">
        <div class="grid">

        <article class="grid-item theme">

          <figure class="theme-preview">
            <a href="#" class="featherlight-image" data-featherlight="#forsa">
            <img class="theme-thumb" src="assets/img/theme-thumb-forsa.jpg" alt="">
            </a>
            <div id="forsa" class="light-box">
              <img class="theme-image" src="assets/img/forsa/scr-1.png" alt="">
              <img class="theme-image" src="assets/img/forsa/scr-2.png" alt="">
              <img class="theme-image" src="assets/img/forsa/scr-3.png" alt="">
              <h2 class="theme-title is-bold"><a href="https://forsa-theme.tumblr.com">Forsa</a></h2>
              <p class="feature-detail">
                Designed as vintage blogging style with normal pageination.
              </p>
            </div>
          </figure>

          <div class="theme-caption">
            <h2 class="theme-title is-bold"><a href="https://forsa-theme.tumblr.com">Forsa</a></h2>
          </div>
        </article>

        <article class="grid-item theme">

          <figure class="theme-preview">
            <a href="#" class="featherlight-image" data-featherlight="#mori">
            <img class="theme-thumb" src="assets/img/theme-thumb-mori.jpg" alt="">
            </a>
            <div id="mori" class="light-box">
              <img class="theme-image" src="assets/img/mori/scr-1.png" alt="">
              <img class="theme-image" src="assets/img/mori/scr-2.png" alt="">
              <img class="theme-image" src="assets/img/mori/scr-3.png" alt="">
              <h2 class="theme-title is-bold"><a href="https://mori-theme.tumblr.com">Mori</a></h2>
              <p class="feature-detail">
                Showcase wall for every content on Tumblr.
              </p>
            </div>
          </figure>

          <div class="theme-caption">
            <h2 class="theme-title is-bold"><a href="https://mori-theme.tumblr.com">Mori</a></h2>
          </div>
        </article>

        <article class="grid-item theme">

          <figure class="theme-preview">
          <a href="#" class="featherlight-image" data-featherlight="#araki">
            <img class="theme-thumb" src="assets/img/theme-thumb-araki.jpg" alt="">
          </a>
          <div id="araki" class="light-box">
            <img class="theme-image" src="assets/img/araki/scr-1.png" alt="">
            <img class="theme-image" src="assets/img/araki/scr-2.png" alt="">
            <img class="theme-image" src="assets/img/araki/scr-3.png" alt="">
            <h2 class="theme-title is-bold"><a href="https://araki-theme.tumblr.com">Arakinema</a></h2>
            <p class="feature-detail">
              Single column display with infinite scroll.
            </p>
          </div>
          </figure>

          <div class="theme-caption">
            <h2 class="theme-title is-bold"><a href="https://araki-theme.tumblr.com">Arakinema</a></h2>
          </div>
        </article>

        <article class="grid-item theme">

          <figure class="theme-preview">
          <a href="#" class="featherlight-image" data-featherlight="#hikari">
            <img class="theme-thumb" src="assets/img/theme-thumb-hikari.jpg" alt="">
          </a>
          <div id="hikari" class="light-box">
            <img class="theme-image" src="assets/img/hikari/scr-1.png" alt="">
            <img class="theme-image" src="assets/img/hikari/scr-2.png" alt="">
            <img class="theme-image" src="assets/img/hikari/scr-3.png" alt="">
            <h2 class="theme-title is-bold"><a href="https://hikari-theme.tumblr.com">Hikari</a></h2>
            <p class="feature-detail">
              Side menu bar with two columns content and infinite scroll.
            </p>
          </div>
          </figure>

          <div class="theme-caption">
            <h2 class="theme-title is-bold"><a href="https://hikari-theme.tumblr.com">Hikari</a></h2>
          </div>
        </article>

        <article class="grid-item theme">

          <figure class="theme-preview">
          <a href="#" class="featherlight-image" data-featherlight="#kaze">
            <img class="theme-thumb" src="assets/img/theme-thumb-kaze.jpg" alt="">
          </a>
          <div id="kaze" class="light-box">
            <img class="theme-image" src="assets/img/kaze/scr-1.png" alt="">
            <img class="theme-image" src="assets/img/kaze/scr-2.png" alt="">
            <img class="theme-image" src="assets/img/kaze/scr-3.png" alt="">
            <h2 class="theme-title is-bold"><a href="https://kaze-theme.tumblr.com">Kaze</a></h2>
            <p class="feature-detail">
              Very clean and elegant display for daily blog.
            </p>
          </div>
          </figure>

          <div class="theme-caption">
            <h2 class="theme-title is-bold"><a href="https://kaze-theme.tumblr.com">Kaze</a></h2>
          </div>
        </article>

        <article class="grid-item theme">

          <figure class="theme-preview">
          <a href="#" class="featherlight-image" data-featherlight="#midori">
            <img class="theme-thumb" src="assets/img/theme-thumb-midori.jpg" alt="">
          </a>
          <div id="midori" class="light-box">
            <img class="theme-image" src="assets/img/midori/scr-1.png" alt="">
            <img class="theme-image" src="assets/img/midori/scr-2.png" alt="">
            <img class="theme-image" src="assets/img/midori/scr-3.png" alt="">
            <h2 class="theme-title is-bold"><a href="https://midori-theme.tumblr.com">Midori</a></h2>
            <p class="feature-detail">
              Designed for photo showcase and highly customisable.
            </p>
          </div>
          </figure>

          <div class="theme-caption">
            <h2 class="theme-title is-bold"><a href="https://midori-theme.tumblr.com">Midori</a></h2>
          </div>
        </article>

        <article class="grid-item theme">

          <figure class="theme-preview">
          <a href="#" class="featherlight-image" data-featherlight="#ame">
            <img class="theme-thumb" src="assets/img/theme-thumb-ame.jpg" alt="">
            </a>
            <div id="ame" class="light-box">
              <img class="theme-image" src="assets/img/ame/scr-1.png" alt="">
              <img class="theme-image" src="assets/img/ame/scr-2.png" alt="">
              <img class="theme-image" src="assets/img/ame/scr-3.png" alt="">
              <h2 class="theme-title is-bold"><a href="https://ame-theme.tumblr.com">Ame</a></h2>
              <p class="feature-detail">
                Minimal design with the horizontally infinite scroll.
              </p>
            </div>
          </figure>

          <div class="theme-caption">
            <h2 class="theme-title is-bold"><a href="https://ame-theme.tumblr.com">Ame</a></h2>
          </div>
        </article>

        <article class="grid-item theme">

          <figure class="theme-preview">
          <a href="#" class="featherlight-image" data-featherlight="#kyuu">
            <img class="theme-thumb" src="assets/img/theme-thumb-kyuu.jpg" alt="">
            </a>
            <div id="kyuu" class="light-box">
              <img class="theme-image" src="assets/img/kyuu/scr-1.png" alt="">
              <img class="theme-image" src="assets/img/kyuu/scr-2.png" alt="">
              <img class="theme-image" src="assets/img/kyuu/scr-3.png" alt="">
              <h2 class="theme-title is-bold"><a href="https://kyuu-theme.tumblr.com">Kyuu</a></h2>
              <p class="feature-detail">
                Perfectly responsive on every devices.
               </p>
            </div>
          </figure>

          <div class="theme-caption">
            <h2 class="theme-title is-bold"><a href="https://kyuu-theme.tumblr.com">Kyuu</a></h2>
          </div>
        </article>

        <article class="grid-item theme">

          <figure class="theme-preview">
          <a href="#" class="featherlight-image" data-featherlight="#hachi">
            <img class="theme-thumb" src="assets/img/theme-thumb-hachi.jpg" alt="">
            </a>
            <div id="hachi" class="light-box">
              <img class="theme-image" src="assets/img/hachi/scr-1.png" alt="">
              <img class="theme-image" src="assets/img/hachi/scr-2.png" alt="">
              <img class="theme-image" src="assets/img/hachi/scr-3.png" alt="">
              <h2 class="theme-title is-bold"><a href="https://hachi-theme.tumblr.com">Hachiman</a></h2>
              <p class="feature-detail">
                Supporting high resolution images on your header.
               </p>
            </div>
          </figure>

          <div class="theme-caption">
            <h2 class="theme-title is-bold"><a href="https://hachi-theme.tumblr.com">Hachiman</a></h2>
          </div>
        </article>

        <article class="grid-item theme">

          <figure class="theme-preview">
          <a href="#" class="featherlight-image" data-featherlight="#sawano">
            <img class="theme-thumb" src="assets/img/sawano-1440.png" alt="">
            </a>
            <div id="sawano" class="light-box">
              <img class="theme-image" src="assets/img/sawano/scr-1.png" alt="">
              <img class="theme-image" src="assets/img/sawano/scr-2.png" alt="">
              <img class="theme-image" src="assets/img/sawano/scr-3.png" alt="">
              <h2 class="theme-title is-bold"><a href="https://sawano-theme.tumblr.com">Sawano</a></h2>
              <p class="feature-detail">
                Clean and responsive layout 
               </p>
            </div>
          </figure>

          <div class="theme-caption">
            <h2 class="theme-title is-bold"><a href="https://sawano-theme.tumblr.com">Sawano</a></h2>
          </div>
        </article>

        <article class="grid-item theme">

          <figure class="theme-preview">
          <a href="#" class="featherlight-image" data-featherlight="#raginsk">
            <img class="theme-thumb" src="assets/img/raginsk-1440.png" alt="">
            </a>
            <div id="raginsk" class="light-box">
              <img class="theme-image" src="assets/img/sawano/scr-1.png" alt="">
              <img class="theme-image" src="assets/img/sawano/scr-2.png" alt="">
              <img class="theme-image" src="assets/img/sawano/scr-3.png" alt="">
              <img class="theme-image" src="assets/img/sawano/scr-4.png" alt="">
              <h2 class="theme-title is-bold"><a href="https://raginsk.tumblr.com">Raginsk</a></h2>
              <p class="feature-detail">
                Excellent quality theme on every devices. Highly customisable for your-own-style blog.
               </p>
            </div>
          </figure>

          <div class="theme-caption">
            <h2 class="theme-title is-bold"><a href="https://raginsk.tumblr.com">Raginsk</a></h2>
          </div>
        </article>
        

        </div>
        </section>
      </section>
  `,
  styles: []
})
export class ThemesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function() {

      var grid = document.querySelectorAll('.grid');
      imagesLoaded( grid, function() {

        var iso = new Isotope( '.grid' , {
          // options
          itemSelector: '.grid-item',
          layoutMode: 'masonry'
        });
        const controller = new ScrollMagic.Controller();

        var timeline = new TimelineMax();
        var active = TweenMax.staggerTo(".theme", '.65', {css:{className:'+=active'}, ease: Power2.easeOut}, '.25');

        timeline.add(active, 0);

        var scene = new ScrollMagic.Scene({triggerElement: ".theme-wrap", offset: -100, reverse: true})
          .setTween(timeline)
          .addTo(controller);
        });
      });

  }

}

const instance = new ThemesComponent();
// Angular calls this when necessary
instance.ngOnInit();
