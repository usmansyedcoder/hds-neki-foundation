import { useEffect, useState } from "react";
import API from "../../api/axios";
import { toast } from "react-toastify";

export default function ManageDonations() {
  const [donations, setDonations] = useState([]);

  const load = () => API.get("/donations").then((r) => setDonations(r.data));
  useEffect(() => {
    load();
  }, []);

  const updateStatus = async (id, status) => {
    await API.put(`/donations/${id}`, { status });
    toast.success("Status updated");
    load();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-brand-blue mb-6">Donations</h1>
      <div className="bg-white rounded-2xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-100">
            <tr>
              {["Donor", "Contact", "Amount", "Method", "Status", "Action"].map(
                (h) => (
                  <th key={h} className="text-left px-4 py-3 font-semibold">
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {donations.map((d) => (
              <tr key={d._id} className="border-t">
                <td className="px-4 py-3">{d.donorName}</td>
                <td className="px-4 py-3 text-slate-600">
                  {d.email}
                  <br />
                  {d.phone}
                </td>
                <td className="px-4 py-3 font-semibold">PKR {d.amount}</td>
                <td className="px-4 py-3">{d.paymentMethod}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      d.status === "verified"
                        ? "bg-green-100 text-green-700"
                        : d.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {d.status}
                  </span>
                </td>
                <td className="px-4 py-3 flex gap-2">
                  <button
                    onClick={() => updateStatus(d._id, "verified")}
                    className="text-green-600 text-xs"
                  >
                    ✓ Verify
                  </button>
                  <button
                    onClick={() => updateStatus(d._id, "rejected")}
                    className="text-red-600 text-xs"
                  >
                    ✗ Reject
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
