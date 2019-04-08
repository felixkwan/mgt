import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

@Component({
  selector: 'app-support',
  template: `
    <section id="support" class="support is-info ">
      <div class="support-wrap">
        <h1 class="support-heading">Support</h1>
        <ul class="support-content">
          <li id="announce" class="support-1 support-content-item">
            <div class="item_inner">
            <h3 class="support-title">Announcement</h3>
            <p>
            Thank you for using themes by mgt. This website is non commercial and going to update irregularly. It’s fun developing themes for Tumblr and visiting many of your Tumblr blogs.
            </p>
            <blockquote>
            <p>Support articles are no longer updated. Sorry for that.</p>
            </blockquote>
            </div>
          </li>

          <li id="install" class="support-2 support-content-item">
          <div class="item_inner">
            <h3 class="support-title">Install</h3>
            <p>Get mgt themes in seconds</p>
            <ul class="support-list">
              <li class="support-list-item"><p>Click on the “Get this theme”.</p></li>
              <li class="support-list-img"><img src="assets/img/support/support-install-s1.png"></li>
              <li class="support-list-item"><p>Click on the “Install”.</p></li>
              <li class="support-list-img"><img src="assets/img/support/support-install-s2.png"></li>
              <li class="support-list-item"><p>Select your blog and install. Done.</p></li>
            </ul>
            </div>
          </li>

          <li id="customize" class="support-3 support-content-item">
          <div class="item_inner">
            <h3 class="support-title">Customizing</h3>
            <p>Learn how to make your own one.</p>
              <ul class="support-list">
                <li class="support-list-item">
                <h4 class="support-sub-heading">Reset your theme</h4>
                <p>Click Edit Theme and pen the customize panel.</p>
                <img src="assets/img/support/edit-theme-pg.png">
                <p>Delete all HTML.</p>
                <img src="assets/img/support/del-html.png">
                <p>Click Save.</p>
                </li>
                <li class="support-list-item">
                <h4 class="support-sub-heading">Customizing your theme</h4>
                <p>Using the customize panel.</p>
                <img src="assets/img/support/customize-panel.png">
                </li>
                <li class="support-list-item">
                <h4 class="support-sub-heading">Custom CSS</h4>
                <p>Scroll down to the bottom of the customize panel and Click advanced options. Add your own CSS in advanced options.</p>
                <img src="assets/img/support/adv-option.png">
                <img src="assets/img/support/custom-css.png">
                </li>

              </ul>
              </div>
          </li>

          <li id="tumblr_basic" class="support-4 support-content-item">
          <div class="item_inner">
            <h3 class="support-title">Tumblr basics</h3>
            <p>Some tumblr skills here:</p>
              <ul class="support-list">

                <li class="support-list-item">
                <h4 class="support-sub-heading">Add Pages</h4>
                <p>Click Edit Theme and pen the customize panel.</p>
                <img src="assets/img/support/add-pg.png">
                <blockquote>
                <h4 class="bkq-list-heading first-bkq-heading">Standard layout</h4><p>Create pages with custom text and images with the theme’s design.</p>
                <h4 class="bkq-list-heading">Custom layout</h4><p>Add custom webpages using HTML and CSS without theme's design.</p>
                <h4 class="bkq-list-heading">Redirect</h4><p>Sends visitors to other sites.</p>
                </blockquote>
                </li>

                <li class="support-list-item">
                <h4 class="support-sub-heading">Use Default Mobile Theme</h4>
                <p>Select Advanced options.</p>
                <img src="assets/img/support/adv-option.png">
                <p>Turn on "Use Default Mobile Theme".</p>
                <img src="assets/img/support/mobile-theme.png">
                </li>

                <li class="support-list-item">
                <h4 class="support-sub-heading">Add Read Breaks</h4>
                <p>Click "..." button.</p>
                <img src="assets/img/support/add-read-break.png">
                <img src="assets/img/support/read-break.png">
                <p>Click read break and then remove the unwanted breaks.</p>
                <img src="assets/img/support/remove-read-break.png">
                </li>

                <li class="support-list-item">
                  <a href="https://tumblr.zendesk.com/hc/en-us" class="is-link">Visit Tumblr Help Center.</a>
                </li>
              </ul>
              </div>
          </li>

        </ul>
      </div>
    </section>
  `,
  styles: [],
})
export class SupportComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    $(function() {

      var grid = document.querySelectorAll('.support-content');
      imagesLoaded( grid, function() {
        var iso = new Isotope( '.support-content' , {
          // options
          itemSelector: '.support-content-item',
          layoutMode: 'vertical'
        });
      });
      console.log('iso');
    });
  }

}
