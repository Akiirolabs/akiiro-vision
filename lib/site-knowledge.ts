import { supportGroups } from "./support-faqs";

export type KnowledgeSection = { title: string; summary: string; points: string[] };
export type KnowledgeFaq = { question: string; answer: string };

export const knowledgeSections: KnowledgeSection[] = [
  {
    title: "Akiiro",
    summary: "Akiiro creates connected software and hardware for thinking, making, and moving work forward without breaking its continuity.",
    points: [
      "The brand line is: Ideas deserve dimension.",
      "Akiiro's flagship software is Macro Kii. Its flagship hardware is Studio-A.",
      "Guide software workflow questions toward Macro Kii, hardware questions toward Studio-A, builder questions toward Akiiro 3D, and developer notebook questions toward IO Vault.",
      "The lead developer is Brian Bovell. The development team may be referred to as Akiiro.",
      "General inquiries and questions not answered by the published material should be sent to support@akiiro.com.",
    ],
  },
  {
    title: "Macro Kii",
    summary: "Macro Kii is Akiiro's flagship software, a macro-centered productivity workspace that connects notes, tasks, tables, calendars, research, saved text, and assisted work in one interface.",
    points: [
      "The Macro Key Menu, called MKM, is the framework that organizes reusable macros and connected workflow tools. Akiiro streamlined that framework into the persistent Macro Panel.",
      "Macro Kii means Macro Key Internal Integration. The name describes its purpose: integrating the full workflow inside one connected workspace.",
      "Route moves supported content between supported sections. Turbo sends written output to destinations shown in its interface. Vault keeps saved text, presets, and reusable macros available.",
      "Workspace provides a focused, modern environment for writing, organizing, and viewing active work.",
      "To Do supports deeply nested subtasks. Dated tasks connect with Calendar and Day Documents.",
      "Calendar brings events, alerts, dated tasks, and Day Documents into one view. A Day Document is a full document centered on one day, where the day itself becomes the organizing context.",
      "Macro Kii focuses on work inside its own connected workspace. It is not presented as an operating-system-wide automation tool, keyboard remapper, gaming macro utility, or hardware macro pad.",
      "Pricing provided by Akiiro: Lite is a useful entry tier, Essential is $9.99, and Pro is $19.99. Do not invent billing cadence, taxes, trial terms, or entitlements that are not supplied.",
      "Macro-driven workflows are designed to reduce unnecessary repetition and use assisted actions efficiently. Do not promise unlimited usage unless current product terms explicitly guarantee it.",
      "The product experience is available at https://macrokii.com. The detailed Akiiro product page is /macrokii.",
    ],
  },
  {
    title: "AO Agent and Verify",
    summary: "AO means Advanced Operator. AO assists beside the work while the macro framework remains the center of Macro Kii.",
    points: [
      "AO can hand output to destinations visibly supported by the interface.",
      "Verify can take supported Workspace material, analyze the document with user-provided context, and return findings with an evidence trust score.",
      "The evidence trust score indicates how strongly the evidence examined by Verify supports a finding. It is a decision aid, not a guarantee of truth or infallibility.",
      "Verify is a central Macro Kii capability intended for legal, research, consulting, analysis, and serious study where the basis and limits of a finding matter.",
    ],
  },
  {
    title: "Studio-A",
    summary: "Studio-A is Akiiro's flagship hardware, a modern touchscreen cyberdeck that brings developer-grade connectivity into a cleaner consumer experience.",
    points: [
      "Studio-A is powered by a Raspberry Pi 5 with 8 GB of memory and 256 GB of included storage.",
      "It has a seven-inch touchscreen and intentionally removes the fixed keyboard associated with traditional cyberdecks. A separate portable keyboard can be used when needed.",
      "Its custom enclosure provides four USB-A ports, Ethernet, USB-C power, two Mini-HDMI ports, and A/V connectivity.",
      "Macro Kii and Akiiro 3D are planned as interconnected experiences within Studio-A.",
      "Studio-A is positioned for developers and everyday creative users who want real ports, mobility, and touchscreen simplicity in the same device.",
      "The product page presents dark and light finishes. The current product page is /cyberdecks.",
      "Specifications, availability, taxes, shipping, and final charges are governed by the product page and checkout at the time of purchase.",
    ],
  },
  {
    title: "Akiiro Mind Map",
    summary: "Akiiro Mind Map is an AI-assisted, interactive mind-mapping application available through the Apple App Store.",
    points: [
      "It can turn a subject into a complete structured breakdown presented as an interactive mind map.",
      "People can explore the generated structure, add connections, and work with the map directly.",
      "A Studio mode lets people create mind maps themselves.",
      "Do not make review claims unless a current, verifiable review source is available.",
    ],
  },
  {
    title: "Akiiro 3D",
    summary: "Akiiro 3D is software for builders who want to design and assemble custom cyberdeck concepts and technology pieces.",
    points: [
      "It complements Studio-A by serving people who prefer to build and customize their own systems.",
      "The experience is available at https://3d.akiiro.com and the site currently identifies it as a beta.",
      "Do not promise that every design or modeling function is complete.",
    ],
  },
  {
    title: "IO Vault",
    summary: "IO Vault is a notebook-style workspace for developers, learning, projects, and interactive agent conversations.",
    points: [
      "It includes interactive agents for learning and career-oriented work.",
      "Project surfaces include mind maps, tables, canvas tools, and other structured work views.",
      "Its developer notebook experience includes a Monaco-based editor with an IDE experience similar in purpose to familiar code editors.",
      "The connected Akiiro IO experience is available at https://app.akiiro.com.",
    ],
  },
  {
    title: "Purchases, policies, and support",
    summary: "Purchases may be completed through Stripe, Apple, or another identified provider. Provider terms and product-specific checkout terms also apply.",
    points: [
      "Never invent a price, release date, shipping promise, return policy, warranty, integration, security claim, performance claim, customer review, or competitive claim.",
      "When a visitor reports something broken or malfunctioning, enter Tech Support mode and create a support record before continuing troubleshooting.",
      "For an order, account, availability, partnership, press, or support question not answered here, direct the visitor to support@akiiro.com.",
      "Privacy information is at /privacy and website terms are at /terms.",
    ],
  },
];

