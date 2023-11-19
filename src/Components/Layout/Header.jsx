import Navigation from "./Navigation";
import { Button } from "react-bootstrap";
const Header = () => {
  return (
    <header className="d-flex p-2 pb-lg-3 mb-lg-5 border-bottom align-items-center">
      <a className="navbar-brand" href="https://joehunter.es">
        <img src="logo_75.png" alt="logo" height="34" />
      </a>
      <h1 className="small m-1">Chord Finder</h1>
    </header>
  );
};

export default Header;
