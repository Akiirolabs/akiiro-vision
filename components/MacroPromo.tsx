import "./macro-promo.css";

export default function MacroPromo() {
  return (
    <section className="home-macro-promo" aria-label="Macro Kii workspace">
        <img
          src="/assets/macrokii/promo-ios/01-desktop-workspace.png"
          alt="Macro Kii: Think clearly. Build your next idea. Desktop workspace."
          width={1920}
          height={1600}
          loading="lazy"
          decoding="async"
        />
    </section>
  );
}
