import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about";
import EventsPage from "./pages/events";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";
import TreePage from "./pages/tree";
import ContactPage from "./pages/contact";
import ShopPage from "./pages/shop";
import LegalPolicyPage from "./pages/legalPolicy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/tree" element={<TreePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/legal" element={<LegalPolicyPage />} />
    </Routes>
  );
}

export default App;
