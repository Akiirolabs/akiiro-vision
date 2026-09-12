import type { Metadata } from "next";
import "../legal.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Akiiro",
  description: "Learn how Akiiro handles information when you visit its website, contact the company, or follow links to connected services.",
};

const sections = [
  ["Information we receive", <><p>We may receive information you choose to provide, such as your name, email address, message, support request, or other details you send when contacting Akiiro or using a connected service.</p><p>When you visit the site, our hosting and security providers may automatically process limited technical information such as an IP address, browser type, device type, requested pages, timestamps, and diagnostic logs. This information helps deliver, protect, and understand the site.</p></>],
  ["How we use information", <><p>We use information to respond to inquiries, provide requested services, operate and secure the website, diagnose problems, improve our products, comply with legal obligations, and protect Akiiro and its users.</p><p>We do not sell personal information. We do not use information from this marketing website for cross-site behavioral advertising.</p></>],
  ["Cookies and local storage", <p>The website may use strictly necessary cookies or similar technical storage when required for security, reliability, or a feature you request. Connected products may use additional storage under their own notices. If our practices materially change, we will update this policy and provide choices where required.</p>],
  ["Service providers and external links", <><p>We may rely on providers that host the site, deliver communications, secure services, or process transactions. They may process information only as needed to provide those functions and subject to their own legal obligations.</p><p>Purchases are completed through Stripe, and downloads or purchases may also involve Apple. Akiiro does not receive your full payment card number from these payment providers. Links to Macro Kii, Akiiro IO, Akiiro 3D, app stores, and other external services may be governed by separate privacy notices.</p></>],
  ["Retention and security", <><p>We keep personal information only for as long as reasonably necessary for the purpose it was collected, including support, business, security, accounting, and legal needs.</p><p>We use reasonable administrative and technical safeguards. No internet service or storage method can be guaranteed completely secure.</p></>],
  ["Your privacy choices", <><p>Depending on where you live, you may have rights to request access, correction, deletion, restriction, portability, or information about how personal information is used. You may also object to or withdraw consent for certain processing.</p><p>To make a request, email <a href="mailto:hello@akiiro.co">hello@akiiro.co</a>. We may need to verify your identity before completing a request. You may also have the right to contact your local data protection authority.</p></>],
  ["Children", <p>This website is not directed to children under 13, and we do not knowingly collect personal information from children under 13 through it. If you believe a child has provided personal information, contact us so we can review and remove it where appropriate.</p>],
  ["International visitors", <p>Akiiro and its providers may process information in countries other than the one where you live. When required, appropriate safeguards are used for international transfers.</p>],
  ["Changes and contact", <><p>We may update this policy as the website, services, or legal requirements change. The effective date above identifies the latest version.</p><p>Questions or privacy requests may be sent to <a href="mailto:hello@akiiro.co">hello@akiiro.co</a>.</p></>],
] as const;

export default function PrivacyPage() {
  return <main className="legal-page">
    <nav className="legal-nav"><a href="/">AKIIRO®</a><div><a href="/terms">Terms</a><a href="/">Home</a></div></nav>
    <header className="legal-header"><p className="legal-kicker">Legal / Privacy</p><h1>Privacy<br />Policy.</h1><p className="legal-date">Effective September 12, 2026</p></header>
    <article className="legal-body">
      <p className="legal-summary">This policy explains what information Akiiro may receive through this website, why it is used, and the choices available to you.</p>
      {sections.map(([title, content], index) => <section key={title}><span className="legal-number">{String(index + 1).padStart(2,"0")}</span><div><h2>{title}</h2>{content}</div></section>)}
    </article>
    <footer className="legal-footer"><a href="/">Akiiro</a><a href="/terms">Terms and Conditions</a><span>© 2026 Akiiro</span></footer>
  </main>;
}
