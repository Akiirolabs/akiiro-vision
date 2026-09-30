export function parseAgentReply(raw: string) {
  const marker = raw.match(/^\s*\[\[AO:(SUPPORT|RESOLVED|NORMAL)\]\]\s*/);
  return {
    mode: marker?.[1] ?? null,
    answer: raw.replace(/\[\[AO:(?:SUPPORT|RESOLVED|NORMAL)\]\]/g, "").trim(),
  };
}
