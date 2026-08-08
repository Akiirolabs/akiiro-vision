import type { Metadata } from "next";
import "./cyberdecks.css";

const checkoutUrl = "https://buy.stripe.com/14AbJ3874afa4n182mc3m01";

export const metadata: Metadata = {
  title: "Studio-A Cyberdeck — Akiiro",
  description: "Meet Studio-A, a portable creative system built for mobility and efficiency.",
};

export default function CyberdecksPage() {
  return (
    <main className="deck-page" id="top">
      <nav className="deck-nav">
        <a className="deck-wordmark" href="/" aria-label="Return to Akiiro home">AKIIRO<span>®</span></a>
        <span>CYBERDECK / STUDIO-A</span>
        <a href="#order">ORDER ↘</a>
      </nav>

      <section className="deck-hero">
        <div className="deck-hero-copy">
          <p className="deck-kicker">PORTABLE CREATIVE SYSTEM / 001</p>
          <h1>Studio‑A</h1>
          <p className="deck-lede">A workstation built to move. Studio‑A brings focused computing and tactile control into one compact creative system.</p>
          <a className="deck-buy deck-buy-dark" href={checkoutUrl} target="_blank" rel="noopener noreferrer">
            Buy Studio‑A <span>↗</span>
          </a>
          <small>SECURE CHECKOUT POWERED BY STRIPE</small>
        </div>
        <figure className="deck-product">
          <img src="/assets/product-shot.png" alt="Akiiro Studio-A cyberdeck" />
          <figcaption><span>FIG. 01</span><span>BUILT FOR MOBILITY + EFFICIENCY</span></figcaption>
        </figure>
      </section>

      <section className="deck-statement">
        <p>THE MACHINE BETWEEN AN IDEA AND ITS NEXT FORM.</p>
        <h2>Designed to keep your tools close and your attention closer.</h2>
      </section>

      <section className="deck-details">
        <div className="deck-detail">
          <span>01 / MOVE</span>
          <h3>Made to travel.</h3>
          <p>A compact format for creating wherever the work takes you.</p>
        </div>
        <div className="deck-detail">
          <span>02 / FOCUS</span>
          <h3>Purpose over noise.</h3>
          <p>A dedicated environment that keeps the work in front of you.</p>
        </div>
        <div className="deck-detail">
          <span>03 / MAKE</span>
          <h3>Built for output.</h3>
          <p>A physical system designed around an active creative practice.</p>
        </div>
      </section>

      <section className="deck-motion">
        <div className="deck-motion-copy">
          <span>AKIIRO HARDWARE / STUDIO SERIES</span>
          <h2>Ideas should not wait for a desk.</h2>
        </div>
        <img src="/assets/studio-camera.gif" alt="Studio-A cyberdeck in motion" />
      </section>

      <section className="deck-order" id="order">
        <p>STUDIO-A / AVAILABLE NOW</p>
        <h2>Take your studio<br />with you.</h2>
        <a className="deck-buy deck-buy-light" href={checkoutUrl} target="_blank" rel="noopener noreferrer">
          Buy Studio‑A <span>↗</span>
        </a>
        <small>YOU WILL CONTINUE TO A SECURE STRIPE CHECKOUT.</small>
      </section>

      <footer className="deck-footer">
        <a href="/">AKIIRO®</a>
        <span>STUDIO-A / 2026</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
