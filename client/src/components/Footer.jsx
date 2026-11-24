import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">
            HDS Neki Foundation
          </h3>
          <p className="text-sm leading-relaxed">
            A registered cooperative society serving communities in Peshawar and
            Khyber Pakhtunkhwa since 2020.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              Grace Plaza, Nisherabad, Peshawar, KP
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> 0311-9003301
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> nekifoundation@gmail.com
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Follow Us</h4>
          <a
            href="https://facebook.com/HDSNeki"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-brand-green"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            facebook.com/HDSNeki
          </a>
          <Link
            to="/donate"
            className="btn-secondary mt-4 inline-block text-sm"
          >
            Donate Now
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-700 py-4 text-center text-xs">
        © {new Date().getFullYear()} HDS Neki Foundation Pakistan Cooperative
        Society (Regd). All rights reserved.
      </div>
    </footer>
  );
}
