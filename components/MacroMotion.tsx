"use client";

import { useEffect, useRef } from "react";
import { attachMotionPlayback } from "../lib/motion-playback";
import "./macro-motion.css";

export default function MacroMotion({ src = "/assets/macrokii/glowing-sphere-icons.mp4", downloadLabel = "Download Macro Kii", minimal = false }: { src?: string; downloadLabel?: string; minimal?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playbackSrc = src === "/assets/macrokii/glowing-sphere-icons.mp4"
    ? "/assets/macrokii/glowing-sphere-icons-silent.mp4" : src;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const playback = attachMotionPlayback(video, document, window);
    return () => playback.dispose();
  }, [src]);

  return (
    <section className={`macro-motion${minimal ? " macro-motion-minimal" : ""}`} aria-label="Macro Kii in motion">
      {!minimal && <div className="macro-motion-label">Macro Kii available now</div>}
      <div className="macro-motion-stage">
        <video
          key={src}
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          width="1920"
          height="1080"
          poster={src.replace(/\.mp4$/, "-poster.jpg")}
          aria-label="Macro controls rotating around a glowing blue sphere"
        >
          <source src={playbackSrc} type="video/mp4" />
        </video>
        <a className="macro-motion-download" href="/downloads">{downloadLabel}</a>
      </div>
    </section>
  );
}
