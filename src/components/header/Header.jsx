import { NavLink } from "react-router-dom"
import Logo from "../../assets/Logo.png"

function Header() {
  return (
    <section className="header-container">
      <section className="header">
        <div className="logo-header">
          <img src={Logo}/>
        </div>
        <div className="menu">
          <ul className="menu__list">
            <li>
              <NavLink to="/" className={(x) => {
                return x.isActive ? "menu__list--link active" : "menu__list--link"
              }}>Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={(x) => {
                return x.isActive ? "menu__list--link active" : "menu__list--link"
              }}>A Propos</NavLink>
            </li>
          </ul>
        </div>
      </section>
    </section>
  )
}

export default Header