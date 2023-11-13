import "./Header.css";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <img src={logo} className="logo" alt="imagen de un ojo" />

        <h1 className="nombreTienda">
          <Link className="nombre" to="/">
            LA OPTICA
          </Link>
        </h1>

        <nav className="navbar">
          <NavLink className="navbarLink" to="/">
            Home
          </NavLink>
          <NavLink className="navbarLink" to="/categoria/1">
            Lentes de sol
          </NavLink>
          <NavLink className="navbarLink" to="/categoria/2">
            Lentes con aumento
          </NavLink>
        </nav>

        <CartWidget />
      </div>
    </header>
  );
};
