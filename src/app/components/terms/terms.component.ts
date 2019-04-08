import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  template: `
    <section id="terms" class="terms">
      <div class="terms-wrap">
      <h1 class="terms-heading">Terms & Conditions</h1>
      <ul class="terms-body">
        <li class="terms-body-item">
        <p>
        By visiting this website, these terms will automatically apply to you – you should make sure therefore that you read them carefully before visit mgt. You’re not allowed to copy, or modify the elements, any part of the elements, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the website, and you also shouldn’t try to translate the website into other languages, or make derivative versions. The website itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to felixkwan.
        </p>
        <p>
        felixkwan is committed to ensuring that the website is as useful and efficient as possible. For that reason, we reserve the right to make changes to the website or to charge for its services, at any time and for any reason. We will never charge you for the website or its services without making it very clear to you exactly what you’re paying for.
        </p>
        <p>
        The mgt stores and processes personal data that you have provided to us, in order to provide my Service. It’s your responsibility to keep your phone and access to the website secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the mgt won’t work properly or at all.
        </p>
        <p>
        Along the same lines, felixkwan cannot always take responsibility for the way you use the themes. With respect to felixkwan’s responsibility for your use of the themes, when you’re using mgt themes, it’s important to bear in mind that although we endeavour to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. felixkwan accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the themes.
        </p>
        </li>

        <!-- Changes to This Terms and Conditions -->
        <li class="terms-body-item">
        <h3 class="terms-sub-heading">Changes to This Terms and Conditions</h3>
        <p>
        I may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Terms and Conditions on this page. These changes are effective immediately after they are posted on this page.
        </p>
        </li>
      </ul> <!-- /.terms-body -->
      </div>
    </section>
  `,
  styles: ['']
})
export class TermsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
