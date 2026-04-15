import { useParams, Navigate } from "react-router-dom"
import imgTest from "../../assets/Carrousel-test.png"
import logements from "../../data/logements.json"

import Carrousel from "../../components/carrousel/Carrousel"
import Informations from "../../components/informations/Informations"


function Logement() {

    const { id } = useParams();
    const logement = logements.find(x => x.id === id)
    
    if (!logement) {
        return <Navigate to="/error" />
    }

    return (
        <section className="logements-page">
            <Carrousel pictures={logement.pictures} />
            <Informations 
                    title={logement.title} 
                    location={logement.location} 
                    tags={logement.tags} 
                    host={logement.host} 
                    rates={logement.rating} 
                    description={logement.description} 
                    equipments={logement.equipments}/>
                    
            <div className="logement-collapse">

            </div>
        </section>
    )
}

export default Logement