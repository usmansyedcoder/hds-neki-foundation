import * as Icons from "lucide-react";

export default function ProgramCard({ program }) {
  const Icon = Icons[program.icon] || Icons.Heart;

  return (
    <div className="card p-6">
      <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
        <Icon className="text-brand-blue" size={26} />
      </div>
      <span className="text-xs font-semibold text-brand-green uppercase">
        {program.category}
      </span>
      <h3 className="font-bold text-lg mt-1 mb-2">{program.title}</h3>
      <p className="text-slate-600 text-sm">{program.description}</p>
    </div>
  );
}
