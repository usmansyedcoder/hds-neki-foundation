import { useEffect, useState } from "react";
import API from "../api/axios";
import ProgramCard from "../components/ProgramCard";

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    API.get("/programs").then((r) => setPrograms(r.data));
  }, []);

  const categories = ["All", ...new Set(programs.map((p) => p.category))];
  const filtered =
    filter === "All" ? programs : programs.filter((p) => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-brand-blue mb-4">
        Our Programmes
      </h1>
      <p className="text-slate-600 mb-8 max-w-2xl">
        HDS Neki Foundation runs 9+ active initiatives spanning education, food
        support, emergency relief and community care.
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              filter === c
                ? "bg-brand-blue text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProgramCard key={p._id} program={p} />
        ))}
      </div>
    </div>
  );
}
