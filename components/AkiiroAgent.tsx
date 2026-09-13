"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

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
      const data = (await response.json()) as { answer?: string; error?: string; supportMode?: boolean; supportSaved?: boolean; supportTicketId?: string | null };
      if (!response.ok || !data.answer) throw new Error(data.error || "Chat request failed");
      setSupportMode(Boolean(data.supportMode));
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
        content: "I’m not available at the moment. Please try again shortly or email support@akiiro.com.",
      }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <aside className={`ak-agent ${supportMode ? "is-support" : ""}`} aria-label="Ask AO">
      {open && (
        <section className="ak-agent-panel" id="ak-agent-panel" aria-label="Akiiro live agent chat">
          {supportMode && <div className="ak-support-ticker" aria-live="polite"><span>TECH SUPPORT MODE / TECH SUPPORT MODE / TECH SUPPORT MODE /</span></div>}
          <header>
            <div><span>{supportMode ? "AO / TECH SUPPORT" : "AO / LIVE"}</span><strong>{supportMode ? "Technical Support" : "Ask AO"}</strong></div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
          </header>
          <div className="ak-agent-messages" aria-live="polite">
            {messages.map((message, index) => (
              <p key={`${message.role}-${index}`} className={`ak-agent-message ${message.role}`}>
                <small>{message.role === "assistant" ? "AO" : "YOU"}</small>
                <span>{message.content}</span>
              </p>
            ))}
            {loading && <p className="ak-agent-thinking">AO is thinking<span>...</span></p>}
            <div ref={endRef} />
          </div>
          <form onSubmit={submit}>
            <label htmlFor="ak-agent-input">Ask a question</label>
            <textarea
              id="ak-agent-input"
              value={input}
              onChange={(event) => setInput(event.target.value.slice(0, 1500))}
              placeholder="What would you like to know?"
              rows={2}
              disabled={loading}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  event.currentTarget.form?.requestSubmit();
                }
              }}
            />
            <button type="submit" disabled={loading || !input.trim()}>Send</button>
          </form>
          {supportMode && supportStatus === "saved" && <p className="ak-support-status">Support record saved. A human has not reviewed it yet.</p>}
          <p className="ak-agent-note">AI can make mistakes. Do not share sensitive information.</p>
        </section>
      )}
      <button
        className="ak-agent-orb"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="ak-agent-panel"
        aria-label={open ? "Close AO agent" : "Open AO agent"}
      >
        <img src="/assets/agent-orb.png" alt="" />
        <span>Ask AO</span>
      </button>
    </aside>
  );
}
