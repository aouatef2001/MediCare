import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import { I } from "./Icons.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const close = () => setOpen(false);
  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />
        <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Main">
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <Link to="/#doctors" onClick={close}>Doctors</Link>
          <Link to="/#services" onClick={close}>Services</Link>
          <Link to="/#about" onClick={close}>About</Link>
          <div className="nav__auth">
            {user ? (
              <>
                <Link to="/appointments" onClick={close}>My appointments</Link>
                <button className="link-btn" onClick={() => { logout(); close(); }}>Log out</button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={close}>Log in</Link>
                <Link to="/signup" onClick={close}>Sign up</Link>
              </>
            )}
          </div>
        </nav>
        <div className="header__actions">
          <button className="icon-btn" onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
            {theme === "dark" ? <I.sun size={20} /> : <I.moon size={20} />}
          </button>
          <div className="header__auth">
            {user ? (
              <>
                <Link className="auth-link" to="/appointments">{user.name.split(" ")[0]}</Link>
                <button className="link-btn" onClick={logout}>Log out</button>
              </>
            ) : (
              <>
                <Link className="auth-link" to="/login">Log in</Link>
                <Link className="btn btn--outline btn--sm" to="/signup">Sign up</Link>
              </>
            )}
          </div>
          <Link className="btn btn--primary header__cta" to="/book"><I.calendar size={18} /> Book an Appointment</Link>
          <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
            <I.menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}