import starInactive from "../../assets/star-inactive.png"
import starActive from "../../assets/star-active.png"
import Collapse from "../Collapse/Collapse"

function Informations({title, location, tags, host, rates, description, equipments}) {

    const [ firstName, lastName ] = host.name.split(" ")

    const countStars = [1, 2, 3, 4, 5]
    const rating = Number(rates)

    return (  
    <section className="informations-container">
        <section className="logement-header">

            <div className="logement-header__left">

                <div className="logement-header__left--title">
                    <h2>{title}</h2>
                    <p>{location}</p>
                </div>
                <div className="logement-header__left--tags">

                   {tags.map((x, index) => {
                    return (
                        <div className="box-tags" key={index}>
                            <span>{x}</span>
                        </div>
                    )
                   })}

                </div>

            </div>

            <div className="logement-header__right">
                
                <div className="logement-header__right--top">
                    <div className="logement-header__right--name">
                        <p>{firstName}</p>
                        <p>{lastName}</p>

                    </div>
                    <div className="logement-header__right--img">
                        <img src={host.picture} alt="img profil"/>
                    </div>
                </div>
                
                <div className="logement-header__right--rates">
                   {countStars.map((x,index) => {
                    return(
                        x <= rating ? <img src={starActive} alt="étoile rouge" key={index}/> : <img src={starInactive} alt="étoile grise" key={index}/>
                    )
                   })}
                </div>

            </div>

        </section>

        <div className="logement-collapse">
            <Collapse title="Description" content={<p>{description}</p>} />
            <Collapse 
                title="Équipements" 
                content={
                    <ul>
                        {equipments.map((x) => {
                            return (
                                <li key={x}>{x}</li>
                            )
                        })}
                    </ul>
                } 
            />

        </div>

    </section>
    )
}

export default Informations