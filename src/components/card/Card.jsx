function Card({id, title, cover}) {
    return (
        <div className="logement-card">
            <img src={cover} alt={title} className="logement-card__img"/>
            <h3 className="logement-card__title">{title}</h3>
        </div>
    )
}

export default Card