import '../Home.css';
import '../LegalPages.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="legal-hero">
        <span className="legal-eyebrow">AgriScanAI Legal Documentation</span>
        <h1 className="legal-hero-title">Privacy Policy & Data Processing Architecture</h1>
        <p className="legal-hero-subtitle">
          User-Facing Policies, Disclaimers, and Data Processing Disclosures
        </p>
        <div className="legal-meta-badges">
          <span className="legal-badge">Version 1.0</span>
          <span className="legal-badge">Operator: Good Partners Limited</span>
          <span className="legal-badge">Effective: 30 September 2026</span>
          <span className="legal-badge">Bilingual Standard (EN / SW)</span>
        </div>
      </div>

      <main className="legal-body">
        <div className="legal-container">
          <p className="legal-intro">
            AgriScanAI is operated by <strong>Good Partners Limited</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). 
            We are dedicated to safeguarding the privacy and data rights of smallholder farmers, extension officers, 
            partner organisations, buyers, and all platform users. This Privacy Policy outlines what information we 
            collect, our third-party data processing architecture, how permissions are utilised, and your permanent data deletion rights.
          </p>

          {/* Quick Navigation */}
          <nav className="legal-toc" aria-label="Table of Contents">
            <p className="legal-toc-title">Table of Contents</p>
            <ul className="legal-toc-list">
              <li><a href="#overview" className="legal-toc-link">1. Overview & Scope</a></li>
              <li><a href="#data-collection" className="legal-toc-link">2. Data We Collect</a></li>
              <li><a href="#data-matrix" className="legal-toc-link">3. Data Processing & Recipient Matrix</a></li>
              <li><a href="#how-we-use" className="legal-toc-link">4. How Data Is Used</a></li>
              <li><a href="#account-deletion" className="legal-toc-link">5. Account Deletion Protocol</a></li>
              <li><a href="#web-deletion" className="legal-toc-link">6. Public Deletion Portal (30-Day SLA)</a></li>
              <li><a href="#system-permissions" className="legal-toc-link">7. System Permissions & Sensors</a></li>
              <li><a href="#security" className="legal-toc-link">8. Security & Platform Safety</a></li>
              <li><a href="#offline-sync" className="legal-toc-link">9. Offline & Low-Connectivity Sync</a></li>
              <li><a href="#user-rights" className="legal-toc-link">10. User Rights & Inquiries</a></li>
            </ul>
          </nav>

          {/* Section 1 */}
          <section className="legal-section" id="overview">
            <h2 className="legal-section-title">1. Document Overview & Scope</h2>
            <p className="legal-text">
              This Privacy Policy governs user data across the entire AgriScanAI ecosystem, including our Android mobile 
              application, progressive web endpoints, external notification channels (SMS, WhatsApp, email), and cloud infrastructure.
            </p>
            <p className="legal-text">
              AgriScanAI upholds a strict localization and transparency standard. All in-app legal notices, permission prompts, 
              and disclosure texts exist in both <strong>English</strong> and <strong>Kiswahili</strong> under matching key paths 
              to guarantee full clarity for agricultural communities across East Africa.
            </p>
          </section>

          {/* Section 2 */}
          <section className="legal-section" id="data-collection">
            <h2 className="legal-section-title">2. Information We Collect</h2>
            <h3 className="legal-subsection-title">2.1 Information You Provide Directly</h3>
            <ul className="legal-list">
              <li><strong>Account & Identity:</strong> Name, phone number, email address, password/authentication credential, and assigned partner organization.</li>
              <li><strong>Farm & Agronomic Profile:</strong> Farm location, county, acreage, crop types planted, yield logs, and activity records.</li>
              <li><strong>Diagnostic Images:</strong> Photos of diseased crops, leaves, or soil uploaded for AI-powered disease diagnosis.</li>
              <li><strong>Financial & Sustainability Entries:</strong> Farm financial inputs, sales transactions, uploaded receipt photos/payment screenshots, and sustainability practices for carbon tracking.</li>
              <li><strong>Advisory Conversations:</strong> Agronomic questions and dialogue exchanged with our Mwanedu AI assistant.</li>
              <li><strong>Marketplace Communications:</strong> Messages, crop listings, agreed prices, and trade arrangements exchanged between verified farmers and buyers.</li>
            </ul>

            <h3 className="legal-subsection-title">2.2 Automatically Collected & Sensor Data</h3>
            <ul className="legal-list">
              <li><strong>Approximate Location:</strong> Coarse latitude/longitude (~11 km grid resolution) to provide county and hyperlocal weather forecasting.</li>
              <li><strong>Device & Telemetry:</strong> Device model, operating system version, app version, network state, and synchronization logs.</li>
            </ul>
          </section>

          {/* Section 3: Data Processing Matrix */}
          <section className="legal-section" id="data-matrix">
            <h2 className="legal-section-title">3. Data Processing & Recipient Matrix</h2>
            <p className="legal-text">
              We never sell personal information. The following matrix details what specific data is transferred, 
              to whom, and the technical or operational purpose of the processing:
            </p>

            <div className="legal-table-wrap">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Recipient / Processor</th>
                    <th>Data Transferred</th>
                    <th>Processing Purpose & Safeguards</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>User&apos;s Organization</strong></td>
                    <td>Account details, farm records, activity logs</td>
                    <td>Account approval and aggregate organization reporting. (Default: Good Partners Limited).</td>
                  </tr>
                  <tr>
                    <td><strong>Marketplace Buyers</strong></td>
                    <td>Name, Country, County, Active Crops</td>
                    <td>Trade discovery. <em>Excludes exact farm location, phone number, and acreage prior to explicit connection acceptance.</em></td>
                  </tr>
                  <tr>
                    <td><strong>Google (Firebase Auth)</strong></td>
                    <td>Email address, Phone number, System ID</td>
                    <td>Identity authentication, session validation, and passwordless OTP verification.</td>
                  </tr>
                  <tr>
                    <td><strong>Google (Gemini AI)</strong></td>
                    <td>Crop diagnostic images, advisory prompts, county, farm classification</td>
                    <td>Diagnostic inference and agronomic advisory response generation. <em>Strictly excludes user PII.</em></td>
                  </tr>
                  <tr>
                    <td><strong>Meta (WhatsApp)</strong></td>
                    <td>Phone number</td>
                    <td>Dispatch of OTP authentication, account verification, and system transactional approval notices.</td>
                  </tr>
                  <tr>
                    <td><strong>Open-Meteo</strong></td>
                    <td>Approximate latitude/longitude (~11 km grid resolution)</td>
                    <td>Hyperlocal weather forecasting. <em>Excludes account identity payloads or exact farm GPS.</em></td>
                  </tr>
                  <tr>
                    <td><strong>OpenAI</strong></td>
                    <td>Raw advisory query text</td>
                    <td>Contextual vector retrieval against internal agronomic reference databases (active during knowledge-base searches).</td>
                  </tr>
                  <tr>
                    <td><strong>Hosting Infrastructure</strong></td>
                    <td>Complete application records, diagnostic media, financial logs</td>
                    <td>Primary database persistence, secure backup, and object storage under enterprise-grade encryption.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section className="legal-section" id="how-we-use">
            <h2 className="legal-section-title">4. How We Use Your Information</h2>
            <ul className="legal-list">
              <li>Deliver automated crop disease identification and agronomic treatment guidance.</li>
              <li>Provide regional weather forecasts, pest outbreak alerts, and climate advisory.</li>
              <li>Support farmer profiling, seasonal yield comparisons, and financial book-keeping.</li>
              <li>Enable voluntary, secure marketplace connections between smallholders and verified produce buyers.</li>
              <li>Compute illustrative farm carbon metrics and sustainability indicators.</li>
              <li>Ensure system stability, enforce community conduct, and safeguard against fraudulent activity.</li>
            </ul>
          </section>

          {/* Section 5: Account Deletion Protocol */}
          <section className="legal-section" id="account-deletion">
            <h2 className="legal-section-title">5. In-App Account Deletion Protocol</h2>
            <p className="legal-text">
              We respect your right to be forgotten. In AgriScanAI, account deletion is an immediate, permanent removal&mdash;not 
              a soft flag on a hidden row.
            </p>

            <div className="legal-callout legal-callout-danger">
              <p className="legal-callout-title">⚠️ What Account Deletion Permanently Removes:</p>
              <ul className="legal-list" style={{ margin: '8px 0 0', paddingLeft: '1.25rem' }}>
                <li>Your farmer profile, farms, crops, and activity log.</li>
                <li>All crop scans and the photographs behind them.</li>
                <li>Your financial entries and uploaded receipt/payment images.</li>
                <li>Your sustainability records and calculated carbon figures.</li>
                <li>All advisory conversations and chat history with Mwanedu.</li>
                <li>Your marketplace connections and the messages in them (conversations are removed for both buyer and seller).</li>
                <li>Your push notifications and device registrations.</li>
                <li>Your sign-in credentials, preventing any future sign-in.</li>
              </ul>
            </div>

            <p className="legal-text">
              <strong>How to delete in the app:</strong> Open <em>Settings &rarr; Delete Account</em>. For your security, you will be asked 
              to confirm your password or re-authenticate. In-app deletion executes immediately.
            </p>
            <p className="legal-text">
              <em>External Organization Notice:</em> If your account was enrolled under a partner NGO or government extension agency, 
              deleting your app account disconnects mobile access. Please contact your administering organization to request deletion 
              of their external institutional archives.
            </p>
            <p className="legal-text">
              <em>Google Play Subscriptions:</em> A subscription purchased via Google Play is managed and billed directly by Google. 
              Deleting your app account does not cancel recurring Google Play billing; cancel your subscription via 
              <em>Google Play Store &rarr; Payments &amp; Subscriptions</em>.
            </p>
          </section>

          {/* Section 6: Public Web Deletion Portal */}
          <section className="legal-section" id="web-deletion">
            <h2 className="legal-section-title">6. Public Web Account Deletion Portal &amp; 30-Day SLA</h2>
            <p className="legal-text">
              For users who have lost their mobile device, uninstalled the app, or cannot receive verification SMS/WhatsApp messages, 
              we maintain an external account deletion workflow:
            </p>

            <div className="legal-prompt-box">
              <strong>Futa akaunti yako ya AgriScanAI / Delete your AgriScanAI account:</strong><br />
              Requests submitted through our public web portal are reviewed and processed within a mandatory <strong>30-day SLA</strong>. 
              Our team verifies account ownership before execution. <em>(Please do not submit passwords or OTP codes).</em>
            </div>

            <p className="legal-text">
              To request account deletion outside the app, submit an inquiry through our{' '}
              <a href="/contact" className="legal-link">Account Support Contact Portal</a> or email{' '}
              <a href="mailto:support@agriscanai.co.ke" className="legal-link">support@agriscanai.co.ke</a> with the subject 
              &ldquo;Account Deletion Request&rdquo;.
            </p>
          </section>

          {/* Section 7: Permissions */}
          <section className="legal-section" id="system-permissions">
            <h2 className="legal-section-title">7. System Permissions &amp; Mobile Sensors</h2>
            <p className="legal-text">
              The AgriScanAI mobile application requests only permissions essential to delivering platform services:
            </p>
            <ul className="legal-list">
              <li><strong>Camera (CAMERA):</strong> Required exclusively for capturing crop photos during disease scans and photographing financial receipts.</li>
              <li><strong>Photo Gallery:</strong> Access is limited strictly to user-selected photos uploaded for crop diagnosis or receipt verification.</li>
              <li><strong>Approximate Location (ACCESS_COARSE_LOCATION):</strong> Used to fetch regional and county-level weather forecasts from Open-Meteo (~11 km grid). Precise GPS tracking is never active in the background.</li>
              <li><strong>Push Notifications (POST_NOTIFICATIONS):</strong> Used to dispatch advisory follow-ups, severe weather warnings, account approval updates, and marketplace trade messages. You can disable notifications at any time in device settings.</li>
              <li><strong>Biometrics (USE_BIOMETRIC / USE_FINGERPRINT):</strong> Used solely on-device for rapid, secure local sign-in. Biometric data never leaves your device.</li>
            </ul>
          </section>

          {/* Section 8: Safety & Security */}
          <section className="legal-section" id="security">
            <h2 className="legal-section-title">8. Platform Safety &amp; Security Directives</h2>
            <p className="legal-text">
              We apply industry-standard security practices, including TLS 1.3 encryption in transit, AES-256 encryption at rest, 
              strict role-based access control, and passwordless authentication options via WhatsApp OTP and Google OAuth.
            </p>
            <div className="legal-callout legal-callout-warning">
              <p className="legal-callout-title">🔒 User Security Protocol:</p>
              <p>
                AgriScanAI staff will <strong>never</strong> ask for your password, PIN, or verification OTP code. 
                Never send personal identification numbers, national ID photos, or banking PINs over marketplace chats or support forms.
              </p>
            </div>
          </section>

          {/* Section 9: Offline */}
          <section className="legal-section" id="offline-sync">
            <h2 className="legal-section-title">9. Offline &amp; Low-Connectivity Synchronization</h2>
            <p className="legal-text">
              AgriScanAI is engineered for low-connectivity rural environments. Scans, farm records, and financial entries recorded 
              offline are encrypted locally on the device and synchronized with our servers once an internet connection is re-established. 
              Users are advised to keep device lock screens enabled to protect locally cached records.
            </p>
          </section>

          {/* Section 10: Rights and Contacts */}
          <section className="legal-section" id="user-rights">
            <h2 className="legal-section-title">10. Your Rights &amp; Contact Information</h2>
            <p className="legal-text">
              Under applicable Kenyan and international data protection laws, you retain the right to:
            </p>
            <ul className="legal-list">
              <li>Request a copy of your stored farm and profile data.</li>
              <li>Request rectification of incorrect records or farm details.</li>
              <li>Request permanent deletion of your account and related media.</li>
              <li>Object to or restrict specific automated data processing.</li>
            </ul>

            <address className="legal-address">
              <strong>AgriScanAI — Data Protection &amp; Legal Compliance</strong><br />
              <strong>Operator:</strong> Good Partners Limited<br />
              <strong>General Support:</strong> <a href="mailto:support@agriscanai.co.ke" className="legal-link">support@agriscanai.co.ke</a><br />
              <strong>Data Privacy &amp; Legal:</strong> <a href="mailto:privacy@agriscanai.com" className="legal-link">privacy@agriscanai.com</a><br />
              <strong>Official Website:</strong> <a href="https://agriscanai.co.ke" target="_blank" rel="noopener noreferrer" className="legal-link">https://agriscanai.co.ke</a><br />
              <strong>Online Inquiries:</strong> <a href="/contact" className="legal-link">agriscanai.co.ke/contact</a>
            </address>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
