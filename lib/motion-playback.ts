// Retry when media becomes ready or the page resumes, without a polling loop.
export function attachMotionPlayback(
  video: HTMLVideoElement,
  preference: MediaQueryList,
  page: Document,
  host: Window,
  setNeedsPlay: (needed: boolean) => void,
) {
  let disposed = false;
  let pending = false;
  let manual = false;
  const play = async (userInitiated = false) => {
    if (userInitiated) manual = true;
    if (disposed || pending || page.hidden || (preference.matches && !manual)) return;
    video.muted = true;
    video.defaultMuted = true;
    pending = true;
    try {
      await video.play();
      if (!disposed) setNeedsPlay(false);
    } catch {
      if (!disposed) setNeedsPlay(true);
    } finally {
      pending = false;
    }
  };
  const resume = () => { void play(); };
  const updatePreference = () => {
    manual = false;
    video.autoplay = !preference.matches;
    if (preference.matches) {
      video.pause();
      setNeedsPlay(true);
    } else resume();
  };
  const playing = () => { setNeedsPlay(false); };
  const paused = () => { if (!page.hidden) setNeedsPlay(true); };
  video.addEventListener("canplay", resume);
  video.addEventListener("playing", playing);
  video.addEventListener("pause", paused);
  video.addEventListener("error", paused);
  page.addEventListener("visibilitychange", resume);
  host.addEventListener("pageshow", resume);
  preference.addEventListener("change", updatePreference);
  updatePreference();
  return {
    play: () => play(true),
    dispose: () => {
      disposed = true;
      video.removeEventListener("canplay", resume);
      video.removeEventListener("playing", playing);
      video.removeEventListener("pause", paused);
      video.removeEventListener("error", paused);
      page.removeEventListener("visibilitychange", resume);
      host.removeEventListener("pageshow", resume);
      preference.removeEventListener("change", updatePreference);
    },
  };
}
