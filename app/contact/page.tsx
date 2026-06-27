import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Shannon",
  description:
    "Get in touch with Shannon about land and property opportunities near Indian Point at Turtle Lake.",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Header */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <p className="text-emerald-700 text-sm font-semibold uppercase tracking-wider mb-2">
          Get in Touch
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 mb-3">
          Contact Shannon
        </h1>
        <p className="text-stone-500 leading-relaxed text-base">
          Have questions about a lot, location, or development potential? Send Shannon
          a message and include the property you're interested in.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Form */}
        <div className="lg:col-span-3 bg-white border border-stone-100 rounded-2xl p-7 shadow-sm">
          <h2 className="font-semibold text-stone-800 mb-5">Send a Message</h2>
          <Suspense fallback={<div className="text-stone-400 text-sm">Loading form...</div>}>
            <ContactForm />
          </Suspense>
        </div>

        {/* Contact Card + Info */}
        <div className="lg:col-span-2 space-y-5">
          {/* Shannon card */}
          <div className="bg-emerald-800 text-white rounded-2xl p-6">
            <div className="w-14 h-14 rounded-full bg-emerald-600 flex items-center justify-center text-2xl font-bold mb-4">
              S
            </div>
            <p className="font-bold text-lg mb-0.5">Shannon</p>
            <p className="text-emerald-200 text-sm mb-5">Real Estate Agent</p>

            <dl className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-emerald-300 mt-0.5 shrink-0" />
                <div>
                  <dt className="text-xs text-emerald-300">Phone</dt>
                  {/* PLACEHOLDER: Replace with Shannon's real phone number */}
                  <dd className="text-sm text-white">(306) 000-0000</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={15} className="text-emerald-300 mt-0.5 shrink-0" />
                <div>
                  <dt className="text-xs text-emerald-300">Email</dt>
                  {/* PLACEHOLDER: Replace with Shannon's real email address */}
                  <dd className="text-sm text-white">shannon@example.com</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-emerald-300 mt-0.5 shrink-0" />
                <div>
                  <dt className="text-xs text-emerald-300">Service Area</dt>
                  <dd className="text-sm text-white">Indian Point / Turtle Lake, SK</dd>
                </div>
              </div>
            </dl>
          </div>

          {/* FAQ-style notes */}
          <div className="bg-white border border-stone-100 rounded-2xl p-6 space-y-4">
            <h3 className="font-semibold text-stone-800 text-sm">What to include in your message</h3>
            <ul className="space-y-2">
              {[
                "Which property you're asking about",
                "What you're looking for in a property",
                "Any questions about the lot, access, or area",
                "Your timeline or plans if you're comfortable sharing",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-stone-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Response time note */}
          <div className="text-center">
            <p className="text-xs text-stone-400">
              Shannon typically responds within one business day.
              {/* PLACEHOLDER: Update with Shannon's real response time policy */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
