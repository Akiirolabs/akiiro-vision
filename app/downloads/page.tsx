import type { Metadata } from "next";
import "./downloads.css";

export const metadata: Metadata = {
  title: "Download Macro Kii | Akiiro",
  description: "Download Macro Kii for Mac with Apple Silicon. Get the installer and simple installation instructions.",
  alternates: { canonical: "https://akiiro.com/downloads" },
};

export default function DownloadsPage() {
  return (
    <main className="downloads-page">
      <nav aria-label="Downloads navigation"><a href="/">AKIIRO®</a><a href="/macrokii">Explore Macro Kii</a></nav>
      <section aria-labelledby="download-title">
        <div className="download-orb"><img src="/assets/agent-orb.png" alt="AO" width="1024" height="1024" /></div>
        <p className="download-eyebrow">YOUR WORKSPACE, WITH YOU.</p>
        <h1 id="download-title">Macro Kii.</h1>
        <p className="download-intro">A little less switching.<br />A little more room to think.</p>
        <a className="download-installer" href="https://downloads.akiiro.com/Macro-Kii-1.1.1-mac-arm64.dmg">Download for Mac <span>↓</span></a>
        <p className="download-version">Apple Silicon · Version 1.1.1 · .dmg</p>
        <details className="download-help">
          <summary>Installation instructions</summary>
          <ol><li>Download the installer using the button above.</li><li>Open Macro-Kii-1.1.2-mac-arm64.dmg from your Downloads folder.</li><li>Follow the installer’s instructions, then open Macro Kii.</li></ol>
          <p>This download is for Apple Silicon Macs, not Intel Macs. Need help? <a href="/support">Visit support</a>.</p>
        </details>
      </section>
      <footer><span>© 2026 AKIIRO</span><a href="/support">Support</a></footer>
    </main>
  );
}
