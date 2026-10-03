// Native autoplay starts before hydration; these events recover interrupted starts.
export function attachMotionPlayback(video: HTMLVideoElement, page: Document, host: Window) {
  let disposed = false;
  let pending = false;
  let visible = true;
  const resume = async () => {
    if (disposed || pending || page.hidden || !visible) return;
    video.muted = true;
    video.defaultMuted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    pending = true;
    try { await video.play(); }
    catch { /* Browser policy may block playback; retry on readiness or interaction. */ }
    finally { pending = false; }
  };
  const retry = () => { void resume(); };
  const mediaEvents = ["loadedmetadata", "loadeddata", "canplay", "canplaythrough", "ended"];
  for (const event of mediaEvents) video.addEventListener(event, retry);
  page.addEventListener("visibilitychange", retry);
  host.addEventListener("pageshow", retry);
  // No dedicated Play button: a normal page interaction can recover blocked playback.
  page.addEventListener("touchend", retry, { passive: true });
  page.addEventListener("click", retry);
  const observer = typeof IntersectionObserver !== "undefined" ? new IntersectionObserver(entries => {
    visible = entries.some(entry => entry.isIntersecting);
    if (visible) retry();
  }) : null;
  observer?.observe(video);
  retry();
  return { dispose: () => {
    disposed = true;
    observer?.disconnect();
    for (const event of mediaEvents) video.removeEventListener(event, retry);
    page.removeEventListener("visibilitychange", retry);
    host.removeEventListener("pageshow", retry);
    page.removeEventListener("touchend", retry);
    page.removeEventListener("click", retry);
  } };
}
