import { useEffect, useState } from "react";
import API from "../../api/axios";
import { toast } from "react-toastify";

const emptyForm = {
  title: "",
  slug: "",
  description: "",
  category: "Education",
  icon: "Heart",
  order: 0,
};

export default function ManagePrograms() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm);

  const load = () => API.get("/programs/all").then((r) => setItems(r.data));
  useEffect(() => {
    load();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const slug =
        form.slug ||
        form.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      await API.post("/programs", { ...form, slug });
      toast.success("Program added");
      setForm(emptyForm);
      load();
    } catch (err) {
      toast.error(err.response?.data?.message);
    }
  };

  const remove = async (id) => {
    if (!confirm("Delete this program?")) return;
    await API.delete(`/programs/${id}`);
    toast.success("Deleted");
    load();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-brand-blue mb-6">Programs</h1>

      <form onSubmit={submit} className="card p-4 space-y-2 mb-8">
        <input
          className="input"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          className="input"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <div className="grid md:grid-cols-3 gap-2">
          <select
            className="input"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            {[
              "Education",
              "Food Assistance",
              "Humanitarian",
              "Community Welfare",
              "Ramazan",
              "Religious",
              "Other",
            ].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <input
            className="input"
            placeholder="Icon (lucide name)"
            value={form.icon}
            onChange={(e) => setForm({ ...form, icon: e.target.value })}
          />
          <input
            className="input"
            type="number"
            placeholder="Order"
            value={form.order}
            onChange={(e) => setForm({ ...form, order: +e.target.value })}
          />
        </div>
        <button className="btn-primary">Add Program</button>
      </form>

      <div className="space-y-2">
        {items.map((p) => (
          <div
            key={p._id}
            className="card p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{p.title}</p>
              <p className="text-xs text-slate-500">
                {p.category} · {p.slug}
              </p>
            </div>
            <button
              onClick={() => remove(p._id)}
              className="text-red-600 text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
