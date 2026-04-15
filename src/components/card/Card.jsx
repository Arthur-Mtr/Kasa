import { Link } from "react-router-dom"

function Card({id, title, cover}) {
    return (
        <Link to={`logement/${id}`}>
            <div className="logement-card">
                <img src={cover} alt={title} className="logement-card__img"/>
                <h3 className="logement-card__title">{title}</h3>
            </div>
        </Link>
    )
}

export default Card