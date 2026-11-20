import { useState } from "react";

// Shows image.src (CMS or local photo), falls back to image.fallback, then to a blank blush frame.
// Reacts when `image.src` changes (e.g. live CMS content arrives after the first render).
export default function ImageFrame({ image, alt, className = "" }) {
  const [failed, setFailed] = useState([]);
  const candidates = [image?.src, image?.fallback].filter(Boolean);
  const src = candidates.find((s) => !failed.includes(s));

  if (!src) return <div role="img" aria-label={alt} className={`bg-blush ${className}`} />;

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed((prev) => [...prev, src])}
      className={`object-cover ${className}`}
    />
  );
}
