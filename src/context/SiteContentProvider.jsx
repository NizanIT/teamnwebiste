import { useState } from "react";
import { getPreviewContent, getSiteContent } from "../api/websiteApi";
import PreviewBanner from "../components/layout/PreviewBanner";
import useAsync from "../hooks/useAsync";
import { clearPreviewToken, getPreviewToken, rememberUtm } from "../utils/visit";
import { SiteContentContext } from "./siteContentContext";

// Loads all published CMS sections once for the whole site.
// Opened from the CRM's Preview button (?preview=…), it loads drafts instead.
export default function SiteContentProvider({ children }) {
  const [previewToken] = useState(() => {
    rememberUtm();
    return getPreviewToken();
  });

  const { data, loading, error } = useAsync(
    () => (previewToken ? getPreviewContent(previewToken) : getSiteContent()),
    previewToken ? `preview:${previewToken}` : "content",
  );

  const exitPreview = () => {
    clearPreviewToken();
    const url = new URL(window.location.href);
    url.searchParams.delete("preview");
    window.location.replace(url.toString());
  };

  return (
    <SiteContentContext.Provider value={{ sections: data ?? {}, loading }}>
      {previewToken && <PreviewBanner expired={Boolean(error)} onExit={exitPreview} />}
      {children}
    </SiteContentContext.Provider>
  );
}
