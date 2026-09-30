import { isAgentUI } from "./agent-ui";

export function parseAgentReply(raw: string) {
  const parsed = JSON.parse(raw);
  if (!parsed || !["SUPPORT", "RESOLVED", "NORMAL"].includes(parsed.mode)
    || typeof parsed.answer !== "string" || !parsed.answer.trim() || !isAgentUI(parsed.ui)) {
    throw new Error("Invalid agent reply");
  }
  return { mode: parsed.mode as "SUPPORT" | "RESOLVED" | "NORMAL", answer: parsed.answer.trim(), ui: parsed.ui };
}
