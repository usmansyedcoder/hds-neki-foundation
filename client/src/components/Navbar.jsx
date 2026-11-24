import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/news", label: "News" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center text-white font-bold">
            HDS
          </div>
          <div className="leading-tight">
            <p className="font-bold text-brand-blue">HDS Neki Foundation</p>
            <p className="text-xs text-slate-500">Peshawar · Since 2020</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive
                    ? "text-brand-blue"
                    : "text-slate-600 hover:text-brand-blue"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/donate"
            className="flex items-center gap-2 bg-brand-green text-white px-5 py-2 rounded-full font-semibold hover:bg-green-600 transition text-sm"
          >
            <Heart size={16} /> Donate
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-slate-700"
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/donate"
            onClick={() => setOpen(false)}
            className="block text-center bg-brand-green text-white py-2 rounded-full"
          >
            Donate
          </Link>
        </div>
      )}
    </header>
  );
}
