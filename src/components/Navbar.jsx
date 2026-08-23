import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        <span className="rk">RK</span>

        <div className="logo-text">
          <strong>DANCE & FITNESS</strong>
          <span>STUDIO</span>
        </div>
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/dance">DANCE</NavLink>
        <NavLink to="/zumba">ZUMBA</NavLink>
        <NavLink to="/batches">BATCHES</NavLink>
        <NavLink to="/gallery">GALLERY</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
        <NavLink to="/timetable">TIMETABLE</NavLink>
        <NavLink to="/attendance">ATTENDANCE</NavLink>
      </div>

      <NavLink to="/registration" className="join-btn">
        JOIN NOW
      </NavLink>

      <button className="mobile-menu">
        <Menu size={25} />
      </button>
    </nav>
  );
}

export default Navbar;