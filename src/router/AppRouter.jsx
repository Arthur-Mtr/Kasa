import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layouts.jsx";
import Home from "../pages/home/Home.jsx";
import Logements from "../pages/logement/Logements.jsx";
import About from "../pages/about/About.jsx";
import Error from "../pages/error/Error.jsx";

function AppRouter() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/logements" element={<Logements />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    )
}

export default AppRouter