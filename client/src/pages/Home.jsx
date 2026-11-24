import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";
import ProgramCard from "../components/ProgramCard";
import { Heart, Utensils, GraduationCap, Users, HandHeart } from "lucide-react";

const stats = [
  { icon: Users, label: "Families Served", value: "5,000+" },
  { icon: Utensils, label: "Meals Served", value: "50,000+" },
  { icon: GraduationCap, label: "Children Educated", value: "800+" },
  { icon: HandHeart, label: "Volunteers", value: "150+" },
];

export default function Home() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    API.get("/programs")
      .then((r) => setPrograms(r.data.slice(0, 6)))
      .catch(() => {});
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-blue to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,white,transparent)]" />
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 relative">
          <p className="text-brand-green font-semibold mb-3 tracking-wide uppercase text-sm">
            Serving Communities Since 2020
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl">
            Dignity, Access, and Hope for Every Household
          </h1>
          <p className="mt-6 text-lg text-blue-100 max-w-2xl">
            HDS Neki Foundation Pakistan Cooperative Society delivers free
            education, food support, emergency relief and community welfare
            across Peshawar and Khyber Pakhtunkhwa.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/donate"
              className="btn-secondary flex items-center gap-2"
            >
              <Heart size={18} /> Donate Now
            </Link>
            <Link
              to="/volunteer"
              className="px-6 py-3 rounded-full font-semibold border-2 border-white hover:bg-white hover:text-brand-blue transition"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm"
            >
              <s.icon className="mx-auto text-brand-green mb-2" size={30} />
              <p className="text-2xl md:text-3xl font-extrabold text-brand-blue">
                {s.value}
              </p>
              <p className="text-sm text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-4">
            Our Mission
          </h2>
          <p className="text-slate-600 mb-4">
            To mobilize community participation and partnerships to deliver
            inclusive education, humanitarian assistance and practical welfare
            support through transparent, safe and accountable programmes.
          </p>
          <p className="text-slate-600">
            We work where basic services are difficult to reach, focusing on
            dignity, access and direct assistance for vulnerable families and
            children.
          </p>
          <Link to="/about" className="btn-primary inline-block mt-6">
            Learn More
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            "Education",
            "Food Support",
            "Emergency Relief",
            "Community Care",
          ].map((item, i) => (
            <div
              key={item}
              className="bg-gradient-to-br from-brand-blue/10 to-brand-green/10 rounded-2xl p-6 text-center font-semibold text-brand-blue"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
              Our Programmes
            </h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              A broad community-service portfolio with a strong focus on
              dignity, access and direct assistance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <ProgramCard key={p._id} program={p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/programs" className="btn-primary inline-block">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-green text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Let's Turn Community Need Into Measurable Impact
          </h2>
          <p className="text-green-50 mb-8">
            Support our education, food, and relief programs. Every contribution
            counts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/donate"
              className="bg-white text-brand-green px-6 py-3 rounded-full font-bold hover:bg-slate-100 transition"
            >
              Donate
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-brand-green transition"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
