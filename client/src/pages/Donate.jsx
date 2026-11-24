import { useState } from "react";
import { useForm } from "react-hook-form";
import API from "../api/axios";
import { toast } from "react-toastify";

export default function Donate() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await API.post("/donations", data);
      toast.success("Thank you! Your donation pledge has been recorded.");
      reset();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-brand-blue mb-2">
        Support Our Mission
      </h1>
      <p className="text-slate-600 mb-8">
        Your contribution supports free education, food assistance, and
        emergency relief for families in Khyber Pakhtunkhwa.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="card p-6">
          <h3 className="font-bold text-brand-blue mb-3">
            Bank / Wallet Details
          </h3>
          <p className="text-sm text-slate-600 mb-2">
            <strong>JazzCash / EasyPaisa:</strong> 0311-9003301
          </p>
          <p className="text-sm text-slate-600 mb-2">
            <strong>Account Title:</strong> HDS Neki Foundation
          </p>
          <p className="text-sm text-slate-600">
            Send your transaction ID through the form so we can verify your
            donation.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="card p-6 space-y-3">
          <input
            className="input"
            placeholder="Your Name"
            {...register("donorName", { required: true })}
          />
          <input
            className="input"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
          <input
            className="input"
            placeholder="Phone"
            {...register("phone", { required: true })}
          />
          <input
            className="input"
            placeholder="Amount (PKR)"
            type="number"
            {...register("amount", { required: true })}
          />
          <select className="input" {...register("paymentMethod")}>
            <option>JazzCash</option>
            <option>EasyPaisa</option>
            <option>Bank Transfer</option>
            <option>Cash</option>
          </select>
          <input
            className="input"
            placeholder="Transaction ID"
            {...register("transactionId")}
          />
          <textarea
            className="input"
            rows="3"
            placeholder="Message (optional)"
            {...register("message")}
          />
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full"
          >
            {loading ? "Submitting..." : "Submit Donation Pledge"}
          </button>
        </form>
      </div>
    </div>
  );
}
