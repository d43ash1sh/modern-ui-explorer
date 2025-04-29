import Footer from "@/components/layout/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-sm sm:prose max-w-none">
            <p className="lead">
              Last updated: June 1, 2025
            </p>

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using UI Explorer (the "Site"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this Site.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on UI Explorer's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on UI Explorer's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by UI Explorer at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
            </p>

            <h2>3. Disclaimer</h2>
            <p>
              The materials on UI Explorer's website are provided on an 'as is' basis. UI Explorer makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p>
              Further, UI Explorer does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall UI Explorer or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on UI Explorer's website, even if UI Explorer or a UI Explorer authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on UI Explorer's website could include technical, typographical, or photographic errors. UI Explorer does not warrant that any of the materials on its website are accurate, complete or current. UI Explorer may make changes to the materials contained on its website at any time without notice. However, UI Explorer does not make any commitment to update the materials.
            </p>

            <h2>6. Links</h2>
            <p>
              UI Explorer has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by UI Explorer of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2>7. Modifications</h2>
            <p>
              UI Explorer may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              UI Explorer<br />
              123 Component Street<br />
              Design City, DC 10001<br />
              terms@ui-explorer.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}