import { Outlet } from "react-router-dom"
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";

function Layout() {
    return (
        <>
        <Header />
        <main className="container">
            <Outlet />
        </main>
        <Footer />
        </>
    )
}

export default Layout