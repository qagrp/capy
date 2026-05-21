import Image from 'next/image';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Your Brand Custom Pendrives',
  description:
    'Premium custom made pendrives with logo printing for business promotions, events, and corporate gifting.',
  telephone: '+91 98765 43210',
  email: 'hello@yourbrand.com',
  areaServed: 'IN',
  url: 'https://www.yourbrand.com/',
  image: 'https://www.yourbrand.com/assets/og-custom-pendrives.webp',
  makesOffer: {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Product',
      name: 'Custom Made Pendrives',
      category: 'Branded USB Drives'
    }
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    <a className="skip-link" href="#quote">Skip to quote request</a>

    <header className="site-header" id="home">
      <div className="topbar" aria-label="Contact and delivery details">
        <div className="container topbar__inner">
          <address className="topbar__contact">
            <a href="tel:+919876543210" aria-label="Call +91 98765 43210">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.8L7.8 9.5a16 16 0 0 0 6.7 6.7l1.2-1.2a2 2 0 0 1 1.8-.6l2.8.5a2 2 0 0 1 1.7 2Z"/></svg>
              +91 98765 43210
            </a>
            <a href="mailto:hello@yourbrand.com">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 3 8 5 8-5"/></svg>
              hello@yourbrand.com
            </a>
          </address>
          <p className="topbar__promise">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7zM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>
            Bulk Orders | Corporate Gifts | PAN India Delivery
          </p>
        </div>
      </div>

      <nav className="mainnav" aria-label="Primary navigation">
        <div className="container mainnav__inner">
          <a className="brand" href="#home" aria-label="Your Brand Custom Pendrives home">
            <svg className="brand__mark" aria-hidden="true" viewBox="0 0 64 64">
              <path d="M8 38 34 12l18 18-26 26L8 38Z"/>
              <path d="m41 5 18 18-7 7-18-18 7-7Z"/>
              <path d="m45 9 10 10M15 39l10 10"/>
            </svg>
            <span><strong>Your Brand</strong><small>Custom Pendrives</small></span>
          </a>
          <ul className="navlinks">
            <li><a className="is-active" href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#customization">Customization</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#quote">Contact Us</a></li>
          </ul>
          <a className="button button--nav" href="#quote">Request a Quote</a>
        </div>
      </nav>
    </header>

    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <div className="hero__copy">
            <h1 id="hero-title">Custom Made<br />Pendrives</h1>
            <div className="rule" aria-hidden="true"></div>
            <p className="hero__tagline">Your Brand. Your Design. Your Story.</p>
            <p className="hero__text" id="about">Premium quality custom pendrives for your business, events, promotions and corporate gifting.</p>

            <ul className="feature-grid" id="products" aria-label="Product highlights">
              <li>
                <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/></svg>
                <strong>Custom Design</strong><span>Your Logo, Your Style</span>
              </li>
              <li>
                <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 7h10v10H7z"/><path d="M4 10h3M4 14h3M17 10h3M17 14h3M10 4v3M14 4v3M10 17v3M14 17v3"/><path d="M10 12h4"/></svg>
                <strong>Premium Quality</strong><span>High Speed | Durable</span>
              </li>
              <li>
                <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m3 7 9-4 9 4-9 4-9-4Z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/></svg>
                <strong>Multiple Capacity</strong><span>4GB to 128GB</span>
              </li>
              <li>
                <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-5"/></svg>
                <strong>1 Year Warranty</strong><span>Reliable &amp; Secure</span>
              </li>
            </ul>

            <a className="button button--hero" href="#quote">Request a Quote <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <Image src="/assets/custom-pendrives-hero.webp" width={900} height={812} alt="" priority aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="trustbar" id="why-us" aria-label="Why choose us">
        <div className="container trustbar__inner">
          <article>
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-5"/></svg>
            <div><h2>Trusted Quality</h2><p>We use top grade chips for best performance &amp; data safety.</p></div>
          </article>
          <article>
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z"/><path d="M7 7h.01"/></svg>
            <div><h2>Best Prices</h2><p>Competitive pricing for bulk orders without compromising on quality.</p></div>
          </article>
          <article>
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><path d="M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>
            <div><h2>On Time Delivery</h2><p>We value your time and ensure your order is delivered on time, every time.</p></div>
          </article>
          <article>
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 14a8 8 0 0 1 16 0"/><path d="M4 14v4a2 2 0 0 0 2 2h2v-8H6a2 2 0 0 0-2 2Zm16 0v4a2 2 0 0 1-2 2h-2v-8h2a2 2 0 0 1 2 2Z"/></svg>
            <div><h2>Dedicated Support</h2><p>Our team is here to help you at every step from selection to after sales.</p></div>
          </article>
        </div>
      </section>

      <section className="quote" id="quote" aria-labelledby="quote-title">
        <div className="container quote__inner">
          <div className="quote__copy">
            <p className="eyebrow">Get Started</p>
            <div className="rule rule--small" aria-hidden="true"></div>
            <h2 id="quote-title">Request a Quote</h2>
            <p>Tell us what you need, we’ll get back to you with the best quote.</p>

            <ul className="quote-benefits">
              <li><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="9"/></svg><strong>Quick Response</strong><span>We reply within 24 hours</span></li>
              <li><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 10V8a6 6 0 1 1 12 0v2"/><rect x="4" y="10" width="16" height="11" rx="2"/></svg><strong>100% Secure</strong><span>Your information is safe with us</span></li>
              <li><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-5"/></svg><strong>No Obligation</strong><span>Request a quote with no commitment</span></li>
            </ul>
          </div>

          <form className="quote-form" id="customization" action="mailto:hello@yourbrand.com" method="post" encType="text/plain">
            <label><span>Full Name</span><input name="full-name" type="text" placeholder="Full Name" autoComplete="name" required /></label>
            <label><span>Email Address</span><input name="email" type="email" placeholder="Email Address" autoComplete="email" required /></label>
            <label><span>Company Name</span><input name="company" type="text" placeholder="Company Name" autoComplete="organization" /></label>
            <label><span>Phone Number</span><input name="phone" type="tel" placeholder="Phone Number" autoComplete="tel" required /></label>
            <label className="wide"><span>Select Capacity</span><select name="capacity" required><option value="">Select Capacity</option><option>4GB</option><option>8GB</option><option>16GB</option><option>32GB</option><option>64GB</option><option>128GB</option></select></label>
            <label className="wide"><span>Requirement</span><textarea name="requirement" placeholder="Tell us about your requirement (Logo, Quantity, Usage, Delivery Time, etc.)" rows={5}></textarea></label>
            <button className="button button--submit" type="submit">Submit Request <span aria-hidden="true">→</span></button>
          </form>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="container footer__inner">
        <p>© 2024 Your Brand. All Rights Reserved.</p>
        <p><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-5"/></svg> High Quality Products</p>
        <p><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 10V8a6 6 0 1 1 12 0v2"/><rect x="4" y="10" width="16" height="11" rx="2"/></svg> Secure Transactions</p>
        <nav aria-label="Social links" className="social"><span>Follow Us:</span><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="LinkedIn">in</a></nav>
      </div>
    </footer>
    </>
  );
}
