import type { Metadata } from "next";
import "./macrokii.css";
import MacroInterface from "./MacroInterface";

export const metadata: Metadata = {
  title: "Macro Kii: A Macro-Powered Workspace | Akiiro",
  description: "Meet Macro Kii, a connected macro workspace for reusable workflows, tasks, tables, calendars, AO assistance, evidence verification, and transparent trust scoring.",
  alternates: { canonical: "https://akiiro.com/macrokii" },
  openGraph: {
    title: "Macro Kii: Your entire workspace, connected through macros",
    description: "A macro-centered workspace for moving ideas through notes, tasks, tables, calendars, research, and reusable workflows.",
    url: "https://akiiro.com/macrokii",
    type: "website",
  },
};

const featureCards = [
  {
    number: "01",
    title: "Route",
    body: "Choose a source item and a supported destination, then move work between sections without rebuilding it by hand.",
    image: "/assets/macrokii/route-new.png",
    width: 346,
    height: 306,
    alt: "Macro Kii Route panel with source section, source item, and destination section controls",
  },
  {
    number: "02",
    title: "Turbo",
    body: "Write once, choose from the destinations shown in the interface, and add the result to Workspace, Pages, or Day Documents.",
    image: "/assets/macrokii/turbo-new.png",
    width: 349,
    height: 303,
    alt: "Macro Kii Turbo panel offering Workspace, Pages, and Day Documents as destinations",
  },
  {
    number: "03",
    title: "Vault",
    body: "Keep saved text, presets, and reusable macros ready for the moment a repeated workflow returns.",
    image: "/assets/macrokii/vault-new.png",
    width: 334,
    height: 606,
    alt: "Macro Kii Vault showing saved macros, text presets, and workflow filters",
  },
];

const workspaceFeatures = [
  ["Workspace", "Project notes, rich editing, and document outlines keep long-form thinking structured."],
  ["To Do", "Task lists, descriptions, due dates, completion states, and nested work stay close to the project."],
  ["Tables", "Pages and structured records sit beside field controls, sorting, grouping, and contained content."],
  ["Calendar", "Events, dated tasks, and Day Documents share a timeline-oriented view."],
  ["Verify", "Research findings can be reviewed with evidence context and handed back into the workspace."],
  ["AO Agent", "Assistance lives beside the work and can hand output to the supported destinations shown in the app."],
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Macro Kii",
  url: "https://macrokii.com",
  applicationCategory: "BusinessApplication",
  description: "A macro-centered productivity workspace with a built-in Macro Panel, Macro Key Menu, reusable workflows, content routing, saved text, tasks, tables, calendars, research verification, and AO assistance.",
  featureList: [
    "Built-in Macro Panel",
    "Macro Key Menu",
    "Reusable macros and presets",
    "Content routing between supported sections",
    "Saved text vault",
    "Tasks, notes, tables, and calendar",
    "Evidence-based verification workspace",
    "Evidence trust scoring with source context",
    "AO Agent output handoffs",
  ],
  screenshot: "https://akiiro.com/assets/macrokii/tables.png",
};

