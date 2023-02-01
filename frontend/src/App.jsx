import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";

// pages
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ProfilePage from "./pages/profile";
import TreePage from "./pages/tree";
import EventsPage from "./pages/events";
import ShopPage from "./pages/shop";
import LegalPolicyPage from "./pages/legalPolicy";
import ConnexionPage from "./pages/connexion";

// connect to API
// import axios from "axios";

// axios.defaults.baseURL = "http://localhost:4000"; //database /herouku paste here

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage logedIn={true} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/tree" element={<TreePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/legalPolicy" element={<LegalPolicyPage />} />
            <Route path="/connexion" element={<ConnexionPage />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
