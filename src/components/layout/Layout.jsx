import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import WhatsAppButton from "./WhatsAppButton";
import ScrollToHash from "./ScrollToHash";

export default function Layout() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Outlet />
      <WhatsAppButton />
    </>
  );
}
