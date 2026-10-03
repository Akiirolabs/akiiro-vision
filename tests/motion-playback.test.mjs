import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const source = readFileSync(new URL('../lib/motion-playback.ts', import.meta.url), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { attachMotionPlayback } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
const tick = () => new Promise(resolve => setImmediate(resolve));
function setup(blocked = false) {
  const video = Object.assign(new EventTarget(), {
    calls: 0, muted: false, defaultMuted: false,
    async play() { this.calls++; if (blocked) throw new Error('Autoplay blocked'); },
    pause() {},
  });
  const page = Object.assign(new EventTarget(), { hidden: false });
  const host = new EventTarget();
  const controller = attachMotionPlayback(video, page, host);
  return { video, page, host, controller, unblock: () => { blocked = false; } };
}
test('starts muted and retries on readiness and page return', async () => {
  const s = setup();
  await tick();
  assert.equal(s.video.muted, true);
  assert.equal(s.video.defaultMuted, true);
  assert.equal(s.video.autoplay, true);
  assert.equal(s.video.loop, true);
  assert.equal(s.video.playsInline, true);
  s.video.dispatchEvent(new Event('canplay'));
  await tick();
  s.host.dispatchEvent(new Event('pageshow'));
  await tick();
  assert.equal(s.video.calls, 3);
  s.controller.dispose();
  s.host.dispatchEvent(new Event('pageshow'));
  assert.equal(s.video.calls, 3);
});
test('blocked autoplay recovers on media readiness without a Play button', async () => {
  const s = setup(true);
  await tick();
  assert.equal(s.video.calls, 1);
  s.unblock();
  s.video.dispatchEvent(new Event('loadeddata'));
  await tick();
  assert.equal(s.video.calls, 2);
  s.controller.dispose();
});
test('hidden pages do not retry until visible again', async () => {
  const s = setup();
  await tick();
  assert.equal(s.video.calls, 1);
  s.page.hidden = true;
  s.page.dispatchEvent(new Event('visibilitychange'));
  assert.equal(s.video.calls, 1);
  s.page.hidden = false;
  s.page.dispatchEvent(new Event('visibilitychange'));
  await tick();
  assert.equal(s.video.calls, 2);
  s.controller.dispose();
});

test('ordinary touch retries blocked playback and listeners are removed on disposal', async () => {
  const s = setup(true);
  await tick();
  s.unblock();
  s.page.dispatchEvent(new Event('touchend'));
  await tick();
  assert.equal(s.video.calls, 2);
  s.controller.dispose();
  s.page.dispatchEvent(new Event('touchend'));
  assert.equal(s.video.calls, 2);
});
