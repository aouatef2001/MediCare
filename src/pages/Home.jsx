import { useState } from "react";
import { Link } from "react-router-dom";
import { I } from "../components/Icons.jsx";
import { SPECIALTIES, DOCTORS } from "../data.js";
import heroImg from "../assets/hero.jpg";

const STATS = [
  { icon: I.user, value: "50+", label: "Expert Doctors" },
  { icon: I.steth, value: "12+", label: "Specialties" },
  { icon: I.people, value: "10k+", label: "Happy Patients" },
  { icon: I.headset, value: "24/7", label: "Online Support" },
];

function SectionHead({ eyebrow, title, text, aside }) {
  return (
    <div className="section-head">
      <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{text}</p></div>
      {aside}
    </div>
  );
}

export default function Home() {
  const [filter, setFilter] = useState("all");
  const doctors = filter === "all" ? DOCTORS : DOCTORS.filter((d) => d.specialty === filter);
  return (
    <>
      <section className="container hero">
        <div className="hero__text">
          <span className="pill"><I.heart size={16} stroke={1.8} /> Your Health Matters</span>
          <h1>Your Health,<br /><span>Our Priority</span></h1>
          <p className="hero__lead">Find the right doctor, at the right time.</p>
          <p className="hero__body">MediCare connects you with trusted healthcare professionals and makes it easy to book appointments, manage your health, and get the care you deserve.</p>
          <div className="hero__buttons">
            <Link className="btn btn--primary" to="/#doctors"><I.calendar size={18} /> Find a Doctor</Link>
            <Link className="btn btn--outline" to="/book">Book Appointment</Link>
          </div>
        </div>
        <figure className="hero__media">
          <img src={heroImg} alt="Smiling doctor holding a tablet in a bright clinic" />
          <figcaption className="trust-card">
            <I.shield size={32} stroke={1.5} />
            <div><strong>Trusted Healthcare</strong><span>Experienced doctors, modern facilities, quality care.</span></div>
          </figcaption>
        </figure>
      </section>

      <section className="container">
        <ul className="stats">
          {STATS.map(({ icon: Ico, value, label }) => (
            <li key={label}><Ico size={40} stroke={1.4} /><div><strong>{value}</strong><span>{label}</span></div></li>
          ))}
        </ul>
      </section>

      <section id="services" className="container section">
        <SectionHead eyebrow="Our Specialties" title="Healthcare for Every Need"
          text="From preventive care to specialized treatment, we're here for you." />
        <div className="grid grid--4">
          {SPECIALTIES.map((s) => {
            const Ico = I[s.icon];
            return (
              <Link key={s.slug} className="card specialty" to={`/services/${s.slug}`}>
                <span className="specialty__icon"><Ico size={28} /></span>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <span className="specialty__foot">Learn More <I.arrow size={16} /></span>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="doctors" className="container section">
        <SectionHead eyebrow="Our Doctors" title="Meet Our Experienced Doctors"
          text="Our team of dedicated professionals is here to provide you with the best care."
          aside={
            <label className="select">
              <span className="sr-only">Filter by specialty</span>
              <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All Specialties</option>
                {SPECIALTIES.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
              </select>
              <I.chevron size={16} stroke={1.8} />
            </label>
          } />
        <div className="grid grid--4"><DoctorCards doctors={doctors} /></div>
      </section>

      <section className="container banner-wrap">
        <div className="banner">
          <div>
            <p className="eyebrow">Ready to take care of your health?</p>
            <h2>Book Your Appointment Today</h2>
            <p>It only takes a few minutes. Choose your doctor, pick a time, and get the care you need.</p>
          </div>
          <Link className="btn btn--dark btn--pill" to="/book"><I.calendar size={18} /> Book an Appointment <I.arrow size={16} /></Link>
        </div>
      </section>
    </>
  );
}

const initials = (name) => name.replace("Dr. ", "").split(" ").filter((w) => w.length > 2 || /^[A-Z]/.test(w)).map((w) => w[0]).slice(0, 2).join("");

export function DoctorCards({ doctors }) {
  return doctors.map((d) => (
    <article key={d.id} className="card doctor">
      <div className="doctor__photo">
        {d.img ? <img src={d.img} alt={d.name} /> : <div className="doctor__avatar" role="img" aria-label={d.name}>{initials(d.name)}</div>}
        <span className="rating">★ {d.rating}</span>
      </div>
      <div className="doctor__body">
        <h3>{d.name}</h3><p>{d.role}</p><p>{d.years} years experience</p>
        <Link className="btn btn--primary btn--block" to={`/book?doctor=${d.id}`}><I.calendar size={18} /> Book Appointment</Link>
      </div>
    </article>
  ));
}