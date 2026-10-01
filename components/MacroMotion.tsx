"use client";

import { useEffect, useRef, useState } from "react";
import { attachMotionPlayback } from "../lib/motion-playback";
import "./macro-motion.css";

export default function MacroMotion({ src = "/assets/macrokii/glowing-sphere-icons.mp4", downloadLabel = "Download Macro Kii", minimal = false }: { src?: string; downloadLabel?: string; minimal?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playbackRef = useRef<ReturnType<typeof attachMotionPlayback> | null>(null);
  const [needsPlay, setNeedsPlay] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const playback = attachMotionPlayback(video, window.matchMedia("(prefers-reduced-motion: reduce)"), document, window, setNeedsPlay);
    playbackRef.current = playback;
    return () => {
      playback.dispose();
      playbackRef.current = null;
    };
  }, [src]);

  return (
    <section className={`macro-motion${minimal ? " macro-motion-minimal" : ""}`} aria-label="Macro Kii in motion">
      {!minimal && <div className="macro-motion-label">Macro Kii available now</div>}
      <div className="macro-motion-stage">
        <video
          key={src}
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          width="1920"
          height="1080"
          poster={src.replace(/\.mp4$/, "-poster.jpg")}
          aria-label="Macro controls rotating around a glowing blue sphere"
        >
          <source src={src} type="video/mp4" />
        </video>
        {needsPlay && <button className="macro-motion-play" type="button" onClick={() => void playbackRef.current?.play()} aria-label="Play Macro Kii video">Play video</button>}
        <a className="macro-motion-download" href="/downloads">{downloadLabel}</a>
      </div>
    </section>
  );
}
