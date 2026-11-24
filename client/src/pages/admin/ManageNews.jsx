import { useEffect, useState } from "react";
import API from "../../api/axios";
import { toast } from "react-toastify";

const empty = { title: "", slug: "", excerpt: "", content: "" };

export default function ManageNews() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(empty);

  const load = () => API.get("/news/all").then((r) => setItems(r.data));
  useEffect(() => {
    load();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/news", form);
      toast.success("News added");
      setForm(empty);
      load();
    } catch (err) {
      toast.error(err.response?.data?.message);
    }
  };

  const remove = async (id) => {
    if (!confirm("Delete?")) return;
    await API.delete(`/news/${id}`);
    load();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-brand-blue mb-6">News</h1>
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
          placeholder="Excerpt"
          value={form.excerpt}
          onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
          required
        />
        <textarea
          className="input"
          rows="5"
          placeholder="Content (HTML allowed)"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
        />
        <button className="btn-primary">Publish</button>
      </form>
      <div className="space-y-2">
        {items.map((n) => (
          <div
            key={n._id}
            className="card p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{n.title}</p>
              <p className="text-xs text-slate-500">
                {new Date(n.createdAt).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={() => remove(n._id)}
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
