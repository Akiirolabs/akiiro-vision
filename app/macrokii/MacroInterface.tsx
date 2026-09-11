"use client";

import { useState } from "react";

const scenes = [
  {
    id: "calendar",
    label: "Calendar",
    note: "Move from the Macro Panel into time-based work without leaving the workspace.",
    image: "/assets/macrokii/interface-dark-calendar.png",
    width: 1917,
    height: 953,
    mode: "dark",
  },
  {
    id: "verify",
    label: "Verify",
    note: "Review evidence in a light workspace built around the task—not a separate AI destination.",
    image: "/assets/macrokii/interface-light-verify.png",
    width: 1919,
    height: 956,
    mode: "light",
  },
  {
    id: "panel",
    label: "Macro Panel",
    note: "Bring the actions you repeat into reach while the source material stays visible.",
    image: "/assets/macrokii/interface-light-panel.png",
    width: 1920,
    height: 957,
    mode: "light",
  },
  {
    id: "workspace",
    label: "Workspace",
    note: "Keep the same connected controls when the interface shifts into its dark working mode.",
    image: "/assets/macrokii/interface-dark-workspace.png",
    width: 1918,
    height: 956,
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
