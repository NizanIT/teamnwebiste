import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import WhatsAppButton from "./WhatsAppButton";
import ScrollToHash from "./ScrollToHash";
import SeoTags from "./SeoTags";
import usePageViews from "../../hooks/usePageViews";

export default function Layout() {
  usePageViews();
  return (
    <>
      <ScrollToHash />
      <SeoTags />
      <Navbar />
      <Outlet />
      <WhatsAppButton />
    </>
  );
}
