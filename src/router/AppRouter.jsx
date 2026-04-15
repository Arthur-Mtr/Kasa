import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import Home from "../pages/Home/Home.jsx";
import Logements from "../pages/Logements/Logement.jsx";
import About from "../pages/About/About.jsx";
import Error from "../pages/Error/Error.jsx";

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