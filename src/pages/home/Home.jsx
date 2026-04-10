import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import logements from "../../data/logements.json"
import imgBannerHeader from "../../assets/img-banner.png"

function Home() {
    return (
        <section className="homepage">
            <Banner image={imgBannerHeader} title="Chez vous, partout et ailleurs" overlay={true}/>
            <div className="card-container">
                {logements.map((x) => {
                    return <Card key={x.id} id={x.id} title={x.title} cover={x.cover}/>
                })}
            </div>
        </section>
    )
}

export default Home