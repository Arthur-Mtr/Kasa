import imgArrowBack from "../../assets/arrow-back.png"
import { useState } from "react"

function Collapse({ title, description }) {
const [isActive, setIsActive] = useState(false)

    return (
        <section className="collapse">
            <div className="collapse__header">
                <h3>{title}</h3>
                <img src={imgArrowBack} alt="arrow" onClick={() => setIsActive(!isActive)}/>
            </div>
            <div className={`collapse__description ${isActive ? "open" : ""}`}>
                <p>{description}</p>
            </div>
        
        </section>
    )
}

export default Collapse