export default function MacroKiiPage() {
  return (
    <main className="mk-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav className="mk-nav" aria-label="Macro Kii navigation">
        <a href="/" className="mk-brand">AKIIRO®</a>
        <span>AO / ADVANCED OPERATOR</span>
        <a href="https://macrokii.com" target="_blank" rel="noopener noreferrer">Launch Macro Kii</a>
      </nav>

      <header className="mk-hero">
        <div className="mk-kicker">MACRO-CENTERED WORKSPACE / 2026</div>
        <div className="mk-hero-copy">
          <h1>Your entire workspace.<br /><em>Connected through macros.</em></h1>
          <p>Macro Kii brings notes, tasks, tables, calendars, research, saved text, and assisted work into one interface. It then connects the supported paths between them through AO, the Macro Panel, and the Macro Key Menu.</p>
          <div className="mk-actions">
            <a className="mk-primary" href="https://macrokii.com" target="_blank" rel="noopener noreferrer">Open Macro Kii</a>
            <a href="#experience">See the system ↓</a>
          </div>
        </div>
        <figure className="mk-hero-visual">
          <img src="/assets/macrokii/macro-panel-filled.png" width="218" height="240" alt="Macro Kii circular Macro Panel with six workflow controls" />
          <figcaption>The Macro Panel / one control point for the workspace</figcaption>
        </figure>
        <div className="mk-hero-index"><span>01</span><span>MACRO KII</span></div>
      </header>

      <section className="mk-intro" id="experience">
        <div className="mk-section-label">01 / THE CENTER</div>
        <div>
          <p className="mk-eyebrow">A built-in macro panel</p>
          <h2>Less switching.<br /><em>More continuity.</em></h2>
        </div>
        <div className="mk-intro-side">
          <p className="mk-lede">The Macro Panel stays close to the work. Open the Macro Key Menu, start a route, add content through Turbo, or return to saved workflows in the Vault. The interface is not a separate automation dashboard. It is part of the workspace itself.</p>
          <a className="mk-panel-launch" href="https://macrokii.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/macrokii/macro-panel-outline.png" width="337" height="303" alt="" />
            <span>Open Macro Kii</span>
          </a>
        </div>
      </section>

      <section className="mk-proof-panel">
        <figure>
          <img src="/assets/macrokii/macro-key-menu.png" width="360" height="288" loading="lazy" alt="Macro Key Menu with Macro, Route, Turbo, Vault, and Preferences" />
          <figcaption>Macro Key Menu / Macro, Route, Turbo, Vault, Preferences</figcaption>
        </figure>
        <div>
          <span>AO / AKIIRO OPERATOR</span>
          <h2>A menu for movement.</h2>
          <p>The Macro Key Menu makes the workspace’s connected actions legible. Macro selections, presets, saved text, custom workflows, Route, and Turbo are organized around a single idea: repeated work should become reusable.</p>
          <ul>
            <li>Main Macro selections remain immediately available.</li>
            <li>Saved macros and text presets live in the Vault.</li>
            <li>Route and Turbo expose only the destinations supported by their interfaces.</li>
          </ul>
        </div>
      </section>

      <section className="mk-feature-grid" aria-label="Macro Kii workflow tools">
        {featureCards.map((feature) => (
          <article key={feature.title}>
            <div className="mk-feature-copy"><span>{feature.number}</span><h3>{feature.title}</h3><p>{feature.body}</p></div>
            <img src={feature.image} width={feature.width} height={feature.height} alt={feature.alt} loading="lazy" />
          </article>
        ))}
      </section>

      <MacroInterface />

      <section className="mk-workspace">
        <div className="mk-section-label">03 / ONE WORKSPACE</div>
        <div className="mk-workspace-head">
          <h2>Every section has a purpose.<br /><em>Macros give them momentum.</em></h2>
          <p>Macro Kii combines familiar work surfaces with explicit paths for reuse and handoff. The supplied product screens demonstrate the following capabilities.</p>
        </div>
        <div className="mk-workspace-list">
          {workspaceFeatures.map(([title, body], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="mk-gallery" aria-label="Macro Kii product walkthrough">
        <figure className="wide"><img src="/assets/macrokii/tasks.png" width="1920" height="953" loading="lazy" alt="Macro Kii To Do workspace with project tasks, descriptions, and due date controls" /><figcaption>To Do / projects, tasks, descriptions, dates</figcaption></figure>
        <figure><img src="/assets/macrokii/tables.png" width="885" height="493" loading="lazy" alt="Macro Kii Tables workspace with projects and structured fields" /><figcaption>Tables / structured work without leaving the system</figcaption></figure>
        <figure><img src="/assets/macrokii/calendar.png" width="1920" height="958" loading="lazy" alt="Macro Kii calendar displaying events, tasks, and Day Documents" /><figcaption>Calendar / events, dated tasks, Day Documents</figcaption></figure>
      </section>

      <section className="mk-agent">
        <div className="mk-section-label">04 / ASSISTANCE IN CONTEXT</div>
        <div className="mk-agent-copy">
          <h2>AI supports the workflow.<br /><em>It does not define it.</em></h2>
          <div>
            <p>A quick answer can sound certain and still leave out what matters. Macro Kii’s Verify workspace uses a specialized verification model to examine claims against multiple sources, expose uncertainty, and return an evidence trust score with the reasoning kept in view.</p>
            <p>It is built for consultants, researchers, analysts, and demanding study where “probably right” is not enough. The score is not a promise of infallibility. It is a clear signal of how well the available evidence supports a finding, so professionals can review the basis, recognize the limits, and move forward with greater confidence.</p>
          </div>
        </div>
        <div className="mk-agent-media">
          <figure><img src="/assets/macrokii/verify-score-new.png" width="802" height="759" loading="lazy" alt="Macro Kii verification findings with a 90 out of 100 evidence trust score" /><figcaption>Verify / findings with evidence context</figcaption></figure>
          <div className="mk-agent-side">
            <figure><img src="/assets/macrokii/ao-destinations-new.png" width="252" height="151" loading="lazy" alt="Alternate top Macro Panel with six main macro controls" /><figcaption>Top Macro Panel / another view, another way in</figcaption></figure>
            <figure><img src="/assets/macrokii/ao-agent-control.png" width="248" height="215" loading="lazy" alt="AO Agent control for opening the side chat or hiding the agent" /><figcaption>AO Agent / present when needed, quiet when not</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="mk-difference">
        <div className="mk-section-label">05 / THE DIFFERENCE</div>
        <div className="mk-difference-grid">
          <h2>Not a hardware macro pad.<br />Not a keyboard remapper.<br /><em>A connected workspace.</em></h2>
          <div>
            <p>Macro Kii is designed around in-app workflow control. Its macros operate across the supported sections shown in the product: notes, tasks, tables, calendar content, saved text, research findings, and designated output destinations.</p>
            <p>That makes it different from OS-wide automation, gaming macros, Excel/VBA scripting, and shortcut-only command launchers. Macro Kii’s focus is the work already happening inside Macro Kii.</p>
          </div>
        </div>
      </section>

      <section className="mk-use-cases">
        <div className="mk-section-label">06 / PRACTICAL FLOWS</div>
        <div className="mk-use-grid">
          <article><span>RESEARCH → WORKSPACE</span><h3>Check the evidence. Keep the useful part.</h3><p>Review a Verify result, then send the finding into a supported workspace destination.</p></article>
          <article><span>SAVED TEXT → DOCUMENT</span><h3>Turn repeated language into a reusable starting point.</h3><p>Keep text presets in the Vault and bring them back when a familiar document or note returns.</p></article>
          <article><span>TASK → CALENDAR</span><h3>See dated work where time becomes visible.</h3><p>Work with task descriptions and due dates, then view dated items alongside calendar events and Day Documents.</p></article>
        </div>
      </section>

      <section className="mk-evidence">
        <div className="mk-section-label">07 / EVIDENCE MAP</div>
        <h2>What the product screens establish.</h2>
        <div className="mk-evidence-table">
          <div><strong>Visible now</strong><span>Macro Panel, Macro Key Menu, Route, Turbo, Vault, tasks, tables, calendar, Verify, AO output destinations, dark and light themes, compact panel layout.</span></div>
          <div><strong>Confirmed by supplied context</strong><span>AO means Advanced Operator; macros and MKM are the connective framework; the product is intended to reduce repeated typing and cross-section friction.</span></div>
          <div><strong>Needs proof before broader claims</strong><span>Performance, reliability, security, pricing, platform availability, every possible route, and any integration not visibly shown or separately documented.</span></div>
        </div>
      </section>

      <section className="mk-faq">
        <div className="mk-section-label">08 / QUESTIONS</div>
        <h2>Macro Kii, clearly.</h2>
        <div className="mk-faq-list">
          <details><summary>What is Macro Kii?</summary><p>Macro Kii is a macro-centered productivity workspace. It combines work surfaces such as notes, tasks, tables, calendars, saved text, and research with a built-in Macro Panel and Macro Key Menu.</p></details>
          <details><summary>What does the Macro Panel do?</summary><p>It provides a persistent control point for opening macro-centered actions. The demonstrated menu includes Macro, Route, Turbo, Vault, and Preferences.</p></details>
          <details><summary>What is the Macro Key Menu?</summary><p>The Macro Key Menu, or MKM, is the organized interface for choosing reusable macros and opening connected workflow tools inside the app.</p></details>
          <details><summary>Is Macro Kii a keyboard macro or hardware macro-pad app?</summary><p>No. The product shown here focuses on macros and content movement within its own connected workspace, not keyboard remapping, gaming macros, or programmable hardware keys.</p></details>
          <details><summary>Where can Macro Kii send content?</summary><p>The screenshots show specific destinations such as Workspace, Pages, Day Documents, To Do, Tables, Verify, Calendar, and Workspace Note. Availability depends on the workflow being used.</p></details>
          <details><summary>What role does AO Agent play?</summary><p>AO Agent is supporting functionality. It can assist beside the work and hand outputs to destinations shown in the interface; the macro framework remains the product’s center.</p></details>
          <details><summary>What does the evidence trust score mean?</summary><p>The evidence trust score indicates how strongly the sources examined by Verify support a finding. Macro Kii keeps supporting context and uncertainty visible so the score can guide professional judgment rather than replace it.</p></details>
        </div>
      </section>

      <footer className="mk-footer">
        <span>MACRO KII / AO</span>
        <h2>Build the flow once.<br /><em>Keep the work moving.</em></h2>
        <a href="https://macrokii.com" target="_blank" rel="noopener noreferrer">Launch Macro Kii</a>
        <div><a href="/">Back to Akiiro</a><span>© 2026 AKIIRO</span></div>
      </footer>
    </main>
  );
}
