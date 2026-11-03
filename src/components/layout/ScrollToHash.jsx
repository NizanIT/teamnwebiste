import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the #section in the URL, or back to the top on a plain page change
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
