import FooterMobile from "../components/footer/footerMobile";
import { Outlet } from "react-router-dom";

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
                {/* <footerDesktop /> */}
            </footer>
        </div>
    )
}