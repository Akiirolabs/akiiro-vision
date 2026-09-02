import type { Metadata } from "next";
import "./cyberdecks.css";

const checkoutUrl = "https://buy.stripe.com/14AbJ3874afa4n182mc3m01";
const productImage = "https://akiiro.com/assets/studio-a/hero-black.png";

export const metadata: Metadata = {
  title: "Studio-A Cyberdeck — Akiiro",
  description: "Studio-A is Akiiro's compact creative system, designed for focused work beyond a fixed desk.",
  openGraph: {
    title: "Studio-A Cyberdeck — Akiiro",
    description: "A compact creative system built to move.",
    images: [{ url: productImage, width: 1448, height: 1086 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio-A Cyberdeck — Akiiro",
    description: "A compact creative system built to move.",
    images: [productImage],
  },
};

export default function CyberdecksPage() {
  return (
    <main className="deck-page" id="top">
      <nav className="deck-nav" aria-label="Studio-A navigation">
        <a className="deck-wordmark" href="/" aria-label="Akiiro home">AKIIRO<span>®</span></a>
        <div className="deck-nav-links">
          <a href="/">Home</a>
          <a href="/#objects">Products</a>
          <a href="/cyberdecks" aria-current="page">Cyberdecks</a>
        </div>
      </nav>

      <section className="deck-hero" aria-labelledby="studio-a-title">
        <img src="/assets/studio-a/hero-black.png" alt="Black Studio-A cyberdeck in a sculptural profile view" />
        <div className="deck-hero-shade" />
        <div className="deck-hero-topline">
          <span>AKIIRO HARDWARE / 001</span>
          <span>PORTABLE CREATIVE SYSTEM</span>
        </div>
        <div className="deck-hero-copy">
          <h1 id="studio-a-title">Studio‑A</h1>
          <div>
            <p>Work has a new shape.</p>
            <a className="deck-pill" href={checkoutUrl} target="_blank" rel="noopener noreferrer">Shop Studio‑A ↗</a>
          </div>
        </div>
      </section>

      <section className="deck-intro">
        <p className="deck-label">01 / THE OBJECT</p>
        <h2>A studio should follow the idea. Not the other way around.</h2>
        <p className="deck-intro-note">Studio‑A brings the essential interface into one compact object: display, control, connectivity, and room to focus.</p>
      </section>

      <section className="deck-object-grid" aria-label="Studio-A product views">
        <figure className="deck-object-large">
          <img src="/assets/studio-a/white-front-flat.png" alt="White Studio-A cyberdeck viewed from the front with a smooth top edge" />
          <figcaption><span>LIGHT / FRONT</span><span>01</span></figcaption>
        </figure>
        <figure>
          <img src="/assets/studio-a/black-rear.jpg" alt="Black Studio-A cyberdeck rear enclosure" />
          <figcaption><span>DARK / REAR</span><span>02</span></figcaption>
        </figure>
      </section>

      <section className="deck-spec-line" aria-label="Studio-A design principles">
        <div><span>FORM</span><strong>Compact</strong></div>
        <div><span>ORIENTATION</span><strong>Landscape</strong></div>
        <div><span>FINISHES</span><strong>Dark / Light</strong></div>
        <div><span>INTENT</span><strong>Make anywhere</strong></div>
      </section>

      <section className="deck-focus">
        <div className="deck-focus-copy">
          <p className="deck-label">02 / LESS, BUT BETTER</p>
          <h2>Everything present has a reason to be.</h2>
          <p>The enclosure keeps the working surface calm while placing the essential connections within reach.</p>
        </div>
        <figure>
          <img src="/assets/studio-a/ports-dual.jpg" alt="Close view of Studio-A connectivity" />
          <figcaption>AV / HDMI / HDMI / USB‑C POWER</figcaption>
        </figure>
      </section>

      <section className="deck-finishes">
        <div className="deck-finishes-head">
          <p className="deck-label">03 / TWO EXPRESSIONS</p>
          <h2>Light.<br />Dark.</h2>
          <p>Two finishes. The same deliberate object.</p>
        </div>
        <figure>
          <img src="/assets/studio-a/white-views-flat.png" alt="Four views of the white Studio-A cyberdeck with a smooth top edge" />
          <figcaption>STUDIO‑A / LIGHT</figcaption>
        </figure>
        <figure>
          <img src="/assets/studio-a/black-views-flat.png" alt="Four views of the black Studio-A cyberdeck with a smooth top edge" />
          <figcaption>STUDIO‑A / DARK</figcaption>
        </figure>
      </section>

      <section className="deck-principles">
        <p className="deck-label">04 / PRINCIPLES</p>
        {[
          ["01", "Portable by design", "A compact format made for movement, not permanent installation."],
          ["02", "Quiet in use", "A restrained object that keeps attention on the work."],
          ["03", "Clear at a glance", "Controls and connections are organized to explain themselves."],
        ].map(([number, title, description]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <section className="deck-order" id="order">
        <div className="deck-order-copy">
          <p className="deck-label">STUDIO‑A / AVAILABLE NOW</p>
          <h2>Make room<br />for the idea.</h2>
          <a className="deck-order-link" href={checkoutUrl} target="_blank" rel="noopener noreferrer">
            <span>Shop Studio‑A</span><span>↗</span>
          </a>
          <small>SECURE CHECKOUT POWERED BY STRIPE</small>
        </div>
        <img src="/assets/studio-a/black-white-pair.jpg" alt="Black and white Studio-A cyberdecks together" />
      </section>

      <footer className="deck-footer">
        <a href="/">AKIIRO®</a>
        <span>STUDIO‑A / 2026</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
