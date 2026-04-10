
function Banner({image, title, overlay}) {
    return (
        <div className="banner">
            <img src={image} alt="banner"/>
            {overlay && <div className="banner__overlay"></div>}
            {title && <p className="banner__txt">Chez vous, partout et ailleurs</p>}
        </div>
    )
}
export default Banner