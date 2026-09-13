import type { Metadata } from "next";
import Link from "next/link";
import { knowledgeFaqs, knowledgeSections } from "../../lib/site-knowledge";
import "./answers.css";

export const metadata: Metadata = {
  title: "Answers | Akiiro Internal Reference",
  description: "Akiiro product and support reference.",
  robots: { index: false, follow: false, nocache: true },
};

export default function AnswersPage() {
  return (
    <main className="answers-page">
      <nav><Link href="/">AKIIRO®</Link><span>INTERNAL REFERENCE / 2026</span></nav>
      <header>
        <p>AO / KNOWLEDGE SOURCE</p>
        <h1>Answers,<br /><em>with a source.</em></h1>
        <div>This unlisted page is the shared reference for the Akiiro website agent. Keep it current, precise, and limited to claims the product can support.</div>
      </header>
      <section className="answers-sections" aria-label="Product reference">
        {knowledgeSections.map((section, index) => (
          <article key={section.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><h2>{section.title}</h2><p>{section.summary}</p><ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
          </article>
        ))}
      </section>
      <section className="answers-faq">
        <p>COMMON QUESTIONS</p><h2>What AO should know.</h2>
        {knowledgeFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
      </section>
      <footer><Link href="/">Back to Akiiro</Link><span>UNLISTED / NOINDEX</span><span>© 2026 AKIIRO</span></footer>
    </main>
  );
}