export const knowledgeFaqs: KnowledgeFaq[] = [
  { question: "What is Macro Kii?", answer: "Macro Kii means Macro Key Internal Integration. It is Akiiro's flagship macro-centered productivity workspace, keeping notes, deeply nested tasks, tables, calendars, Day Documents, research, saved text, and assisted work together. The Macro Panel and Macro Key Menu connect supported actions, while Verify adds evidence-centered findings and trust scoring for work where confidence needs a visible basis." },
  { question: "What does the Macro Panel do?", answer: "It streamlines the Macro Key Menu framework into a persistent control point for macro-centered actions. The demonstrated interface provides access to Macro, Route, Turbo, Vault, and Preferences." },
  { question: "What is an evidence trust score?", answer: "It is a signal of how strongly the evidence examined by Verify supports a finding. Supporting context and uncertainty remain visible so a person can review the basis. It guides judgment rather than replacing it." },
  { question: "Can AO Agent guarantee that an answer is correct?", answer: "No. AI output and evidence scores can help organize and evaluate information, but neither is a guarantee. Important findings should be reviewed against their sources and professional requirements." },
  { question: "How much does Macro Kii cost?", answer: "Akiiro currently describes a useful Lite tier, Essential at $9.99, and Pro at $19.99. Check Macro Kii for current billing cadence, included features, and final terms before purchasing." },
  { question: "Where can I use Macro Kii?", answer: "Open the product at https://macrokii.com. A detailed overview is available on the Akiiro site at /macrokii." },
  { question: "What is Studio-A?", answer: "Studio-A is Akiiro's seven-inch touchscreen cyberdeck, powered by a Raspberry Pi 5 with 8 GB of memory and 256 GB of storage. It pairs consumer simplicity with the connectivity developers need. Visit /cyberdecks for its complete product story and current purchase path." },
  { question: "What is Akiiro Mind Map?", answer: "It is an interactive mind-map application that can use AI to structure a subject into a navigable map, while Studio mode lets people build maps themselves." },
  { question: "What is IO Vault?", answer: "IO Vault is a developer-oriented notebook workspace with interactive agents, projects, mind maps, tables, canvas tools, and a Monaco-based coding environment." },
  { question: "How do I contact Akiiro?", answer: "Email support@akiiro.com for support, order questions, partnerships, press, or anything the published material does not answer." },
];

export const agentKnowledge = [
  ...knowledgeSections.flatMap((section) => [section.title, section.summary, ...section.points]),
  "Frequently asked questions:",
  ...knowledgeFaqs.flatMap((faq) => [`Q: ${faq.question}`, `A: ${faq.answer}`]),
  "Public product FAQs and troubleshooting are available at /support.",
  ...supportGroups.flatMap((group) => [group.title, ...group.faqs.flatMap((faq) => [`Q: ${faq.question}`, `A: ${faq.answer}`])]),
].join("\n");
