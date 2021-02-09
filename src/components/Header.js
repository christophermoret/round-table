import '../App.css';
import logo from './img/roundtable.jpg';

function Header() {
    return (
      <div className="Header">
        <p>Round Table</p>
        <img className="img-logo" src={logo} alt="Logo" />
      </div>
    );
  }
  
  export default Header;
  