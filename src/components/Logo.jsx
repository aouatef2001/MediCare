import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
  return (
    <Link className={`logo ${light ? "logo--light" : ""}`} to="/" aria-label="MediCare home">
      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
        <path className="logo__shape" d="M20 4c3 0 5 2 5 5v6h6c3 0 5 2 5 5s-2 5-5 5h-6v6c0 3-2 5-5 5s-5-2-5-5v-6H9c-3 0-5-2-5-5s2-5 5-5h6V9c0-3 2-5 5-5z" />
        <path className="logo__cross" d="M20 12v16M12 20h16" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span><strong>MediCare</strong><small>Better Health. Brighter Tomorrow.</small></span>
    </Link>
  );
}