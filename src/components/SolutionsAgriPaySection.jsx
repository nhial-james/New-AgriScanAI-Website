const CheckIconSm = () => (
  <svg className="sol-agripay-check" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 40C15.18 40 8 32.82 8 24C8 15.18 15.18 8 24 8C32.82 8 40 15.18 40 24C40 32.82 32.82 40 24 40ZM33.18 15.16L20 28.34L14.82 23.18L12 26L20 34L36 18L33.18 15.16Z" fill="#33B34D" />
  </svg>
);

const features = [
  'Pay Farmers Instantly',
  'Track All Transactions',
  'Finance Farming Growth',
  'Secure Mobile Wallet',
];

export default function SolutionsAgriPaySection() {
  return (
    <section className="sol-agripay">
      <div className="sol-agripay-inner">
        <div className="sol-agripay-left">
          <p className="sol-eyebrow sol-eyebrow-left">AgriPay</p>
          <h2 className="sol-section-title sol-title-left">Smart Payments for Smart Farming</h2>
          <p className="sol-agripay-subtitle">For NGOs, Govt Agencies &amp; Development Organizations</p>
          <p className="sol-agripay-desc">
            AgriPay integrates seamlessly with mobile money ecosystems, making it easier than ever to manage finances and access funding for growth.
          </p>
          <ul className="sol-agripay-features">
            {features.map((f) => (
              <li key={f} className="sol-agripay-feature-item">
                <CheckIconSm />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="sol-agripay-right">
          <div className="sol-payment-card">
            <div className="sol-payment-card-header">
              <div className="sol-payment-card-brand">AgriPay</div>
              <div className="sol-payment-card-account">
                <span className="sol-payment-card-label">Account Number</span>
                <span className="sol-payment-card-number">254 *** *** ***</span>
              </div>
            </div>
            <div className="sol-payment-profile">
              <div className="sol-payment-avatar">SW</div>
              <div>
                <p className="sol-payment-name">Sarah Wanjiku</p>
                <p className="sol-payment-email">wanjiku@gmail.com</p>
              </div>
            </div>
            <div className="sol-payment-amount-row">
              <span className="sol-payment-amount">KES 26,059.00</span>
              <span className="sol-payment-mpesa">M-PESA</span>
            </div>
            <p className="sol-payment-date">August 16, 2026</p>
            <div className="sol-payment-fields">
              <div className="sol-payment-field">
                <span>Money</span>
                <span className="sol-payment-field-arrow">›</span>
              </div>
              <div className="sol-payment-field">
                <span>Bone Account</span>
                <span className="sol-payment-field-arrow">›</span>
              </div>
            </div>
            <button className="sol-payment-pay-btn">Pay</button>
          </div>
        </div>
      </div>
    </section>
  );
}
