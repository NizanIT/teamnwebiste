import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ContactPage from "./pages/Contact";
import ComingSoon from "./pages/ComingSoon";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/packages" element={<ComingSoon title="Packages" />} />
          <Route path="/book" element={<ComingSoon title="Book your date" />} />
          <Route path="/policies" element={<ComingSoon title="Policies" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
