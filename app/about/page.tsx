import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Shannon",
  description:
    "Learn about Shannon, a real estate agent helping buyers explore land and property opportunities near Beautiful Indian Point at Turtle Lake.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-800 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-700 flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white">
            S
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Shannon</h1>
          <p className="text-stone-300 text-base leading-relaxed max-w-xl mx-auto">
            Real estate agent helping buyers find land and property opportunities near
            Beautiful Indian Point at Turtle Lake.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        {/* Intro */}
        <section>
          <p className="text-emerald-700 text-sm font-semibold uppercase tracking-wider mb-2">
            A Trusted Local Voice
          </p>
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Who Is Shannon?</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Shannon is a real estate agent with a focused interest in land and
            property opportunities around the Indian Point and Turtle Lake area. Her
            work is centred on connecting buyers with the right parcels — raw land,
            development lots, and lake-area properties that fit their vision.
          </p>
          <p className="text-stone-600 leading-relaxed">
            {/* PLACEHOLDER: Replace with Shannon's real background when available */}
            Whether you're a first-time land buyer or someone who knows exactly what
            they're looking for, Shannon's approach is straightforward: listen first,
            answer your questions honestly, and help you make a decision you'll feel
            confident about.
          </p>
        </section>

        {/* Shannon's Approach */}
        <section className="bg-stone-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-stone-800 mb-4">Shannon's Approach</h2>
          <p className="text-stone-600 leading-relaxed mb-5">
            Buying raw land is different from buying a house. There are more questions
            to ask, more things to verify, and fewer obvious reference points. Shannon
            helps buyers understand:
          </p>
          <ul className="space-y-3">
            {[
              "What each property includes and what it doesn't",
              "The features and character of each lot",
              "Why the Indian Point and Turtle Lake area appeals to buyers",
              "The development potential and limitations of raw land",
              "What questions to ask before making a decision",
              "Who to consult for zoning, permits, and services",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-stone-600">
                <CheckCircle size={15} className="text-emerald-600 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Why Indian Point */}
        <section>
          <h2 className="text-xl font-bold text-stone-800 mb-4">
            Why Indian Point and Turtle Lake?
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            The Indian Point area at Turtle Lake has a particular kind of quiet appeal.
            It's the kind of place people come to once and start imagining what it would
            feel like to have a piece of land there. The lake, the trees, the pace of
            things — it all adds up to something that's harder and harder to find close
            to home.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Shannon has focused her practice on this area because the properties here
            are genuinely interesting — varied in size, character, and potential — and
            because she believes buyers deserve to work with someone who actually knows
            the land they're looking at.
          </p>
        </section>

        {/* Working With Buyers */}
        <section className="border border-stone-200 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-stone-800 mb-4">
            Working With Land Buyers
          </h2>
          <p className="text-stone-600 leading-relaxed mb-5">
            Buying raw land comes with questions that don't always have quick answers.
            Shannon is comfortable walking buyers through the things that matter most:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Road access and year-round usability",
              "Available services and utilities",
              "Development and permit considerations",
              "Lot boundaries and survey details",
              "Proximity to the lake and water access",
              "Long-term plans and investment potential",
              "Seasonal access and weather considerations",
              "What to ask the local municipality",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 text-sm text-stone-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-stone-400">
            Note: Shannon can help you understand and research these questions, but
            buyers should verify all zoning, permits, and legal details independently
            with the appropriate professionals.
          </p>
        </section>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-center py-3.5 rounded-xl transition-colors text-sm"
          >
            Contact Shannon
          </Link>
          <Link
            href="/properties"
            className="flex-1 border border-stone-200 text-stone-700 font-semibold text-center py-3.5 rounded-xl hover:bg-stone-50 transition-colors text-sm"
          >
            View Available Properties
          </Link>
        </div>
      </div>

      <CTASection
        title="Ready to Find Your Property?"
        subtitle="Browse available listings near Indian Point and reach out when something catches your eye."
        primaryLabel="View Properties"
        primaryHref="/properties"
        secondaryLabel="Ask Shannon a Question"
        secondaryHref="/contact"
      />
    </>
  );
}
