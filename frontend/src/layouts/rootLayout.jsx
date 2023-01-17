import { Outlet } from "react-router-dom";

import FooterMobile from "../components/footer/footerMobile";
import FooterDesktop from "../components/footer/footerDesktop";

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                
            </header>
            <main className="container mx-auto">
                <Outlet />
            </main>
            <footer>
                <FooterMobile />
                <FooterDesktop />
            </footer>
        </div>
    )
}