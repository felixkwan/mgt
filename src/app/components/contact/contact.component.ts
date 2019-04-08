import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-contact',
  template: `
  <section class="contact clearfix">
      <div class="contact-wrap">
        <h2 class="section-heading is-bold">Report bugs and issues</h2>
        <div class="description">
          <p class="label">To report bugs and issues please send an email to me.</p>
        </div>

        <!-- form goes here -->
          <form (ngSubmit)="processForm()">
            <!-- name -->
            <div class="field">
            <input
              type="text"
              name="name"
              class="input"
              placeholder="Your Name"
              [(ngModel)]="name"
              required
              minlength="3"
              #nameInput="ngModel">

              <div class="help is-error" *ngIf="nameInput.invalid && nameInput.dirty">
                Name is required and needs to be at least 3 characters long.
              </div>

            </div>

            <!-- email -->
            <div class="field">
            <input
              type="email"
              name="email"
              class="input"
              placeholder="Your Email"
              [(ngModel)]="email"
              required
              email
              #emailInput="ngModel">

              <div class="help is-error" *ngIf="emailInput.invalid && emailInput.dirty">
                Needs to be a valid email.
              </div>
            </div>

            <!-- message -->
            <div class="field">
              <textarea
              class="textarea"
              name="message"
              placeholder="Message here"
              [(ngModel)]="message"
              required
              #messageInput="ngModel">
              </textarea>

              <div class="help is-error" *ngIf="messageInput.invalid && messageInput.dirty">
                Your message is required!
              </div>
            </div>

            <button type="submit" class="button is-normal">Submit</button>

          </form>

          <span class="label label-light">Or you just want a fast way to have support in using mgt themes.</span>
          <a routerLink="support" class="is-link">Get Support here</a>


      </div>
  </section>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */

   processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo);
  }

}
