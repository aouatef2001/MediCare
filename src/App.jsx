import { useEffect, useState } from "react";
import { Routes, Route, Outlet, useLocation, Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import RequireAuth from "./components/RequireAuth.jsx";
import Home from "./pages/Home.jsx";
import Specialty from "./pages/Specialty.jsx";
import Book from "./pages/Book.jsx";
import Appointments from "./pages/Appointments.jsx";
import { Login, Signup } from "./pages/Auth.jsx";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Layout() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="app" data-theme={theme}>
      <ScrollManager />
      <Header theme={theme} onToggleTheme={() => setTheme(theme === "light" ? "dark" : "light")} />
      <main><Outlet /></main>
      <Footer />
    </div>
  );
}

const NotFound = () => (
  <section className="container page"><h1>Page not found</h1><p>The page you are looking for does not exist.</p><Link className="btn btn--primary" to="/">Back to home</Link></section>
);

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services/:slug" element={<Specialty />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="book" element={<RequireAuth><Book /></RequireAuth>} />
        <Route path="appointments" element={<RequireAuth><Appointments /></RequireAuth>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}