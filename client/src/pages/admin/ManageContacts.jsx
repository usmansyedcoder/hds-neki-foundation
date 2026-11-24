import { useEffect, useState } from "react";
import API from "../../api/axios";

export default function ManageContacts() {
  const [items, setItems] = useState([]);
  const load = () => API.get("/contacts").then((r) => setItems(r.data));
  useEffect(() => {
    load();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-brand-blue mb-6">Messages</h1>
      <div className="space-y-4">
        {items.map((c) => (
          <div key={c._id} className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold">
                  {c.subject}{" "}
                  <span className="text-xs text-slate-500">— {c.name}</span>
                </p>
                <p className="text-xs text-slate-500">
                  {c.email} · {c.phone}
                </p>
              </div>
              <button
                onClick={async () => {
                  await API.put(`/contacts/${c._id}`, {});
                  load();
                }}
                className="text-xs text-brand-blue"
              >
                Mark Read
              </button>
            </div>
            <p className="mt-2 text-sm text-slate-700">{c.message}</p>
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-slate-500">No messages yet.</p>
        )}
      </div>
    </div>
  );
}
