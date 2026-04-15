import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import Logements from "../pages/logement/Logement.jsx";
import About from "../pages/about/About.jsx";
import Error from "../pages/error/Error.jsx";

function AppRouter() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:id" element={<Logements />} />
                <Route path="/about" element={<About />} />
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<Error />} />

            </Route>
        </Routes>
    )
}

export default AppRouter