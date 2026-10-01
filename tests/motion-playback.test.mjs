import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const source = readFileSync(new URL('../lib/motion-playback.ts', import.meta.url), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { attachMotionPlayback } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
const tick = () => new Promise(resolve => setImmediate(resolve));
function setup(reduced = false, blocked = false) {
  const video = Object.assign(new EventTarget(), {
    calls: 0, muted: false, defaultMuted: false,
    async play() { this.calls++; if (blocked) throw new Error('Autoplay blocked'); },
    pause() {},
  });
  const preference = Object.assign(new EventTarget(), { matches: reduced });
  const page = Object.assign(new EventTarget(), { hidden: false });
  const host = new EventTarget();
  const states = [];
  const controller = attachMotionPlayback(video, preference, page, host, value => states.push(value));
  return { video, preference, page, host, states, controller, unblock: () => { blocked = false; } };
}
test('starts muted and retries on readiness and page return', async () => {
  const s = setup();
  await tick();
  assert.equal(s.video.muted, true);
  assert.equal(s.video.defaultMuted, true);
  assert.equal(s.video.autoplay, true);
  s.video.dispatchEvent(new Event('canplay'));
  await tick();
  s.host.dispatchEvent(new Event('pageshow'));
  await tick();
  assert.equal(s.video.calls, 3);
  s.controller.dispose();
  s.host.dispatchEvent(new Event('pageshow'));
  assert.equal(s.video.calls, 3);
});
test('blocked autoplay exposes a working manual play fallback', async () => {
  const s = setup(false, true);
  await tick();
  assert.equal(s.states.at(-1), true);
  s.unblock();
  await s.controller.play();
  assert.equal(s.states.at(-1), false);
  s.controller.dispose();
});
test('reduced motion requires explicit play and hidden pages do not retry', async () => {
  const s = setup(true);
  assert.equal(s.video.calls, 0);
  assert.equal(s.states.at(-1), true);
  await s.controller.play();
  assert.equal(s.video.calls, 1);
  s.page.hidden = true;
  s.page.dispatchEvent(new Event('visibilitychange'));
  assert.equal(s.video.calls, 1);
  s.controller.dispose();
});
