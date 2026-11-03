import { useState } from "react";

// Shows image.src (uploaded photo), falls back to image.fallback, then to a blank blush frame.
export default function ImageFrame({ image, alt, className = "" }) {
  const [src, setSrc] = useState(image.src);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (image.fallback && src !== image.fallback) setSrc(image.fallback);
    else setFailed(true);
  };

  if (failed) return <div role="img" aria-label={alt} className={`bg-blush ${className}`} />;

  return <img src={src} alt={alt} onError={handleError} className={`object-cover ${className}`} />;
}
