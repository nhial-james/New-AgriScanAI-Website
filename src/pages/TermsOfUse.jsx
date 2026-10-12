import '../Home.css';
import '../LegalPages.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfUse() {
  return (
    <>
      <Navbar />
      <div className="legal-hero">
        <span className="legal-eyebrow">AgriScanAI Master Terms</span>
        <h1 className="legal-hero-title">Terms of Use &amp; Community Guidelines</h1>
        <p className="legal-hero-subtitle">
          Operational Terms, AI Disclaimers, Marketplace Rules, and Platform Agreements
        </p>
        <div className="legal-meta-badges">
          <span className="legal-badge">Version 1.0</span>
          <span className="legal-badge">Operator: Good Partners Limited</span>
          <span className="legal-badge">Document Revision: 14 January 2026</span>
          <span className="legal-badge">Jurisdiction: Republic of Kenya</span>
        </div>
      </div>

      <main className="legal-body">
        <div className="legal-container">
          <p className="legal-intro">
            These Master Terms and Conditions (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you 
            and <strong>Good Partners Limited</strong> (&ldquo;AgriScanAI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), 
            governing your access to and use of the AgriScanAI mobile application, web portals, advisory models, marketplace, 
            and associated digital services.
          </p>

          {/* Quick Navigation */}
          <nav className="legal-toc" aria-label="Table of Contents">
            <p className="legal-toc-title">Table of Contents</p>
            <ul className="legal-toc-list">
              <li><a href="#acceptance" className="legal-toc-link">1. Acceptance of Terms</a></li>
              <li><a href="#service-description" className="legal-toc-link">2. Description of Service</a></li>
              <li><a href="#accounts-lifecycle" className="legal-toc-link">3. Accounts &amp; Approval Lifecycle</a></li>
              <li><a href="#regional-bounds" className="legal-toc-link">4. Regional Bounds</a></li>
              <li><a href="#user-conduct" className="legal-toc-link">5. User Conduct &amp; Prohibitions</a></li>
              <li><a href="#intellectual-property" className="legal-toc-link">6. Intellectual Property &amp; Data</a></li>
              <li><a href="#ai-disclaimers" className="legal-toc-link">7. AI Advisory &amp; Safety Disclaimers</a></li>
              <li><a href="#marketplace-guidelines" className="legal-toc-link">8. Marketplace Guidelines &amp; Moderation</a></li>
              <li><a href="#data-estimations" className="legal-toc-link">9. Data Estimations (Carbon &amp; Finance)</a></li>
              <li><a href="#billing-tiers" className="legal-toc-link">10. Subscriptions &amp; Product Tiers</a></li>
              <li><a href="#liability" className="legal-toc-link">11. Limitation of Liability</a></li>
              <li><a href="#termination" className="legal-toc-link">12. Termination &amp; Account Deletion</a></li>
              <li><a href="#governing-law" className="legal-toc-link">13. Governing Law &amp; Severability</a></li>
              <li><a href="#contact-info" className="legal-toc-link">14. Contact Information</a></li>
            </ul>
          </nav>

          {/* Section 1 */}
          <section className="legal-section" id="acceptance">
            <h2 className="legal-section-title">1. Acceptance of Terms &amp; Authentication Notice</h2>
            <p className="legal-text">
              By registering an account, continuing through sign-in, or using any feature of the AgriScanAI platform, 
              you accept and agree to be bound by these Terms and our incorporated Privacy Policy. If you do not agree to these terms, 
              you must immediately cease using the platform.
            </p>
            <div className="legal-prompt-box">
              <strong>Mandatory Authentication Notice:</strong> &ldquo;By continuing, you agree to our Terms and Conditions&rdquo;
            </div>
          </section>

          {/* Section 2 */}
          <section className="legal-section" id="service-description">
            <h2 className="legal-section-title">2. Description of Service</h2>
            <p className="legal-text">
              AgriScanAI provides a comprehensive agricultural technology ecosystem designed to build smallholder farmer resilience, 
              including:
            </p>
            <ul className="legal-list">
              <li><strong>Crop Disease Detection &amp; Analysis:</strong> AI-powered visual diagnosis of crop pests and pathogen symptoms.</li>
              <li><strong>Carbon Analytics &amp; Environmental Monitoring:</strong> Farm sustainability indicators and illustrative practice-based carbon tracking.</li>
              <li><strong>Farmer Data Management:</strong> Digital farmer profiling, crop histories, seasonal performance, and yield insights.</li>
              <li><strong>Financial Tracking &amp; Payment Systems:</strong> Farm income and expense bookkeeping with receipt attachment safeguards.</li>
              <li><strong>AI-Powered Advisory Assistance:</strong> Agronomic guidance and conversational advisory delivered through Mwanedu.</li>
              <li><strong>Produce Marketplace:</strong> Direct trade discovery connecting local farmers with commercial produce buyers.</li>
              <li><strong>Knowledge Base &amp; Educational Resources:</strong> Curated agronomic manuals and best-practice libraries.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="legal-section" id="accounts-lifecycle">
            <h2 className="legal-section-title">3. User Accounts &amp; Organizational Lifecycle</h2>
            <p className="legal-text">To access platform features, users must register an account. You agree to:</p>
            <ul className="legal-list">
              <li>Provide accurate, current, and complete registration details.</li>
              <li>Maintain and promptly update account records.</li>
              <li>Keep authentication credentials secure and confidential.</li>
              <li>Accept sole responsibility for all activity executed under your account.</li>
              <li>Notify us immediately of any unauthorized account access.</li>
            </ul>

            <h3 className="legal-subsection-title">3.1 Partner Organizational Approval Lifecycle</h3>
            <p className="legal-text">
              Where accounts are deployed in collaboration with partner agricultural programs, cooperatives, or NGOs:
            </p>
            <ul className="legal-list">
              <li><strong>Pending Approval:</strong> The partner organization reviews new accounts before access is granted.</li>
              <li><strong>Rejected Accounts:</strong> If an organization declines account approval, users may contact the organization directly or delete their account via Settings.</li>
              <li><strong>Transactional Notifications:</strong> Approval notices are dispatched via in-app banners, email, or WhatsApp utility templates.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="legal-section" id="regional-bounds">
            <h2 className="legal-section-title">4. Regional Bounds &amp; Registration Eligibility</h2>
            <p className="legal-text">
              AgriScanAI is currently bound to users and agricultural entities operating within the <strong>Republic of Kenya</strong>. 
              Accounts originating outside Kenya cannot complete registration until additional East African jurisdictions are officially deployed.
            </p>
          </section>

          {/* Section 5 */}
          <section className="legal-section" id="user-conduct">
            <h2 className="legal-section-title">5. User Conduct &amp; Prohibitions</h2>
            <p className="legal-text">You agree strictly not to:</p>
            <ul className="legal-list">
              <li>Use the Service for any unlawful or unauthorized purpose under applicable Kenyan or international law.</li>
              <li>Transmit malware, viruses, or harmful code.</li>
              <li>Decompile, reverse-engineer, or attempt to extract the underlying source code of our AI models and mobile applications.</li>
              <li>Use automated scrapers, bots, or crawlers to harvest platform listings, farmer profiles, or marketplace contacts.</li>
              <li>Impersonate any person, extension officer, agricultural expert, or buyer.</li>
              <li>Interfere with or disrupt the stability, security, or servers of the Service.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="legal-section" id="intellectual-property">
            <h2 className="legal-section-title">6. Intellectual Property &amp; User Data Ownership</h2>
            <p className="legal-text">
              All proprietary code, algorithms, trained AI models, branding, logos, graphics, and design assets are the exclusive 
              intellectual property of <strong>Good Partners Limited</strong> and are protected by applicable copyright, trademark, and trade secret legislation.
            </p>
            <p className="legal-text">
              <strong>Your Data:</strong> You retain ownership of farm records, yield logs, and media you submit. By uploading content, 
              you grant AgriScanAI a worldwide, royalty-free, non-exclusive license to process, store, and display that content solely 
              for providing, improving, and securing the platform.
            </p>
          </section>

          {/* Section 7 */}
          <section className="legal-section" id="ai-disclaimers">
            <h2 className="legal-section-title">7. AI Advisory &amp; Diagnostic Safety Disclaimers</h2>
            <div className="legal-callout legal-callout-warning">
              <p className="legal-callout-title">⚠️ Mandatory Diagnostic Disclaimer:</p>
              <p>
                <strong>&ldquo;This is an AI estimate, not a laboratory diagnosis. Confirm with an extension officer or agrovet before buying or applying any chemical.&rdquo;</strong>
              </p>
            </div>

            <h3 className="legal-subsection-title">7.1 Mwanedu Advisory Assistant Disclaimer</h3>
            <p className="legal-text">
              <strong>&ldquo;Mwanedu is an AI assistant and can be wrong. Check important advice with an extension officer before you act on it.&rdquo;</strong>
            </p>

            <h3 className="legal-subsection-title">7.2 Agronomic Scope Enforcement (English &amp; Kiswahili)</h3>
            <p className="legal-text">
              Our AI is strictly bound to agricultural domain contexts. Out-of-scope queries trigger automatic enforcement notices:
            </p>
            <div className="legal-prompt-box">
              <strong>English:</strong> &ldquo;I can only help with farming and agriculture - crops, livestock, soil, pests and diseases, weather for your farm, and selling your produce. Please ask me a farming question.&rdquo;<br /><br />
              <strong>Kiswahili:</strong> &ldquo;Ninaweza kusaidia tu kuhusu kilimo na ufugaji - mazao, mifugo, udongo, wadudu na magonjwa, hali ya hewa kwa shamba lako, na kuuza mazao yako. Tafadhali niulize swali la kilimo.&rdquo;
            </div>

            <h3 className="legal-subsection-title">7.3 AI Reporting Flow</h3>
            <p className="legal-text">
              Users can flag any model response under five categories: <em>Unsafe or harmful advice</em>, <em>Wrong diagnosis or answer</em>, 
              <em>Offensive or inappropriate</em>, <em>Not about farming</em>, or <em>Something else</em>. All submitted reports undergo human review 
              without deleting the user&apos;s records.
            </p>
          </section>

          {/* Section 8 */}
          <section className="legal-section" id="marketplace-guidelines">
            <h2 className="legal-section-title">8. Marketplace Community Guidelines &amp; Moderation</h2>
            <p className="legal-text">
              AgriScanAI connects farmers and produce buyers who have never met. These rules apply to every interaction across our marketplace:
            </p>

            <div className="legal-callout">
              <p className="legal-callout-title">🤝 What We Expect:</p>
              <ul className="legal-list" style={{ margin: '6px 0 0', paddingLeft: '1.25rem' }}>
                <li>Be honest about who you are, what you grow, and what you buy.</li>
                <li>Agree clearly on price, quantity, and delivery before anything changes hands.</li>
                <li>Keep conversations focused exclusively on the trade you are arranging.</li>
                <li>Treat the person on the other end with respect, even when you disagree.</li>
                <li>Share only what a trade needs. <strong>Never send an ID number, a PIN, or a password.</strong></li>
              </ul>
            </div>

            <div className="legal-callout legal-callout-danger">
              <p className="legal-callout-title">🚫 What Is Strictly Prohibited:</p>
              <ul className="legal-list" style={{ margin: '6px 0 0', paddingLeft: '1.25rem' }}>
                <li><strong>Spam:</strong> Repeated or unrelated messages, and advertising for external services.</li>
                <li><strong>Harassment:</strong> Threats, insults, or continued contact after someone has asked you to stop.</li>
                <li><strong>Fraud:</strong> False price offers, advance-fee requests, and payment manipulation.</li>
                <li><strong>Inappropriate Content:</strong> Sexual, violent, or hateful material of any kind.</li>
                <li><strong>Illegal Trade:</strong> Counterfeits, banned agro-chemicals, or contraband produce.</li>
              </ul>
            </div>

            <h3 className="legal-subsection-title">8.1 Reporting, Blocking &amp; Connection Safeguards</h3>
            <ul className="legal-list">
              <li><strong>Human Moderation SLA:</strong> Reported marketplace threads are reviewed by our safety team, normally within <strong>two working days</strong>.</li>
              <li><strong>Blocking Controls:</strong> Either party can block a conversation at any time. When blocked, neither user can send messages; existing logs remain preserved for review. The blocked user is not notified who initiated the block.</li>
              <li><strong>Connection Safeguard:</strong> Buyers cannot message a farmer until the farmer has explicitly reviewed and accepted their connection request.</li>
              <li><strong>Enforcement:</strong> Accounts that violate community standards will face immediate listing removal or platform suspension.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="legal-section" id="data-estimations">
            <h2 className="legal-section-title">9. Data Estimation &amp; Evidence Disclaimers</h2>
            <h3 className="legal-subsection-title">9.1 Sustainability &amp; Carbon Analytics Basis</h3>
            <p className="legal-text">
              Carbon figures displayed across our dashboard are <strong>estimated figures based on published illustrative carbon rates</strong> 
              for regenerative agricultural practices, not direct physical soil measurements of your specific farm. Rates are updated as regional standards evolve.
            </p>

            <h3 className="legal-subsection-title">9.2 Financial Bookkeeping Evidence Requirement</h3>
            <p className="legal-text">
              To preserve accounting integrity and prevent fraudulent records, financial expenditure and input entries require supporting verification: 
              <strong>&ldquo;Required: attach a receipt, payment screenshot or supporting photo.&rdquo;</strong>
            </p>
          </section>

          {/* Section 10 */}
          <section className="legal-section" id="billing-tiers">
            <h2 className="legal-section-title">10. Subscriptions, Billing &amp; Product Tiers</h2>
            <ul className="legal-list">
              <li><strong>Free Plan:</strong> Provides essential smallholder advisory, diagnostic scans, and core record tools.</li>
              <li><strong>Premium Plan:</strong> Unlocks unlimited crop disease scans, full Mwanedu advisory, expanded buyer discovery, and advanced analytics.</li>
              <li><strong>Google Play Billing:</strong> On Android devices, subscriptions are processed securely via Google Play. You can manage or cancel auto-renewals anytime under <em>Play Store &rarr; Payments &amp; subscriptions</em>.</li>
              <li><strong>Non-Refundable:</strong> Subscription fees are non-refundable once billed, except where mandated by applicable consumer protection laws.</li>
              <li><strong>Quota Cycles:</strong> Feature quotas reset automatically at the end of each billing cycle.</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section className="legal-section" id="liability">
            <h2 className="legal-section-title">11. Limitation of Liability</h2>
            <p className="legal-text">
              To the maximum extent permitted by applicable law, Good Partners Limited, AgriScanAI, and their directors, officers, 
              employees, and affiliates shall not be liable for any indirect, incidental, punitive, consequential, or economic damages, 
              including lost profits, crop loss, harvest failures, or chemical misapplications resulting from reliance on AI diagnostics or weather predictions.
            </p>
            <p className="legal-text">
              Users acknowledge that agricultural outcomes depend on climate, soil variations, and human execution beyond our direct control.
            </p>
          </section>

          {/* Section 12 */}
          <section className="legal-section" id="termination">
            <h2 className="legal-section-title">12. Account Termination &amp; Deletion Rights</h2>
            <p className="legal-text">
              You may terminate your account at any time. We reserve the right to suspend or terminate accounts that breach these Terms 
              or harm other community members without prior notice.
            </p>
            <p className="legal-text">
              For full details regarding permanent data removal and our 30-day external deletion SLA, please refer to Section 5 of our{' '}
              <a href="/privacy-policy" className="legal-link">Privacy Policy</a>.
            </p>
          </section>

          {/* Section 13 */}
          <section className="legal-section" id="governing-law">
            <h2 className="legal-section-title">13. Governing Law, Severability &amp; Entire Agreement</h2>
            <p className="legal-text">
              These Terms are governed by and construed in accordance with the <strong>laws of the Republic of Kenya</strong>, without regard 
              to conflict-of-law principles. Any legal disputes shall be subject to the exclusive jurisdiction of the competent courts of Nairobi, Kenya.
            </p>
            <p className="legal-text">
              If any provision of these Terms is deemed unenforceable, that provision shall be limited or severed to the minimum extent necessary, 
              and all remaining provisions will remain in full force. These Terms constitute the entire agreement between you and AgriScanAI.
            </p>
          </section>

          {/* Section 14 */}
          <section className="legal-section" id="contact-info">
            <h2 className="legal-section-title">14. Legal &amp; Support Contact Information</h2>
            <p className="legal-text">For questions, legal notices, or community feedback regarding these Terms, please reach out to:</p>
            <address className="legal-address">
              <strong>AgriScanAI — Legal Department</strong><br />
              <strong>Company:</strong> Good Partners Limited<br />
              <strong>Support Email:</strong> <a href="mailto:support@agriscanai.co.ke" className="legal-link">support@agriscanai.co.ke</a><br />
              <strong>Legal Inquiries:</strong> <a href="mailto:legal@agriscanai.com" className="legal-link">legal@agriscanai.com</a><br />
              <strong>Official Website:</strong> <a href="https://agriscanai.co.ke" target="_blank" rel="noopener noreferrer" className="legal-link">https://agriscanai.co.ke</a><br />
              <strong>Inquiry Form:</strong> <a href="/contact" className="legal-link">agriscanai.com/contact</a>
            </address>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
