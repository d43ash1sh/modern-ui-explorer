import Footer from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-sm sm:prose max-w-none">
            <p className="lead">
              Last updated: June 1, 2025
            </p>

            <h2>1. Introduction</h2>
            <p>
              UI Explorer ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, including any other media form, media channel, mobile website, or mobile application related or connected to it (collectively, the "Site").
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect via the Site includes:
            </p>
            <h3>Personal Data</h3>
            <p>
              Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.
            </p>
            <h3>Derivative Data</h3>
            <p>
              Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.
            </p>

            <h2>3. Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul>
              <li>Create and manage your account.</li>
              <li>Email you regarding your account or order.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              <li>Notify you of updates to the Site.</li>
              <li>Offer new products, services, mobile applications, and/or recommendations to you.</li>
              <li>Perform other business activities as needed.</li>
              <li>Request feedback and contact you about your use of the Site.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
              <li>Respond to product and customer service requests.</li>
              <li>Send you a newsletter.</li>
            </ul>

            <h2>4. Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <h3>By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
            </p>

            <h2>5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p>
              UI Explorer<br />
              123 Component Street<br />
              Design City, DC 10001<br />
              privacy@ui-explorer.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}