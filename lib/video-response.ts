/** Serve the small hero asset with explicit single-byte-range support. */
export async function heroVideoResponse(request: Request, fetchAsset: (request: Request) => Promise<Response>) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response(null, { status: 405, headers: { Allow: "GET, HEAD" } });
  }
  const source = new URL("/assets/macrokii/glowing-sphere-icons-silent.mp4", request.url);
  const asset = await fetchAsset(new Request(source));
  if (!asset.ok) return new Response(null, { status: asset.status });
  const bytes = await asset.arrayBuffer();
  const size = bytes.byteLength;
  const headers = new Headers({
    "Content-Type": "video/mp4",
    "Accept-Ranges": "bytes",
    "Content-Length": String(size),
    "Cache-Control": "no-store",
  });
  const etag = asset.headers.get("etag");
  if (etag) headers.set("ETag", etag);
  const range = request.headers.get("range");
  const validator = request.headers.get("if-range");
  // Ignore unsupported multi-range requests and nonmatching validators.
  const match = request.method === "GET" && (!validator || (etag && validator === etag && !etag.startsWith('W/')))
    ? range?.match(/^bytes=(\d*)-(\d*)$/) : null;
  if (match && (match[1] || match[2])) {
    const start = match[1] ? Number(match[1]) : Math.max(0, size - Number(match[2]));
    const end = match[1] && match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
    if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start >= size || start > end) {
      headers.set("Content-Range", `bytes */${size}`);
      headers.set("Content-Length", "0");
      return new Response(null, { status: 416, headers });
    }
    headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
    headers.set("Content-Length", String(end - start + 1));
    return new Response(bytes.slice(start, end + 1), { status: 206, headers });
  }
  return new Response(request.method === "HEAD" ? null : bytes, { headers });
}
