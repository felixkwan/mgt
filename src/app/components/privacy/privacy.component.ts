import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  template: `
    <section id="privacy" class="privacy">
      <div class="privacy-wrap">
        <h1 class="privacy-heading">Privacy Policy</h1>
        <ul class="privacy-body">
          <li class="privacy-body-item">
          <p>
          felixkwan built the mgt as an Open Source website. This SERVICE is provided by felixkwan at no cost and is intended for use as is. This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.
          </p>
          <p>
          If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
          </p>
          <p>
          The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at mgt unless otherwise defined in this Privacy Policy.
          </p>
          </li>

          <!-- Information -->
          <li class="privacy-body-item">
          <h3 class="privacy-sub-heading">Information Collection and Use</h3>
          <p>
          For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request will be retained on your device and is not collected by me in any way.
          </p>
          <p>
          The website does use third party services that may collect information used to identify you.
          </p>
          </li>

          <!-- Lod Data -->
          <li class="privacy-body-item">
          <h3 class="privacy-sub-heading">Log Data</h3>
          <p>
          I want to inform you that whenever you use my Service, in a case of an error in mgt I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of website when utilizing my Service, the time and date of your use of the Service, and other statistics.
          </p>
          </li>

          <!-- Cookies -->
          <li class="privacy-body-item">
          <h3 class="privacy-sub-heading">Cookies</h3>
          <p>
          Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
          </p>
          <p>
          This Service does not use these “cookies” explicitly. However, the website may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
          </p>
          </li>

          <!-- Service Providers -->
          <li class="privacy-body-item">
          <h3 class="privacy-sub-heading">Service Providers</h3>
          <p>
          I may employ third-party companies and individuals due to the following reasons:
          </p>
          <ol class="privacy-item-list">
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ol>
          <p>
          I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
          </p>
          </li>

          <!-- Security -->
          <li class="privacy-body-item">
          <h3 class="privacy-sub-heading">Security</h3>
          <p>
          I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.
          </p>
          </li>

          <!-- Links to Other Sites -->
          <li class="privacy-body-item">
          <h3 class="privacy-sub-heading">Links to Other Sites</h3>
          <p>
          This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
          </li>

          <!-- Children’s Privacy -->
          <li class="privacy-body-item">
          <h3 class="privacy-sub-heading">Children’s Privacy</h3>
          <p>
          These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.
          </p>
          </li>

          <!-- Changes to This Privacy Policy -->
          <li class="privacy-body-item">
          <h3 class="privacy-sub-heading">Changes to This Privacy Policy</h3>
          <p>
          I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
          </p>
          </li>

          <!-- Contact -->
          <li class="privacy-body-item">
          <h3 class="privacy-sub-heading">Contact</h3>
          <p>
          If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me.
          </p>
          <p>
          This privacy policy page was created at <a href="https://privacypolicytemplate.net/" class="is-link">privacypolicytemplate.net</a> and modified/generated by <a href="https://app-privacy-policy-generator.firebaseapp.com/" class="is-link">App Privacy Policy Generator</a>.
          </p>
          </li>

        </ul>
      </div>
    </section>
  `,
  styles: ['']
})
export class PrivacyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
