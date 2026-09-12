import type { Metadata } from "next";
import "../legal.css";

export const metadata: Metadata = {
  title: "Terms and Conditions | Akiiro",
  description: "Terms governing access to the Akiiro website, product information, external services, and purchases.",
};

const sections = [
  ["Acceptance", <p>By accessing or using this website, you agree to these Terms and Conditions and the Privacy Policy. If you do not agree, do not use the website. Additional terms may apply to a specific Akiiro product, account, application, purchase, or connected service.</p>],
  ["Website purpose", <p>The website presents information about Akiiro, Macro Kii, Studio-A, software, concepts, and related products. Product descriptions, images, availability, specifications, and release plans may change as products develop. Content is provided for general information and is not professional, legal, financial, medical, or investment advice.</p>],
  ["Permitted use", <><p>You may use the website for lawful personal or business evaluation. You may not:</p><ul><li>interfere with the site, its security, or another person’s use;</li><li>attempt unauthorized access to systems, accounts, or data;</li><li>use automated means to overload, scrape, or copy the site in violation of applicable law;</li><li>misrepresent your identity or affiliation; or</li><li>use the site to violate another person’s rights.</li></ul></>],
  ["Intellectual property", <p>The site and its text, software, interface designs, graphics, images, trademarks, product names, and other materials are owned by Akiiro or used with permission. These Terms do not transfer ownership or grant permission to reproduce, distribute, modify, sell, or create derivative works except where applicable law expressly permits it.</p>],
  ["Products, pricing, and purchases", <><p>Prices, inventory, release dates, features, and product details may change before an order is accepted. Taxes, shipping, availability, and any additional charges may be shown during checkout.</p><p>Payments may be processed by Stripe, Apple, or another identified provider. Their terms and privacy practices apply to the transaction. Any product-specific return, cancellation, warranty, or fulfillment terms presented during purchase also apply.</p></>],
  ["External services", <p>The site links to third-party platforms and connected Akiiro services. A link does not make Akiiro responsible for another service’s availability, content, security, or practices. Your use of those services is governed by their applicable terms.</p>],
  ["Feedback", <p>If you voluntarily send suggestions or feedback, you permit Akiiro to use it without restriction or compensation, provided that this does not transfer ownership of your confidential information or personal data.</p>],
  ["Disclaimers", <p>To the fullest extent permitted by law, the website is provided “as is” and “as available.” Akiiro does not guarantee uninterrupted access, error-free operation, or that every description will remain current. Nothing in these Terms excludes warranties or rights that cannot legally be excluded.</p>],
  ["Limitation of liability", <p>To the fullest extent permitted by law, Akiiro and its suppliers will not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of or inability to use this website. Any liability that cannot legally be excluded remains limited only to the extent permitted by applicable law.</p>],
  ["Changes and termination", <p>We may update the website or these Terms when products, services, or legal requirements change. Updated Terms apply from the effective date shown above. We may restrict access where reasonably necessary to protect the website, users, Akiiro, or comply with law.</p>],
  ["Contact", <p>Questions about these Terms may be sent to <a href="mailto:hello@akiiro.co">hello@akiiro.co</a>.</p>],
] as const;

export default function TermsPage() {
  return <main className="legal-page">
    <nav className="legal-nav"><a href="/">AKIIRO®</a><div><a href="/privacy">Privacy</a><a href="/">Home</a></div></nav>
    <header className="legal-header"><p className="legal-kicker">Legal / Terms</p><h1>Terms and<br />Conditions.</h1><p className="legal-date">Effective September 12, 2026</p></header>
    <article className="legal-body">
      <p className="legal-summary">These terms govern access to the Akiiro website and explain the basic rules that apply when exploring our products and linked services.</p>
      {sections.map(([title, content], index) => <section key={title}><span className="legal-number">{String(index + 1).padStart(2,"0")}</span><div><h2>{title}</h2>{content}</div></section>)}
    </article>
    <footer className="legal-footer"><a href="/">Akiiro</a><a href="/privacy">Privacy Policy</a><span>© 2026 Akiiro</span></footer>
  </main>;
}
