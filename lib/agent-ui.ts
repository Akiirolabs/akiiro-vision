export const englishAgentLabels = {
  askAO: "Ask AO",
  chatLabel: "Akiiro live agent chat",
  supportBanner: "TECH SUPPORT MODE",
  supportStatus: "AO / TECH SUPPORT",
  liveStatus: "AO / LIVE",
  supportTitle: "Technical Support",
  closeChat: "Close chat",
  you: "YOU",
  thinking: "AO is thinking",
  question: "Ask a question",
  placeholder: "What would you like to know?",
  send: "Send",
  saved: "Support record saved. A human has not reviewed it yet.",
  disclaimer: "AI can make mistakes. Do not share sensitive information.",
  closeAgent: "Close AO agent",
  openAgent: "Open AO agent",
  greeting: "Ask me about Akiiro, Macro Kii, Studio-A, or the connected workspace.",
  unavailable: "I’m not available at the moment. Please try again shortly or email support@akiiro.com.",
};

export type AgentUI = {
  language: string;
  direction: "ltr" | "rtl";
  labels: typeof englishAgentLabels;
};

export const defaultAgentUI: AgentUI = { language: "en", direction: "ltr", labels: englishAgentLabels };

export function isAgentUI(value: unknown): value is AgentUI {
  if (!value || typeof value !== "object") return false;
  const ui = value as AgentUI;
  return typeof ui.language === "string" && /^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$/i.test(ui.language)
    && (ui.direction === "ltr" || ui.direction === "rtl")
    && !!ui.labels && typeof ui.labels === "object"
    && Object.keys(englishAgentLabels).every((key) => {
      const label = ui.labels[key as keyof typeof englishAgentLabels];
      return typeof label === "string" && label.trim().length > 0 && label.length <= 500;
    });
}

export const agentReplySchema = {
  type: "object",
  additionalProperties: false,
  required: ["mode", "answer", "ui"],
  properties: {
    mode: { type: "string", enum: ["SUPPORT", "RESOLVED", "NORMAL"] },
    answer: { type: "string" },
    ui: {
      type: "object", additionalProperties: false,
      required: ["language", "direction", "labels"],
      properties: {
        language: { type: "string", description: "BCP 47 language code for the reply" },
        direction: { type: "string", enum: ["ltr", "rtl"] },
        labels: {
          type: "object", additionalProperties: false,
          required: Object.keys(englishAgentLabels),
          properties: Object.fromEntries(Object.entries(englishAgentLabels).map(([key, text]) => [key, {
            type: "string", description: `Translate faithfully into the reply language: ${text}`,
          }])),
        },
      },
    },
  },
};
