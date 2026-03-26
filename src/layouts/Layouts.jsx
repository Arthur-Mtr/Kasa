import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";

function Layout() {
    return (
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
        </>
    )
}

export default Layout