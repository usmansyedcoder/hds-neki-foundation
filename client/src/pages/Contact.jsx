import { useForm } from "react-hook-form";
import API from "../api/axios";
import { toast } from "react-toastify";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await API.post("/contacts", data);
      toast.success("Message sent! We will get back to you soon.");
      reset();
    } catch (err) {
      toast.error(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-brand-blue mb-8">
        Contact Us
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="card p-4 flex gap-3">
            <MapPin className="text-brand-green" />
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-sm text-slate-600">
                Grace Plaza, Nisherabad, Peshawar, Khyber Pakhtunkhwa
              </p>
            </div>
          </div>
          <div className="card p-4 flex gap-3">
            <Phone className="text-brand-green" />
            <div>
              <p className="font-semibold">Helpline</p>
              <p className="text-sm text-slate-600">
                0311-9003301 · 0333-9425477
              </p>
            </div>
          </div>
          <div className="card p-4 flex gap-3">
            <Mail className="text-brand-green" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm text-slate-600">nekifoundation@gmail.com</p>
            </div>
          </div>
        </div>

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
          <input className="input" placeholder="Phone" {...register("phone")} />
          <input
            className="input"
            placeholder="Subject"
            {...register("subject", { required: true })}
          />
          <textarea
            className="input"
            rows="4"
            placeholder="Message"
            {...register("message", { required: true })}
          />
          <button className="btn-primary w-full">Send Message</button>
        </form>
      </div>
    </div>
  );
}
