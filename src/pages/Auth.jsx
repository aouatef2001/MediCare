import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function useAfterAuth() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const from = state?.from;
  const go = () => navigate(from ? `${from.pathname}${from.search || ""}` : "/", { replace: true });
  return { go, state };
}

export function Login() {
  const { login } = useAuth();
  const { go, state } = useAfterAuth();
  const [f, setF] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    try { login(f); go(); } catch (err) { setError(err.message); }
  };
  return (
    <section className="container page auth">
      <form className="card form" onSubmit={submit} noValidate={false}>
        <h1>Log in</h1>
        {state?.reason === "book" && <p className="notice">Please log in to book an appointment.</p>}
        {error && <p className="alert" role="alert">{error}</p>}
        <label>Email<input type="email" required autoComplete="email" value={f.email} onChange={set("email")} /></label>
        <label>Password<input type="password" required autoComplete="current-password" value={f.password} onChange={set("password")} /></label>
        <button className="btn btn--primary btn--block" type="submit">Log in</button>
        <p className="form__alt">New to MediCare? <Link to="/signup" state={state}>Create an account</Link></p>
      </form>
    </section>
  );
}

export function Signup() {
  const { signup } = useAuth();
  const { go, state } = useAfterAuth();
  const [f, setF] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (f.password.length < 8) return setError("Password must be at least 8 characters.");
    if (f.password !== f.confirm) return setError("Passwords do not match.");
    try { signup(f); go(); } catch (err) { setError(err.message); }
  };
  return (
    <section className="container page auth">
      <form className="card form" onSubmit={submit}>
        <h1>Create your account</h1>
        {state?.reason === "book" && <p className="notice">Create an account to book your appointment.</p>}
        {error && <p className="alert" role="alert">{error}</p>}
        <label>Full name<input required autoComplete="name" value={f.name} onChange={set("name")} /></label>
        <label>Email<input type="email" required autoComplete="email" value={f.email} onChange={set("email")} /></label>
        <label>Password<input type="password" required minLength={8} autoComplete="new-password" value={f.password} onChange={set("password")} /></label>
        <label>Confirm password<input type="password" required autoComplete="new-password" value={f.confirm} onChange={set("confirm")} /></label>
        <button className="btn btn--primary btn--block" type="submit">Sign up</button>
        <p className="form__alt">Already have an account? <Link to="/login" state={state}>Log in</Link></p>
      </form>
    </section>
  );
}