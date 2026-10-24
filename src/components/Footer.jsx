import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { SPECIALTIES } from "../data.js";

export default function Footer() {
  return (
    <footer id="about" className="footer">
      <div className="container footer__grid">
        <div>
          <Logo light />
          <p className="footer__about">We are committed to providing high-quality healthcare services and building healthier communities for a brighter future.</p>
        </div>
        <nav aria-label="Quick links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/#doctors">Doctors</Link>
          <Link to="/#services">Services</Link>
          <Link to="/book">Book an appointment</Link>
          <Link to="/login">Log in</Link>
        </nav>
        <nav aria-label="Our services">
          <h4>Our Services</h4>
          {SPECIALTIES.map((s) => <Link key={s.slug} to={`/services/${s.slug}`}>{s.name}</Link>)}
        </nav>
        <address>
          <h4>Contact Us</h4>
          123 Health Street<br />Casablanca, Morocco<br />
          <a href="tel:+212522123456">+212 5 22 12 34 56</a><br />
          <a href="mailto:contact@medicare.ma">contact@medicare.ma</a>
        </address>
      </div>
      <div className="container footer__legal">
        <span>© 2025 MediCare. All rights reserved.</span>
        <span><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></span>
      </div>
    </footer>
  );
}