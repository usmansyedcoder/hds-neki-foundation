import { useEffect, useState } from "react";
import API from "../../api/axios";
import { toast } from "react-toastify";

export default function ManageVolunteers() {
  const [items, setItems] = useState([]);
  const load = () => API.get("/volunteers").then((r) => setItems(r.data));
  useEffect(() => {
    load();
  }, []);

  const updateStatus = async (id, status) => {
    await API.put(`/volunteers/${id}`, { status });
    toast.success("Updated");
    load();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-brand-blue mb-6">Volunteers</h1>
      <div className="bg-white rounded-2xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-100">
            <tr>
              {[
                "Name",
                "Contact",
                "City",
                "Skills",
                "Availability",
                "Status",
                "Actions",
              ].map((h) => (
                <th key={h} className="text-left px-4 py-3">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((v) => (
              <tr key={v._id} className="border-t">
                <td className="px-4 py-3">{v.name}</td>
                <td className="px-4 py-3 text-slate-600">
                  {v.email}
                  <br />
                  {v.phone}
                </td>
                <td className="px-4 py-3">{v.city}</td>
                <td className="px-4 py-3">{v.skills}</td>
                <td className="px-4 py-3">{v.availability}</td>
                <td className="px-4 py-3">{v.status}</td>
                <td className="px-4 py-3 flex gap-2">
                  <button
                    onClick={() => updateStatus(v._id, "approved")}
                    className="text-green-600 text-xs"
                  >
                    ✓
                  </button>
                  <button
                    onClick={() => updateStatus(v._id, "rejected")}
                    className="text-red-600 text-xs"
                  >
                    ✗
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
