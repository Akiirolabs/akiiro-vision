"use client";

import { useState } from "react";
import "./desktop-details.css";

const slides = [
  ["28-agent-desktop-light.png", "AO Agent", "Think it through, right beside your work."],
  ["17-verify-evidence-closeup.png", "Verify", "Look closer at the evidence behind the answer."],
  ["26-ao-menu-desktop-light.png", "Macro Key Menu", "One small control. More ways to work."],
];

export default function MacroDesktopDetails() {
  const [active, setActive] = useState(0);
  const [file, label, caption] = slides[active];
  const change = (step: number) => setActive((current) => (current + step + slides.length) % slides.length);
  return (
    <section className="mk-desktop-details" id="desktop-details" aria-label="Desktop feature close-ups">
      <h2>The workflow, up close.</h2>
      <div className="mk-desktop-choices">
        {slides.map(([, name], index) => <button type="button" key={name} aria-pressed={active === index} onClick={() => setActive(index)}>{name}</button>)}
      </div>
      <figure>
        <img src={`/assets/macrokii/details/${file}`} width="2752" height="2064" loading="lazy" alt={`${label}: enlarged detail beside the desktop app`} />
        <figcaption aria-live="polite">{caption}</figcaption>
      </figure>
      <div className="mk-desktop-controls">
        <button type="button" onClick={() => change(-1)} aria-label="Previous feature">←</button>
        <span>{active + 1} / {slides.length}</span>
        <button type="button" onClick={() => change(1)} aria-label="Next feature">→</button>
      </div>
    </section>
  );
}
