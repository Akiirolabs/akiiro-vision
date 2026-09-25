"use client";

import { useEffect, useRef } from "react";
import "./macro-motion.css";

export default function MacroMotion({ src = "/assets/macrokii/glowing-sphere-icons.mp4", downloadLabel = "Download Macro Kii" }: { src?: string; downloadLabel?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePlayback = () => {
      const video = videoRef.current;
      if (!video) return;
      if (preference.matches) video.pause();
      else void video.play().catch(() => { /* Keep the poster if autoplay is blocked. */ });
    };
    updatePlayback();
    preference.addEventListener("change", updatePlayback);
    return () => preference.removeEventListener("change", updatePlayback);
  }, []);

  return (
    <section className="macro-motion" aria-label="Macro Kii in motion">
      <div className="macro-motion-label">Macro KII available now</div>
      <div className="macro-motion-stage">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          width="1920"
          height="1080"
          poster="/assets/macrokii/macro-panel-hero-outline.png"
          aria-label="Macro controls rotating around a glowing blue sphere"
        >
          <source src={src} type="video/mp4" />
        </video>
        <a className="macro-motion-download" href="/downloads">{downloadLabel}</a>
      </div>
    </section>
  );
}
