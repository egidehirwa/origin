import { Route, Routes } from "react-router-dom"
import AboutPage from "./pages/about";
import EventsPage from "./pages/events";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";
import TreePage from "./pages/tree";

function App() {
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/tree" element={<TreePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<AboutPage />} />
        <Route path="/shop" element={<AboutPage />} />
        <Route path="/legal" element={<AboutPage />} />
    </Routes>
}

export default App;
