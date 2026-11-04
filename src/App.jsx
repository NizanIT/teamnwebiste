import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ContactPage from "./pages/Contact";
import Packages from "./pages/Packages";
import Book from "./pages/Book";
import Policies from "./pages/Policies";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/book" element={<Book />} />
          <Route path="/policies" element={<Policies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
