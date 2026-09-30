"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { defaultAgentUI, isAgentUI, type AgentUI } from "../lib/agent-ui";

type ChatMessage = { role: "user" | "assistant"; content: string };

const clearFailurePattern = /\b(broken|breaks?|bug(?:gy)?|error|glitch(?:y)?|malfunction(?:ing)?|not working|stopped working|doesn['’]?t work|won['’]?t work|failed|failure|crash(?:ed|ing)?|freez(?:e|es|ing)|frozen|stuck|unresponsive|disconnect(?:ed|ing)?|won['’]?t (?:start|open|load|connect|turn on)|can['’]?t (?:start|open|load|connect|access|use))\b/i;
const negativeFailurePattern = /\b(?:not|isn['’]?t|doesn['’]?t|won['’]?t|can['’]?t|will not|cannot|failed to|unable to)\b.{0,40}\b(?:work(?:ing)?|start(?:ing)?|open(?:ing)?|load(?:ing)?|connect(?:ing)?|respond(?:ing)?|turn(?:ing)? on|power(?:ing)? on)\b/i;
const genericProblemPattern = /\b(issue|problem|unavailable|wrong with)\b/i;
const techContextPattern = /\b(tech(?:nology)?|device|hardware|software|app|application|website|site|screen|display|touchscreen|computer|cyberdeck|studio-a|macro kii|akiiro|io vault|mind map|3d|usb|hdmi|ethernet|wifi|network|connection|connectivity|login|feature|button|page|update|install|boot|power|port|keyboard|agent|calendar|workspace|verify)\b/i;
const resolvedPattern = /\b(fixed|resolved|solved|working now|works now|it works|all good now|problem is gone|issue is gone|no longer (?:broken|frozen|stuck)|never mind.{0,20}(?:works|fixed))\b/i;

const greeting: ChatMessage = {
  role: "assistant",
  content: "Ask me about Akiiro, Macro Kii, Studio-A, or the connected workspace.",
};

export default function AkiiroAgent() {
  const [open, setOpen] = useState(false);
  const [ui, setUI] = useState<AgentUI>(defaultAgentUI);
  const labels = ui.labels;
  const [messages, setMessages] = useState<ChatMessage[]>([greeting]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [supportMode, setSupportMode] = useState(false);
  const [supportStatus, setSupportStatus] = useState<"idle" | "saved" | "failed">("idle");
  const [supportTicketId, setSupportTicketId] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, open]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const content = input.trim();
    if (!content || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content }];
    const isResolved = supportMode && resolvedPattern.test(content);
    const recentContext = [...messages.slice(-4).map((message) => message.content), content].join(" ");
    const isSupportRequest = !isResolved && (clearFailurePattern.test(content) || negativeFailurePattern.test(content) || (genericProblemPattern.test(content) && techContextPattern.test(recentContext)));
    if (isResolved) {
      setSupportMode(false);
      setSupportStatus("idle");
    }
    if (isSupportRequest) {
      setSupportMode(true);
      setSupportStatus("idle");
    }
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(1), supportMode, supportTicketId }),
      });
      const data = (await response.json()) as { answer?: string; ui?: unknown; error?: string; supportMode?: boolean; supportSaved?: boolean; supportTicketId?: string | null };
      if (!response.ok || !data.answer || !isAgentUI(data.ui)) throw new Error(data.error || "Chat request failed");
      setUI(data.ui);
      setSupportMode(Boolean(data.supportMode));
      if (data.supportTicketId === null) setSupportTicketId(null);
      if (data.supportTicketId) setSupportTicketId(data.supportTicketId);
      if (data.supportMode) {
        setSupportStatus(data.supportSaved ? "saved" : "failed");
      } else {
        setSupportStatus("idle");
        if (isResolved) setSupportTicketId(null);
      }
      setMessages((current) => [...current, { role: "assistant", content: data.answer! }]);
    } catch {
      setMessages((current) => [...current, {
        role: "assistant",
        content: labels.unavailable,
      }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <aside className={`ak-agent ${supportMode ? "is-support" : ""}`} aria-label={labels.askAO} lang={ui.language} dir={ui.direction}>
      {open && (
        <section className="ak-agent-panel" id="ak-agent-panel" aria-label={labels.chatLabel}>
          {supportMode && <div className="ak-support-ticker" aria-live="polite"><span>{`${labels.supportBanner} / `.repeat(3)}</span></div>}
          <header>
            <div><span>{supportMode ? labels.supportStatus : labels.liveStatus}</span><strong>{supportMode ? labels.supportTitle : labels.askAO}</strong></div>
            <button type="button" onClick={() => setOpen(false)} aria-label={labels.closeChat}>×</button>
          </header>
          <div className="ak-agent-messages" aria-live="polite">
            {messages.map((message, index) => (
              <p key={`${message.role}-${index}`} className={`ak-agent-message ${message.role}`}>
                <small>{message.role === "assistant" ? "AO" : labels.you}</small>
                <span dir="auto">{index === 0 ? labels.greeting : message.content}</span>
              </p>
            ))}
            {loading && <p className="ak-agent-thinking">{labels.thinking}<span>...</span></p>}
            <div ref={endRef} />
          </div>
          <form onSubmit={submit}>
            <label htmlFor="ak-agent-input">{labels.question}</label>
            <textarea
              dir="auto"
              id="ak-agent-input"
              value={input}
              onChange={(event) => setInput(event.target.value.slice(0, 1500))}
              placeholder={labels.placeholder}
              rows={2}
              disabled={loading}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  event.currentTarget.form?.requestSubmit();
                }
              }}
            />
            <button type="submit" disabled={loading || !input.trim()}>{labels.send}</button>
          </form>
          {supportMode && supportStatus === "saved" && <p className="ak-support-status">{labels.saved}</p>}
          <p className="ak-agent-note">{labels.disclaimer}</p>
        </section>
      )}
      <button
        className="ak-agent-orb"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="ak-agent-panel"
        aria-label={open ? labels.closeAgent : labels.openAgent}
      >
        <img src="/assets/agent-orb.png" alt="" />
        <span>{labels.askAO}</span>
      </button>
    </aside>
  );
}
