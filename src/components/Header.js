import '../App.css';
import logo from './img/roundtable.jpg';

function Header() {
    return (
      <div className="Header">
        <nav class="nav-bar">
          <button>Content</button>
          <button>About us</button>
        </nav>
        <div>
          <img className="img-logo" src={logo} alt="Logo" />
        </div>
        <p>Round Table</p>
      </div>
    );
  }
  
  export default Header;
  