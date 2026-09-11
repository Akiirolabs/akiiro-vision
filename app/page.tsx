"use client";

import { useEffect, useMemo, useState } from "react";

const checkoutUrl = "https://buy.stripe.com/14AbJ3874afa4n182mc3m01";

type Work = { src: string; title: string; tag: string; subtitle: string; href?: string };

const works: Work[] = [
  { src: "/assets/iphoneapp.png", title: "Mind Map App on IOS", tag: "IOS", subtitle: "" },
  { src: "/assets/mind-map.png", title: "Akiiro Map App Updates", tag: "Mind map", subtitle: "" },
  { src: "/assets/3d.gif", title: "Design with software built to print", tag: "Akiiro 3d", subtitle: "" },
  { src: "/assets/iphone-img2.png", title: "Notes and Studio features added to Akiiro App", tag: "Updates", subtitle: "" },
  { src: "/assets/studio-a/object-05-front.jpeg", title: "Studio-A Connectivity", tag: "Product", subtitle: "" },
  { src: "/assets/studio-am/object-06-approved-baseline.png", title: "Studio-AM", tag: "Product", subtitle: "Coming soon. The studio, set free." },
  { src: "/assets/studio-a/object-08-move-with-your-ideas.jpeg", title: "Move with Your Ideas", tag: "Studio-A", subtitle: "" },
  { src: "/assets/macrokii/interface-dark-workspace.png", title: "Macro Kii", tag: "Macro app", subtitle: "A macro app that connects notes, tasks, tables, calendars, research, and reusable workflows inside one continuous workspace.", href: "/macrokii" },
  { src: "/assets/macrokii/macro-panel-filled.png", title: "Macro Panel", tag: "Macro Kii", subtitle: "One quiet control point for the actions that keep work moving.", href: "/macrokii#interface" },
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
  const menuItems = [
    { label: "Home", href: "#top" },
    { label: "Products", href: "#objects" },
    { label: "Macro Kii", href: "/macrokii" },
    { label: "Cyberdecks", href: "/cyberdecks" },
    { label: "Shop", href: checkoutUrl, external: true },
  ];

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
        <div className="menu-count">01—05 / Index</div>
        {menuItems.map((item, index) => (
          <a
            href={item.href}
            key={item.label}
            onClick={() => setMenuOpen(false)}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            <small>0{index + 1}</small>{item.label}
          </a>
        ))}
      </aside>

      <section className="header-visual" id="top" aria-label="Akiiro software without limits">
        <img src="/og-software.png" alt="Akiiro — Software without limits" />
        <span className="header-studio">Studio</span>
      </section>

      <a className="deck-teaser" href="/cyberdecks" aria-label="Explore the Studio-A cyberdeck">
        <div className="deck-teaser-copy">
          <span>AKIIRO HARDWARE / 001</span>
          <h2>Studio‑A</h2>
          <p>A studio that moves with the idea.</p>
          <strong>Discover the cyberdeck ↗</strong>
        </div>
        <div className="deck-teaser-image">
          <img className="deck-teaser-photo" src="/assets/studio-a/front-cover-composite.png" alt="Black Studio-A monitor secured inside its protective sleeve" />
        </div>
      </a>

      <section className="hero">
        <div className="hero-meta"><span>NEW YORK / {clock}</span><span>SCROLL TO DISCOVER ↓</span></div>
        <div className="hero-copy">
          <p className="eyebrow">A spatial interface for human imagination</p>
          <h1>Ideas deserve<br /><em>dimension.</em></h1>
          <p className="intro">AO Agent. Capture Intelligence.</p>
          <div className="hero-macro-links">
            <a className="hero-launch" href="https://macrokii.com" target="_blank" rel="noopener noreferrer">Launch Macro</a>
            <a className="hero-info" href="/macrokii#interface" aria-label="Learn about the Macro Kii interface">i</a>
          </div>
        </div>
        <div className="hero-object" style={{ transform: `translate3d(${(cursor.x - 50) * .11}px, ${(cursor.y - 50) * .08}px, 0) rotate(${(cursor.x - 50) * .025}deg)` }}>
          <div className="halo" />
          <div className="frame"><img src="/assets/disc.gif" alt="Animated Akiiro symbol" /></div>
          <div className="orbit orbit-one"><img src="/assets/sun.webp" alt="" /></div>
          <div className="orbit orbit-two"><img src="/assets/moon.png" alt="" /></div>
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

      <section className="connectivity-feature" aria-label="Studio-A connectivity">
        <img src="/assets/studio-a/object-05-connectivity.jpeg" alt="Studio-A connectivity panel with HDMI, USB-C, power, and camera connections" />
        <p>Built to connect. Designed to arrive.</p>
      </section>

      <section className="objects" id="objects">
        <div className="section-label light">02 / Selected objects</div>
        <div className={`gallery-stage object-${active + 1}`}>
          <div className="gallery-copy">
            <div className="gallery-number">0{active + 1}<sup>/09</sup></div>
            <p>{selected.tag}</p>
            <h2>{selected.title}</h2>
            {selected.subtitle && <div className="gallery-subtitle">{selected.subtitle}</div>}
            <div className="gallery-controls">
              <button onClick={() => setActive((active + works.length - 1) % works.length)} aria-label="Previous work">←</button>
              <button onClick={() => setActive((active + 1) % works.length)} aria-label="Next work">→</button>
            </div>
          </div>
          <a className={`gallery-image object-${active + 1}`} key={selected.src} href={selected.href} aria-label={selected.href ? `Explore ${selected.title}` : undefined}>
            <img src={selected.src} alt={selected.title} />
            <span>A K I I R O </span>
          </a>
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
        <div className="system-heading"><h2>One space.<br />Every scale.</h2><p>Move from a thought to a shared world without changing the way you think.</p></div>
        <div className="system-grid">
          {[
            { number: '01', title: 'App Store', description: 'Download Akiiro Studio App for Productivity', href: 'https://apps.apple.com/us/app/akiiro/id6746683780', external: true },
            { number: '02', title: 'Akiiro IO', description: 'Try Akiiro IO Here ', href: 'https://app.akiiro.com', external: true },
            { number: '03', title: 'Akiiro 3D [Beta]', description: 'Shape complexity into something clear.', href: 'https://3d.akiiro.com', external: true },
            { number: '04', title: 'CyberDeck: Studio-A', description: 'Built for Mobility and Efficiency', href: '/cyberdecks', external: false },
            { number: '05', title: 'Macro Kii', description: 'A macro app that streamlines every workflow. Type less and do more. Powered by AO using MKM frameworks.', href: '/macrokii', external: false },
          ].map((item) => (
            <a className="system-card" href={item.href} key={item.number} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined}>
              <small>{item.number}</small><div className="pulse" /><h3>{item.title}</h3><p>{item.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="home-deck" id="cyberdecks">
        <div className="home-deck-head">
          <span>04 / Akiiro Hardware</span>
          <a href="/cyberdecks">View Studio‑A <span>↗</span></a>
        </div>

        <div className="home-deck-intro">
          <p>CYBERDECK / STUDIO‑A</p>
          <h2>Your studio.<br /><em>Unbound.</em></h2>
          <p className="home-deck-lede">A compact creative system shaped around mobility, focus, and the freedom to work beyond a fixed desk.</p>
        </div>

        <a className="home-deck-hero" href="/cyberdecks" aria-label="Explore the Studio-A cyberdeck">
          <img src="/assets/studio-a/hero-black.png" alt="Black Studio-A cyberdeck shown in profile" />
          <div className="home-deck-caption"><span>STUDIO‑A / BLACK</span><span>EXPLORE THE OBJECT ↗</span></div>
        </a>

        <div className="home-deck-grid">
          <figure>
            <img src="/assets/studio-a/white-front-flat.png" alt="White Studio-A cyberdeck front view with a smooth top edge" />
            <figcaption>LIGHT / FRONT</figcaption>
          </figure>
          <div className="home-deck-principle">
            <span>01</span>
            <p>Less equipment.<br />More room to think.</p>
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">Shop Studio‑A ↗</a>
          </div>
          <figure>
            <img src="/assets/studio-a/black-white-pair.jpg" alt="Black and white Studio-A cyberdecks" />
            <figcaption>DARK + LIGHT / TWO FINISHES</figcaption>
          </figure>
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
