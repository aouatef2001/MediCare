import { createContext, useContext, useState } from "react";

/*
  DEMO AUTH: users, session and appointments live in localStorage.
  This is fine for a portfolio/front-end project. For a real clinic,
  replace these functions with calls to a backend API.
*/
const USERS = "medicare_users", SESSION = "medicare_session", APPTS = "medicare_appointments";
const read = (k, fallback) => { try { return JSON.parse(localStorage.getItem(k)) ?? fallback; } catch { return fallback; } };
const write = (k, v) => localStorage.setItem(k, JSON.stringify(v));

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => read(SESSION, null));

  const signup = ({ name, email, password }) => {
    const users = read(USERS, []);
    const e = email.trim().toLowerCase();
    if (users.some((u) => u.email === e)) throw new Error("An account with this email already exists.");
    users.push({ name: name.trim(), email: e, password });
    write(USERS, users);
    const session = { name: name.trim(), email: e };
    write(SESSION, session); setUser(session);
  };

  const login = ({ email, password }) => {
    const e = email.trim().toLowerCase();
    const found = read(USERS, []).find((u) => u.email === e && u.password === password);
    if (!found) throw new Error("Email or password is incorrect.");
    const session = { name: found.name, email: found.email };
    write(SESSION, session); setUser(session);
  };

  const logout = () => { localStorage.removeItem(SESSION); setUser(null); };

  const getAppointments = () => read(APPTS, []).filter((a) => a.userEmail === user?.email);
  const addAppointment = (data) => {
    const appt = { id: crypto.randomUUID(), userEmail: user.email, createdAt: new Date().toISOString(), ...data };
    write(APPTS, [...read(APPTS, []), appt]);
    return appt;
  };
  const cancelAppointment = (id) => write(APPTS, read(APPTS, []).filter((a) => a.id !== id));

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, getAppointments, addAppointment, cancelAppointment }}>
      {children}
    </AuthContext.Provider>
  );
}