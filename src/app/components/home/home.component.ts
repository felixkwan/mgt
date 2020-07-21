import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Flickity from 'flickity';
import Isotope from 'isotope-layout';
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TimelineMax } from "gsap/all";
declare let ScrollMagic: any;
declare let TweenMax: any;

@Component({
  selector: 'app-home',
  template: `
  <div class="wrapper">
    <div class="inner-wrapper">
      <section class="home is-info clearfix">
        <div class="home-body">
            <h2 class="heading fadeInLeft">Make Great</h2>
            <h2 class="heading fadeInLeft">Themes</h2>
            <div class="description">
              <p class="fadeInLeft">
              We’ve designed themes with brilliant grid layouts as well as traditional single-column styles. Enjoy using our themes on your blog.
              </p>
            </div>
            <div class="scroll-down fadeInBottom">
              <div class="scroll-down-line"></div>
              <a href="#themes" class="scroll-down-btn">Check out themes</a>
            </div>
        </div>
      </section>
    </div> <!-- /inner_wrapper -->
  </div> <!-- /wrapper -->

      <!-- slider -->
      <app-slider></app-slider>


      <section class="features is-info clearfix">
        <div class="feature-wrap">
        <h2 id="feature-heading" class="section-heading is-bold">Features</h2>

          <ul class="feature-list list grid ">
            <li class="grid-item feature-item">
              <div class="feature-child">
                <h3 class="feature-title">High Resolution Images</h3>
                <p class="feature-detail">
                  All themes are high resolution theme designed for high resolution images.
                </p>
              </div>
            </li>
            <li class="grid-item feature-item">
              <div class="feature-child">
                <h3 class="feature-title">Infinite Scroll</h3>
                <p class="feature-detail">
                  Automatically load new pages without ever clicking a button.
                </p>
              </div>
            </li>
            <li class="grid-item feature-item">
              <div class="feature-child">
                <h3 class="feature-title">Layout</h3>
                <p class="feature-detail">
                  Responsive layout. Designed with Tumblr in mind, Tumblr post notes and post tags.
                </p>
              </div>
            </li>
            <li class="grid-item feature-item">
              <div class="feature-child">
              <h3 class="feature-title">Social Links</h3>
              <p class="feature-detail">
                Link to your favourite profiles. Icons include: Facebook, Flickr, Google, Instagram and Twitter.
              </p>
              </div>
            </li>
            <li class="grid-item feature-item">
            <div class="feature-child">
              <h3 class="feature-title">Google Analytics</h3>
              <p class="feature-detail">
                Google Analytics compatible.
              </p>
              </div>
            </li>
            <li class="grid-item feature-item">
              <div class="feature-child">
                <h3 class="feature-title">Customizable</h3>
                <p class="feature-detail">
                  Fully customisable color palette with google fonts.
                </p>
              </div>
            </li>
          </ul>
          </div>
      </section>


  `,
  styles: ['']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    $(function() {
      const controller = new ScrollMagic.Controller();

      var header = new TimelineMax();
      var fadeInLeft = TweenMax.staggerTo(".fadeInLeft", '.65', {css:{className:'+=loaded'}, delay: 1, ease: Power2.easeOut}, '.1');
      var fadeInBottom = TweenMax.to(".fadeInBottom", '.65', {css:{className:'+=loaded'}, delay: 1.5, ease: Power2.easeOut}, '.1');

      header.add(fadeInLeft, 0).add(fadeInBottom, 0);

      var scene = new ScrollMagic.Scene({triggerElement: ".indexpage", offset: -100, reverse: true})
        .setTween(header)
        .addTo(controller);
    });

    $(function() {
        var features = document.querySelector('.grid');
        var iso = new Isotope( features, {
          // options
          itemSelector: '.grid-item',
          layoutMode: 'masonry'
        });

        const controller = new ScrollMagic.Controller();

        var timeline = new TimelineMax();
        var active = TweenMax.staggerTo(".feature-item", '.65', {css:{className:'+=active'}, ease: Power2.easeOut}, '.1');

        timeline.add(active, 0);

        var scene = new ScrollMagic.Scene({triggerElement: ".feature-wrap", offset: -100, reverse: true})
          .setTween(timeline)
          .addTo(controller);

    });

    $(function() {
      const controller = new ScrollMagic.Controller();


      var tl2 = new TimelineMax();
      var active = TweenMax.to(".themes-wrap", '.65', {css:{className:'+=active'}, ease: Power2.easeOut}, '.1');

      tl2.add(active, 0);

      var scene = new ScrollMagic.Scene({triggerElement: ".themes", offset: -100, reverse: true})
        .setTween(tl2)
        .addTo(controller);
    })
  }
}
