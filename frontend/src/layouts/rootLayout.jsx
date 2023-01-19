import { Outlet } from "react-router-dom";

import FooterMobile from "../components/footer/footerMobile";
import FooterDesktop from "../components/footer/footerDesktop";

export default function RootLayout() {
  return (
    <div className="root-layout flex flex-col h-screen bg-greenish">
      <header className="h-10"></header>
      <main className="container mx-auto mb-auto">
        <Outlet />
      </main>
      <footer className="h-15">
        <FooterMobile />
        <FooterDesktop />
      </footer>
    </div>
  );
}
