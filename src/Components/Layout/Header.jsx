import Navigation from './Navigation';
import { Button } from 'react-bootstrap';
const Header = () => {

  return (
    <header className="d-flex align-items-center pb-lg-3 mb-lg-5 border-bottom">
      <h3 className="float-md-start mb-0">Chord Finder</h3>
      <span className="p-3">Input your notes, find your chord</span>
      {/* <Navigation></Navigation>  */}
      <div className="d-grid">
        {/* <Button variant="secondary" onClick={() => console.log("Secondary")}></Button> */}
      </div>
    </header>)
}

export default Header;


