import logoFooter from "../../assets/Logo-footer.png"

function Footer() {
  return (
    <section className="footer">
        <div className="footer__logo">
          <img src={logoFooter}/>
        </div>
        <p className="footer__rights">© 2020 Kasa. All rights reserved</p>
    </section>
  )
}

export default Footer