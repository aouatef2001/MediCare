import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { DOCTORS } from "../data.js";

export default function Appointments() {
  const { user, getAppointments, cancelAppointment } = useAuth();
  const [list, setList] = useState(getAppointments);
  const cancel = (id) => { cancelAppointment(id); setList(getAppointments()); };
  const sorted = [...list].sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  return (
    <section className="container page">
      <h1>My appointments</h1>
      <p className="muted">Signed in as {user.email}</p>
      {sorted.length === 0 ? (
        <div className="card info"><p>You have no appointments yet.</p><Link className="btn btn--primary" to="/book">Book an appointment</Link></div>
      ) : (
        <ul className="appt-list">
          {sorted.map((a) => {
            const d = DOCTORS.find((x) => x.id === a.doctor);
            return (
              <li key={a.id} className="card appt">
                <div><strong>{d?.name}</strong><span>{d?.role}</span></div>
                <div><strong>{new Date(a.date + "T00:00").toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short", year: "numeric" })}</strong><span>{a.time}</span></div>
                <button className="btn btn--outline btn--sm" onClick={() => cancel(a.id)}>Cancel</button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}