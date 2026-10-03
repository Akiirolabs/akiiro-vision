import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
const source = readFileSync(new URL('../lib/video-response.ts', import.meta.url), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { heroVideoResponse } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
const fetchAsset = async () => new Response(new Uint8Array([0,1,2,3,4,5]), { headers: { etag: '"sample"' } });
const request = (headers = {}, method = 'GET') => new Request('https://example.com/media/macro-hero-v2.mp4', { headers, method });
test('Safari probe returns only the requested bytes', async () => {
  const response = await heroVideoResponse(request({ Range: 'bytes=0-1' }), fetchAsset);
  assert.equal(response.status, 206);
  assert.equal(response.headers.get('content-range'), 'bytes 0-1/6');
  assert.equal(response.headers.get('content-length'), '2');
  assert.deepEqual([...new Uint8Array(await response.arrayBuffer())], [0,1]);
});
test('supports suffix and open-ended ranges', async () => {
  for (const range of ['bytes=-2', 'bytes=4-']) {
    const response = await heroVideoResponse(request({ Range: range }), fetchAsset);
    assert.equal(response.status, 206);
    assert.deepEqual([...new Uint8Array(await response.arrayBuffer())], [4,5]);
  }
});
test('rejects unsatisfiable ranges', async () => {
  const response = await heroVideoResponse(request({ Range: 'bytes=9-12' }), fetchAsset);
  assert.equal(response.status, 416);
  assert.equal(response.headers.get('content-range'), 'bytes */6');
});
test('HEAD and full downloads report the complete length', async () => {
  const response = await heroVideoResponse(request({}, 'HEAD'), fetchAsset);
  assert.equal(response.headers.get('content-length'), '6');
  assert.equal((await response.arrayBuffer()).byteLength, 0);
  const full = await heroVideoResponse(request({ Range: 'bytes=0-1', 'If-Range': '"old"' }), fetchAsset);
  assert.equal(full.status, 200);
  assert.equal((await full.arrayBuffer()).byteLength, 6);
});
