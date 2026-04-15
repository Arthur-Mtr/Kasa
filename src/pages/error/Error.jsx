import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="error-container">
            <p className="error-404">404</p>
            <p className="error-msg">Oups! La page que <span className="break">vous demandez n'existe pas.</span></p>
            <Link to="/" className="link-back-home">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error