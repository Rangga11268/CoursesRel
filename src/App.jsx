import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import SyaratPage from "./pages/SyaratPage";

export default function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/Testimonial" Component={TestimonialPage} />
        <Route path="/Faq" Component={FaqPage} />
        <Route path="/Syarat" Component={SyaratPage} />
      </Routes>
      <FooterComponent />
    </div>
  );
}
