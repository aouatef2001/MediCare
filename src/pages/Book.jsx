import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { SPECIALTIES, DOCTORS, TIME_SLOTS } from "../data.js";
import { I } from "../components/Icons.jsx";

const today = () => new Date().toISOString().split("T")[0];

export default function Book() {
  const { user, addAppointment } = useAuth();
  const [params] = useSearchParams();
  const preDoctor = DOCTORS.find((d) => d.id === params.get("doctor"));
  const preSpec = preDoctor?.specialty || params.get("specialty") || "";
  const [f, setF] = useState({ specialty: preSpec, doctor: preDoctor?.id || "", date: "", time: "", phone: "", reason: "" });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(null);

  const doctors = DOCTORS.filter((d) => d.specialty === f.specialty);
  const set = (k) => (e) => {
    const v = e.target.value;
    setF((p) => ({ ...p, [k]: v, ...(k === "specialty" ? { doctor: "" } : {}) }));
  };

  const validate = () => {
    const e = {};
    if (!f.specialty) e.specialty = "Choose a specialty.";
    if (!f.doctor) e.doctor = "Choose a doctor.";
    if (!f.date) e.date = "Choose a date.";
    else if (f.date < today()) e.date = "Choose a date in the future.";
    else if (new Date(f.date + "T00:00").getDay() === 0) e.date = "The clinic is closed on Sundays.";
    if (!f.time) e.time = "Choose a time.";
    if (!/^[+\d][\d\s-]{7,}$/.test(f.phone.trim())) e.phone = "Enter a valid phone number.";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setDone(addAppointment(f));
  };

  if (done) {
    const doc = DOCTORS.find((d) => d.id === done.doctor);
    return (
      <section className="container page auth">
        <div className="card form confirm">
          <span className="confirm__icon"><I.check size={28} stroke={2} /></span>
          <h1>Appointment booked</h1>
          <p>{doc.name} · {doc.role}</p>
          <p><strong>{new Date(done.date + "T00:00").toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</strong> at <strong>{done.time}</strong></p>
          <p className="muted">Please arrive 10 minutes early and bring your ID.</p>
          <Link className="btn btn--primary btn--block" to="/appointments">View my appointments</Link>
          <Link className="btn btn--outline btn--block" to="/">Back to home</Link>
        </div>
      </section>
    );
  }

  const Field = ({ id, label, error, children }) => (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <span className="field__error" role="alert">{error}</span>}
    </div>
  );

  return (
    <section className="container page auth">
      <form className="card form form--wide" onSubmit={submit} noValidate>
        <h1>Book an appointment</h1>
        <p className="muted">Booking as {user.name} ({user.email})</p>
        <div className="form__row">
          <Field id="specialty" label="Specialty" error={errors.specialty}>
            <select id="specialty" value={f.specialty} onChange={set("specialty")}>
              <option value="">Select a specialty</option>
              {SPECIALTIES.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
            </select>
          </Field>
          <Field id="doctor" label="Doctor" error={errors.doctor}>
            <select id="doctor" value={f.doctor} onChange={set("doctor")} disabled={!f.specialty}>
              <option value="">{f.specialty ? "Select a doctor" : "Choose a specialty first"}</option>
              {doctors.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
            </select>
          </Field>
        </div>
        <div className="form__row">
          <Field id="date" label="Date" error={errors.date}>
            <input id="date" type="date" min={today()} value={f.date} onChange={set("date")} />
          </Field>
          <Field id="time" label="Time" error={errors.time}>
            <select id="time" value={f.time} onChange={set("time")}>
              <option value="">Select a time</option>
              {TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}
            </select>
          </Field>
        </div>
        <Field id="phone" label="Phone number" error={errors.phone}>
          <input id="phone" type="tel" placeholder="+212 6 00 00 00 00" value={f.phone} onChange={set("phone")} autoComplete="tel" />
        </Field>
        <Field id="reason" label="Reason for visit (optional)">
          <textarea id="reason" rows="4" value={f.reason} onChange={set("reason")} />
        </Field>
        <button className="btn btn--primary btn--block" type="submit">Confirm appointment</button>
      </form>
    </section>
  );
}