import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

function moduleURL(source) {
  return `data:text/javascript;base64,${Buffer.from(ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  }).outputText).toString('base64')}`;
}
const uiURL = moduleURL(readFileSync(new URL('../lib/agent-ui.ts', import.meta.url), 'utf8'));
const { defaultAgentUI, isAgentUI, agentReplySchema } = await import(uiURL);
const { parseAgentReply } = await import(moduleURL(
  readFileSync(new URL('../lib/agent-reply.ts', import.meta.url), 'utf8').replace('"./agent-ui"', JSON.stringify(uiURL)),
));

test('schema requires every translated label', () => {
  assert.deepEqual(agentReplySchema.properties.ui.properties.labels.required, Object.keys(defaultAgentUI.labels));
});

for (const [language, direction, mode, answer, supportBanner] of [
  ['ar', 'rtl', 'SUPPORT', 'ما الذي يحدث عند فتح التطبيق؟', 'وضع الدعم الفني'],
  ['es', 'ltr', 'RESOLVED', 'Me alegra que funcione.', 'MODO DE SOPORTE TÉCNICO'],
  ['ja', 'ltr', 'NORMAL', '何を知りたいですか？', 'テクニカルサポート'],
]) {
  test(`preserves ${language} labels, direction and ${mode} routing`, () => {
    const ui = { ...defaultAgentUI, language, direction, labels: { ...defaultAgentUI.labels, supportBanner } };
    assert.deepEqual(parseAgentReply(JSON.stringify({ mode, answer, ui })), { mode, answer, ui });
  });
}

test('rejects partial labels and invalid directions', () => {
  assert.equal(isAgentUI({ ...defaultAgentUI, labels: { send: 'Enviar' } }), false);
  assert.equal(isAgentUI({ ...defaultAgentUI, direction: 'sideways' }), false);
});

test('rejects malformed, truncated, empty and unstructured replies', () => {
  for (const raw of ['{"mode":', '[[AO:SUPPORT]] Help', 'null', JSON.stringify({ mode: 'NORMAL', answer: '', ui: defaultAgentUI })]) {
    assert.throws(() => parseAgentReply(raw));
  }
});
