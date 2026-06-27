import Link from "next/link";
import { Trees, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center">
                <Trees size={16} className="text-white" />
              </div>
              <span className="font-semibold text-white text-base">
                Shannon at Indian Point
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Helping buyers explore land and property opportunities near Beautiful
              Indian Point at Turtle Lake.
            </p>
            <p className="mt-4 text-sm text-emerald-500 font-medium">
              Land. Lake. Lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/properties", label: "Properties" },
                { href: "/about", label: "About Shannon" },
                { href: "/area", label: "Indian Point" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-stone-400">
                <Phone size={15} className="text-emerald-500 shrink-0" />
                <span>(306) 000-0000 — placeholder</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-400">
                <Mail size={15} className="text-emerald-500 shrink-0" />
                <span>shannon@example.com — placeholder</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-stone-400">
                <MapPin size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Indian Point / Turtle Lake, Saskatchewan</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-block bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-stone-800">
          <p className="text-xs text-stone-500 leading-relaxed max-w-3xl">
            Property information is provided for marketing purposes and should be independently
            verified. Availability, pricing, and details are subject to change. Buyers should
            conduct their own due diligence regarding zoning, permits, utilities, and all other
            relevant matters before making any purchasing decisions.
          </p>
          <p className="mt-3 text-xs text-stone-600">
            © {new Date().getFullYear()} Shannon at Indian Point. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
