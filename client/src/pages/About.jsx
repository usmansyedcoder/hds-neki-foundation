export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-brand-blue mb-4">About Us</h1>
      <p className="text-slate-600 mb-8">
        HDS Neki Foundation Pakistan Cooperative Society (Regd) is a welfare
        organization based in Peshawar, Khyber Pakhtunkhwa. Working since 2020
        across community welfare, food assistance, education, humanitarian
        response, learning and community-support initiatives.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            title: "Our Purpose",
            text: "Reduce barriers to basic services, support people in vulnerable situations and expand opportunities for learning, dignity and community wellbeing.",
          },
          {
            title: "Our Vision",
            text: "Communities in which every child can access quality learning and every vulnerable household can seek support with dignity.",
          },
          {
            title: "Our Mission",
            text: "To mobilize community participation and partnerships to deliver inclusive education, humanitarian assistance and practical welfare support.",
          },
        ].map((b) => (
          <div key={b.title} className="card p-6">
            <h3 className="text-xl font-bold text-brand-green mb-2">
              {b.title}
            </h3>
            <p className="text-slate-600 text-sm">{b.text}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-brand-blue mb-4">Leadership</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { role: "Chairman", name: "Allama Tahir Mehmood" },
          { role: "President", name: "Sabahat Ghaznavi" },
          { role: "General Secretary", name: "Anam Saleem" },
        ].map((p) => (
          <div key={p.role} className="card p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-brand-blue/10 mx-auto mb-3 flex items-center justify-center text-brand-blue text-2xl font-bold">
              {p.name.charAt(0)}
            </div>
            <p className="font-bold">{p.name}</p>
            <p className="text-sm text-brand-green">{p.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-slate-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-2">Registration</h2>
        <p className="text-sm text-slate-600">
          Registered under Section 10 of the Khyber Pakhtunkhwa Cooperative
          Societies Act 1925 (Amended 2020). Registration No: 66, Date:
          20/09/2022, Office of the Assistant Registrar Cooperative Societies,
          Peshawar.
        </p>
      </div>
    </div>
  );
}
