import { Link, useParams } from "react-router-dom";
import { I } from "../components/Icons.jsx";
import { SPECIALTIES, DOCTORS } from "../data.js";
import { DoctorCards } from "./Home.jsx";

export default function Specialty() {
  const { slug } = useParams();
  const s = SPECIALTIES.find((x) => x.slug === slug);
  if (!s) {
    return (
      <section className="container page">
        <h1>Specialty not found</h1>
        <p>We couldn't find that service.</p>
        <Link className="btn btn--primary" to="/#services">See all services</Link>
      </section>
    );
  }
  const Ico = I[s.icon];
  const doctors = DOCTORS.filter((d) => d.specialty === s.slug);
  return (
    <>
      <section className="container page">
        <nav className="crumbs" aria-label="Breadcrumb"><Link to="/">Home</Link> / <Link to="/#services">Services</Link> / <span>{s.name}</span></nav>
        <div className="spec-hero">
          <span className="specialty__icon specialty__icon--lg"><Ico size={36} /></span>
          <div>
            <h1>{s.name}</h1>
            <p className="lead">{s.intro}</p>
            <Link className="btn btn--primary" to={`/book?specialty=${s.slug}`}><I.calendar size={18} /> Book a {s.name} visit</Link>
          </div>
        </div>
        <div className="spec-grid">
          <div className="card info"><h2>Conditions we treat</h2><ul className="check-list">{s.treats.map((t) => <li key={t}><I.check size={18} />{t}</li>)}</ul></div>
          <div className="card info"><h2>Our services</h2><ul className="check-list">{s.services.map((t) => <li key={t}><I.check size={18} />{t}</li>)}</ul></div>
        </div>
        <div className="card info expect">
          <h2>What to expect at your visit</h2>
          <ol>{s.expect.map((t) => <li key={t}>{t}</li>)}</ol>
        </div>
      </section>
      <section className="container section">
        <div className="section-head"><div><h2>{s.name} doctors</h2><p>Choose a doctor and book directly.</p></div></div>
        <div className="grid grid--4"><DoctorCards doctors={doctors} /></div>
      </section>
    </>
  );
}