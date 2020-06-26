import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Router, NavigationEnd } from '@angular/router';
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TimelineMax } from "gsap/all";
import { GoogleAnalyticsService } from './google-analytics.service';

declare let ScrollMagic: any;
declare let TweenMax: any;
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <div class="indexpage">
    <!-- header -->
    <app-header></app-header>

    <!-- routes -->
    <router-outlet #outlet="outlet" class="content"></router-outlet>
    <!-- contact -->
    <app-contact></app-contact>

    <!-- footer -->
    <app-footer></app-footer>
    </div>
  `,
  styles: ['']
})
export class AppComponent {
  
  title = 'mgt';

  constructor(
    private router: Router,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  public ngOnInit()
  {
    $(function() {
      const controller = new ScrollMagic.Controller();

      var tl = new TimelineMax();
      var active = TweenMax.to(".contact-wrap", '.65', {css:{className:'+=active'}, ease: Power2.easeOut}, '.1');

      tl.add(active, 0);

      var scene = new ScrollMagic.Scene({triggerElement: ".contact", offset: -100, reverse: false})
        .setTween(tl)
        .addTo(controller);
    })

    $(function () {const controller = new ScrollMagic.Controller();

    var timeline = new TimelineMax();
    var fadeInTop = TweenMax.to(".fadeInTop", '.85', {css:{className:'+=loaded'}, ease: Power2.easeOut}, '.25');

    timeline.add(fadeInTop, 0);

    var scene = new ScrollMagic.Scene({triggerElement: ".indexpage", offset: -100, reverse: true})
      .setTween(timeline)
      .addTo(controller);

    })

    // googleAnalytics tracking
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((params: any) => {
        this.googleAnalyticsService.sendPageView(params.url);
      });
  }

}
