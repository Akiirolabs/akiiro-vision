"use client";

import { useEffect, useMemo, useState } from "react";

const works = [
  { src: "/assets/iphone-img.png", title: "Mind Map App on IOS", tag: "IOS" },
  { src: "/assets/mind-map.png", title: "Akiiro Map App Updates", tag: "Mind map" },
  { src: "/assets/studio-camera.gif", title: "CyberDecks", tag: "Studio" },
  { src: "/assets/iphone-img2.png", title: "Notes and Studio features added to Akiiro App", tag: "Updates" },
  { src: "/assets/product-shot.png", title: "CyberDeck Studio-A", tag: "Product" },
  { src: "/assets/labs-cycle.gif", title: "Endless iteration", tag: "Labs" },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: 50, y: 42 });
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () => setClock(new Intl.DateTimeFormat("en-US", {
      hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "America/New_York",
    }).format(new Date()));
    tick();
    const timer = window.setInterval(tick, 30000);
    return () => window.clearInterval(timer);
  }, []);

  const selected = useMemo(() => works[active], [active]);

  return (
    <main onPointerMove={(event) => setCursor({
      x: (event.clientX / window.innerWidth) * 100,
      y: (event.clientY / window.innerHeight) * 100,
    })}>
      <div className="ambient" style={{ "--x": `${cursor.x}%`, "--y": `${cursor.y}%` } as React.CSSProperties} />

      <nav className="nav">
        <a className="wordmark" href="#top" aria-label="Akiiro Vision home">AKIIRO<span>®</span></a>
        <div className="nav-center">Independent intelligence / 2026</div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>
          <span>{menuOpen ? "Close" : "Index"}</span><i /><i />
        </button>
      </nav>

      <aside className={`menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="menu-count">00—04</div>
        {['Manifesto', 'Objects', 'System', 'Contact'].map((item, index) => (
          <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenuOpen(false)}>
            <small>0{index + 1}</small>{item}
          </a>
        ))}
      </aside>

      <section className="header-visual" id="top" aria-label="Akiiro software without limits">
        <img src="/og-software.png" alt="Akiiro — Software without limits" />
      </section>

      <section className="hero">
        <div className="hero-meta"><span>NEW YORK / {clock}</span><span>SCROLL TO DISCOVER ↓</span></div>
        <div className="hero-copy">
          <p className="eyebrow">A spatial interface for human imagination</p>
          <h1>Ideas deserve<br /><em>dimension.</em></h1>
          <p className="intro">Akiiro is a Software Development Agency on a mission to empower creatives.</p>
        </div>
        <div className="hero-object" style={{ transform: `translate3d(${(cursor.x - 50) * .11}px, ${(cursor.y - 50) * .08}px, 0) rotate(${(cursor.x - 50) * .025}deg)` }}>
          <div className="halo" />
          <div className="frame"><img src="/assets/akiiro-icon.png" alt="Animated Akiiro symbol" /></div>
          <div className="orbit orbit-one"><img src="/assets/sea-icon.png" alt="" /></div>
          <div className="orbit orbit-two"><img src="/assets/sea-icon.png" alt="" /></div>
          <div className="orbit orbit-three"><img src="/assets/disc-icon.png" alt="" /></div>
        </div>
        <div className="hero-index"><span>01</span><span>∞</span></div>
      </section>

      <section className="manifesto" id="manifesto">
        <div className="section-label">01 / Manifesto</div>
        <p>Designed for the creative.</p>
        <h2>Built for the way your mind <span>actually moves.</span></h2>
        <div className="manifesto-note">A living field where ideas recognize each other.</div>
      </section>

      <section className="objects" id="objects">
        <div className="section-label light">02 / Selected objects</div>
        <div className={`gallery-stage object-${active + 1}`}>
          <div className="gallery-copy">
            <div className="gallery-number">0{active + 1}<sup>/06</sup></div>l
            <p>{selected.tag}</p>
            <h2>{selected.title}</h2>
            <div className="gallery-controls">
              <button onClick={() => setActive((active + works.length - 1) % works.length)} aria-label="Previous work">←</button>
              <button onClick={() => setActive((active + 1) % works.length)} aria-label="Next work">→</button>
            </div>
          </div>
          <div className={`gallery-image object-${active + 1}`} key={selected.src}>
            <img src={selected.src} alt={selected.title} />
            <span>A K I I R O </span>
          </div>
        </div>
        <div className="gallery-strip">
          {works.map((work, index) => (
            <button key={work.src} className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`View ${work.title}`}>
              <img src={work.src} alt="" /><span>0{index + 1}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="system" id="system">
        <div className="section-label">03 / The system</div>
        <div className="system-heading"><h2>One space.<br />Every scale.</h2><p>Move from a half-formed thought to a shared world without changing the way you think.</p></div>
        <div className="system-grid">
          {[
            { number: '01', title: 'App Store', description: 'Download Akiiro Studio App for Productivity', href: 'https://apps.apple.com/us/app/akiiro/id6746683780', external: true },
            { number: '02', title: 'Akiiro IO', description: 'Try Akiiro IO Here ', href: 'https://app.akiiro.com', external: true },
            { number: '03', title: 'Akiiro 3D', description: 'Shape complexity into something clear.', href: 'https://3d.akiiro.com', external: true },
            { number: '04', title: 'CyberDeck: Studio-A', description: 'Built for Mobility and Efficiency', href: '/cyberdecks', external: false },
          ].map((item) => (
            <a className="system-card" href={item.href} key={item.number} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined}>
              <small>{item.number}</small><div className="pulse" /><h3>{item.title}</h3><p>{item.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-image"><img src="/assets/atlas-agent.gif" alt="Atlas digital agent in motion" /></div>
        <div className="contact-copy"><p>Intelligence should feel less artificial.</p><h2>Enter the<br /><em>thinking space.</em></h2><a href="mailto:hello@akiiro.co">Request access <span>↗</span></a></div>
        <footer><a href="#top">AKIIRO®</a><span>© 2026 / ALL SYSTEMS CURIOUS</span><a href="#top">BACK TO TOP ↑</a></footer>
      </section>
    </main>
  );
}
