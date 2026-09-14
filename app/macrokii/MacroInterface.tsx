"use client";

import { useState } from "react";

const scenes = [
  {
    id: "calendar",
    label: "Calendar",
    note: "Move from the Macro Panel into time-based work without leaving the workspace.",
    image: "/assets/macrokii/promo-ios/06-desktop-calendar.png",
    width: 1920,
    height: 1600,
    mode: "dark",
  },
  {
    id: "verify",
    label: "Verify",
    note: "Review evidence and supporting sources alongside the work.",
    image: "/assets/macrokii/promo-ios/05-desktop-verify.png",
    width: 1920,
    height: 1600,
    mode: "dark",
  },
  {
    id: "tasks",
    label: "To Do",
    note: "Organize tasks, descriptions, and due dates in a light workspace.",
    image: "/assets/macrokii/promo-ios/02-desktop-tasks.png",
    width: 1920,
    height: 1600,
    mode: "light",
  },
  {
    id: "workspace",
    label: "Workspace",
    note: "Keep the same connected controls when the interface shifts into its dark working mode.",
    image: "/assets/macrokii/promo-ios/01-desktop-workspace.png",
    width: 1920,
    height: 1600,
    mode: "dark",
  },
];

export default function MacroInterface() {
  const [active, setActive] = useState(0);
  const scene = scenes[active];

  return (
    <section className={`mk-interface is-${scene.mode}`} id="interface" aria-labelledby="interface-title">
      <div className="mk-section-label">02 / THE INTERFACE</div>
      <div className="mk-interface-head">
        <div>
          <p>Quiet form. Immediate function.</p>
          <h2 id="interface-title">One system.<br /><em>Four working states.</em></h2>
        </div>
        <p>Macro Kii keeps its controls restrained so the work remains primary. Choose a view to move through the same workspace in dark and light modes.</p>
      </div>

      <div className="mk-interface-tabs" role="tablist" aria-label="Macro Kii interface views">
        {scenes.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls="mk-interface-view"
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>{item.label}
          </button>
        ))}
      </div>

      <div className="mk-interface-stage" id="mk-interface-view" role="tabpanel">
        <img key={scene.image} src={scene.image} width={scene.width} height={scene.height} alt={`${scene.label} view in Macro Kii`} />
        <div className="mk-interface-caption"><span>{scene.mode} mode</span><p>{scene.note}</p></div>
      </div>
    </section>
  );
}
