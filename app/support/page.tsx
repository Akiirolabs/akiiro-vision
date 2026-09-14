import type { Metadata } from "next";
import { supportGroups } from "../../lib/support-faqs";
import "./support.css";

export const metadata: Metadata = {
  title: "Akiiro Support | Product FAQs & Troubleshooting",
  description: "Find answers and troubleshooting for Macro Kii, AO and Verify, Studio-A, Akiiro 3D, Mind Map, and IO Vault. Contact Akiiro support for personal help.",
  alternates: { canonical: "https://akiiro.com/support" },
};

export default function SupportPage() {
  return <main className="support-page">
    <nav className="support-nav" aria-label="Support navigation"><a href="/">AKIIRO®</a><a href="#contact-support">Contact support</a></nav>
    <header className="support-hero"><p className="support-eyebrow">AKIIRO / SUPPORT</p><h1>Keep moving.</h1><p>Answers for your workspace. Help for your hardware.<br />Find your product and take the next step.</p></header>
    <div className="support-layout">
      <aside><nav aria-label="Choose a product"><p className="support-eyebrow">FIND YOUR PRODUCT</p>{supportGroups.map(group => <a key={group.id} href={`#${group.id}`}>{group.title}</a>)}</nav><a className="support-contact-link" href="mailto:support@akiiro.com">Email support</a></aside>
      <div className="support-questions">{supportGroups.map((group, index) => <section id={group.id} key={group.id} aria-labelledby={`${group.id}-title`}>
        <p className="support-eyebrow">{String(index + 1).padStart(2, "0")} / SUPPORT</p><h2 id={`${group.id}-title`}>{group.title}</h2><p className="support-intro">{group.intro}</p>
        {group.faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
      </section>)}</div>
    </div>
    <section className="support-contact" id="contact-support"><p className="support-eyebrow">LET’S WORK THROUGH IT</p><h2>Still need a hand?</h2><p>Tell us which product you use, what happened, and what you have already tried. Include a screenshot with personal information removed if it helps explain the issue.</p><a href="mailto:support@akiiro.com">support@akiiro.com</a><p className="support-contact-note">Ask AO is available in the corner for automated guidance. Email connects your request directly with the team.</p></section>
    <footer className="support-footer"><a href="/">AKIIRO®</a><div><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div><span>© 2026 Akiiro</span></footer>
  </main>;
}
