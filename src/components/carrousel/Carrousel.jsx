import { useState } from "react"
import arrowRight from "../../assets/arrow-right.png"
import arrowLeft from "../../assets/arrow-left.png"

function Carrousel({pictures}) {

    const [index, setIndex] = useState(0)

    function imgNext() {
        if (index === pictures.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function imgPrev() {
        if (index === 0) {
            setIndex(pictures.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    return (
        <div className="carrousel">
            <img src={pictures[index]} alt="logement"/>

            {pictures.length > 1 && (
                <img src={arrowRight} alt="arrow right" className="arrow-next" onClick={imgNext}/>
            )}

            {pictures.length > 1 && (
                <img src={arrowLeft} alt="arrow left" className="arrow-preview" onClick={imgPrev}/>
            )}
                      
        </div>
    )
}

export default Carrousel