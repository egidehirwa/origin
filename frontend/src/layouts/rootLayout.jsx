import { Outlet } from "react-router-dom";
import FooterMobile from "../components/footer/footerMobile";
import FooterDesktop from "../components/footer/footerDesktop";
import DesktopHeader from "../components/header/desktopHeader";
import BackToTopButton from "../components/buttons/backToTop"

const RootLayout = ({ logedIn }) => {
  return (
    <div className="root-layout min-h-screen grid grid-rows-[auto_1fr_auto] bg-greenish text-lightcream">
      <header className="lg:mb-10 z-10">
        <DesktopHeader logedIn={logedIn} />
      </header>
      <main >
        < Outlet />
      </main>
      <footer className="z-10">
        < FooterMobile />
        < FooterDesktop />
      </footer>
    </div>
  );
}

export default RootLayout;