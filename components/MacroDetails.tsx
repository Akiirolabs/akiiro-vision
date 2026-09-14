import "./macro-details.css";

const details = [
  ["33-trust-score-phone.png", "Verify", "A score. And the reasons.", "Look beyond the number. Review the evidence and the context behind each finding.", "assistance"],
  ["42-table-tools.png", "Tables", "Give your research structure.", "Keep records, reviewers, and status together, with the controls close at hand.", "workflow-details"],
  ["22-macro-panel-desktop-night.png", "Macro Panel", "Six shortcuts. One focused space.", "Reach the actions you use without leaving the work in front of you.", "experience"],
  ["28-agent-desktop-light.png", "AO Agent", "Think it through, beside your work.", "Keep the conversation and the document in view, with assistance in context.", "assistance"],
];

export default function MacroDetails() {
  return (
    <section className="home-macro-details" aria-labelledby="macro-details-title">
      <header><p>MACRO Kii / A CLOSER LOOK</p><h2 id="macro-details-title">The details make the difference.</h2><a href="/macrokii">Explore Macro Kii</a></header>
      <div className="home-macro-details-grid">
        {details.map(([file, label, title, description, anchor]) => (
          <a href={`/macrokii#${anchor}`} key={file}>
            <img src={`/assets/macrokii/details/${file}`} width={label === "Verify" ? 1242 : 2752} height={label === "Verify" ? 2688 : 2064} alt={`${label}: enlarged feature detail alongside the app`} loading="lazy" />
            <div><small>{label}</small><h3>{title}</h3><p>{description}</p></div>
          </a>
        ))}
      </div>
    </section>
  );
}
