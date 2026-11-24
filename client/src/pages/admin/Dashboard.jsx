import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import API from "../../api/axios";
import { DollarSign, Users, Mail, Heart } from "lucide-react";

export default function Dashboard() {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({});

  useEffect(() => {
    if (!admin) return navigate("/admin/login");
    API.get("/donations/stats").then((r) => setStats(r.data));
  }, [admin, navigate]);

  const cards = [
    {
      label: "Total Verified (PKR)",
      value: stats.totalAmount || 0,
      icon: DollarSign,
      color: "text-brand-green",
    },
    {
      label: "Pending Donations",
      value: stats.pendingCount || 0,
      icon: Heart,
      color: "text-yellow-600",
    },
    {
      label: "Verified Donations",
      value: stats.verifiedCount || 0,
      icon: Users,
      color: "text-brand-blue",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-brand-blue">
            Admin Dashboard
          </h1>
          <p className="text-slate-500 text-sm">Welcome, {admin?.name}</p>
        </div>
        <button
          onClick={() => {
            logout();
            navigate("/admin/login");
          }}
          className="text-sm text-red-600 hover:underline"
        >
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {cards.map((c) => (
          <div key={c.label} className="card p-6">
            <c.icon className={c.color} size={28} />
            <p className="text-3xl font-extrabold mt-3">{c.value}</p>
            <p className="text-sm text-slate-500">{c.label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {[
          { to: "/admin/programs", label: "Manage Programs" },
          { to: "/admin/news", label: "Manage News" },
          { to: "/admin/donations", label: "View Donations" },
          { to: "/admin/contacts", label: "Messages" },
          { to: "/admin/volunteers", label: "Volunteers" },
        ].map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="card p-5 hover:bg-brand-blue hover:text-white transition font-semibold"
          >
            {l.label} →
          </Link>
        ))}
      </div>
    </div>
  );
}
