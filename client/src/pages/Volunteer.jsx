import { useForm } from "react-hook-form";
import API from "../api/axios";
import { toast } from "react-toastify";

export default function Volunteer() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await API.post("/volunteers", data);
      toast.success("Thank you for volunteering!");
      reset();
    } catch (err) {
      toast.error(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-brand-blue mb-2">
        Become a Volunteer
      </h1>
      <p className="text-slate-600 mb-8">
        Join our team and help us serve communities across Peshawar.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="card p-6 space-y-3">
        <input
          className="input"
          placeholder="Name"
          {...register("name", { required: true })}
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
          placeholder="City"
          defaultValue="Peshawar"
          {...register("city")}
        />
        <input
          className="input"
          placeholder="Skills / Interests"
          {...register("skills")}
        />
        <select className="input" {...register("availability")}>
          <option>Weekends</option>
          <option>Weekdays</option>
          <option>Full-time</option>
          <option>Part-time</option>
        </select>
        <textarea
          className="input"
          rows="3"
          placeholder="Message (optional)"
          {...register("message")}
        />
        <button className="btn-primary w-full">Submit Application</button>
      </form>
    </div>
  );
}
