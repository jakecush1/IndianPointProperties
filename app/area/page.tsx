import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import { Waves, Trees, Sun, Fish, Snowflake, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Indian Point at Turtle Lake — The Area",
  description:
    "Learn about Beautiful Indian Point at Turtle Lake — peaceful lake-area living, natural surroundings, and land opportunities in a quiet, scenic setting.",
};

export default function AreaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-80 sm:h-96">
        {/* PLACEHOLDER: Replace with a real scenic photo of Indian Point / Turtle Lake */}
        <Image
          src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1600&q=85"
          alt="Turtle Lake at sunrise — peaceful water and natural surroundings"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/65" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 drop-shadow-lg">
            Beautiful Indian Point
          </h1>
          <p className="text-white/85 text-base sm:text-lg max-w-xl leading-relaxed drop-shadow">
            Peaceful lake-area living, natural surroundings, and land opportunities
            with room to imagine what comes next.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* About the Area */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-emerald-700 text-sm font-semibold uppercase tracking-wider mb-2">
              The Setting
            </p>
            <h2 className="text-2xl font-bold text-stone-800 mb-4">
              About the Indian Point Area
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Indian Point sits along the shores of Turtle Lake in a setting that
              rewards anyone who takes the time to explore it. The area is defined by
              its natural character — quiet roads, mature trees, open water, and the
              kind of calm that's become rare.
            </p>
            <p className="text-stone-600 leading-relaxed">
              {/* PLACEHOLDER: Add verified local context about the area before launch */}
              Whether you're thinking about a seasonal cabin, a place to get away
              from the city, or a piece of land that simply holds its value and
              appeals to the next generation, Indian Point offers a setting that's
              hard to dismiss once you've seen it.
            </p>
          </div>
          <div className="relative h-56 rounded-2xl overflow-hidden">
            {/* PLACEHOLDER: Replace with real photo */}
            <Image
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=80"
              alt="Aerial view of lake and forested shoreline"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Why Buyers Are Interested */}
        <section>
          <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">
            Why Buyers Are Drawn to This Area
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Waves size={20} className="text-blue-500" />,
                title: "Lake Area Living",
                desc: "Turtle Lake provides a natural centrepiece to the area — a reason to be here and a backdrop that doesn't get old.",
              },
              {
                icon: <Trees size={20} className="text-emerald-600" />,
                title: "Privacy and Space",
                desc: "Many parcels offer genuine separation from neighbours and a sense of space that's hard to find at this price point.",
              },
              {
                icon: <Sun size={20} className="text-amber-500" />,
                title: "Recreational Appeal",
                desc: "From boating and fishing to winter trails, the area supports year-round outdoor activity.",
              },
              {
                icon: <Fish size={20} className="text-blue-400" />,
                title: "Outdoor Lifestyle",
                desc: "Fishing, exploring, and simply spending time outside — this is land that invites you to use it.",
              },
              {
                icon: <Snowflake size={20} className="text-sky-400" />,
                title: "Four-Season Character",
                desc: "Summers on the lake and winters with snowmobile access give the area year-round relevance for different buyers.",
              },
              {
                icon: <Trees size={20} className="text-stone-500" />,
                title: "Long-Term Value",
                desc: "Raw land in desirable lake areas tends to hold and grow in value over time. Indian Point is no exception.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-stone-100 rounded-2xl p-5"
              >
                <div className="w-9 h-9 bg-stone-50 rounded-xl flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-stone-800 text-sm mb-1.5">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nearby Activities */}
        <section className="bg-stone-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-stone-800 mb-2">Things to Do Nearby</h2>
          <p className="text-stone-500 text-sm mb-6">
            The area supports a range of outdoor activities across the seasons.
            {/* PLACEHOLDER: Verify and expand this list with local knowledge */}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Boating on Turtle Lake",
              "Fishing — walleye, pike, perch",
              "Canoeing and kayaking",
              "Hiking and trail walking",
              "Wildlife watching",
              "Snowmobiling in winter",
              "Cross-country skiing",
              "Cabin weekends",
              "Family getaways",
              "Photography and nature walks",
              "Exploring nearby communities",
              "Ice fishing in winter",
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-stone-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                {activity}
              </div>
            ))}
          </div>
        </section>

        {/* Development Considerations */}
        <section className="border-l-4 border-amber-400 bg-amber-50 rounded-r-2xl p-7">
          <div className="flex items-start gap-3 mb-3">
            <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
            <h2 className="text-lg font-bold text-stone-800">
              Before You Buy — Things to Verify
            </h2>
          </div>
          <p className="text-stone-600 text-sm leading-relaxed mb-4">
            Purchasing raw land involves more due diligence than a typical home
            purchase. Before making any offer, buyers should independently verify:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              "Zoning classification and permitted uses",
              "Year-round road access and condition",
              "Utility availability (water, power, sewer)",
              "Development permits and local bylaws",
              "Lot boundaries and survey accuracy",
              "Water and sewer hookup or alternatives",
              "Seasonal access limitations",
              "Local municipality requirements",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-stone-600">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-stone-400">
            Shannon can help you identify the right questions and point you toward the
            right people — but all development and zoning matters should be confirmed
            directly with local authorities.
          </p>
        </section>
      </div>

      <CTASection
        title="Explore Available Properties"
        subtitle="Browse listings near Indian Point and ask Shannon anything about the area."
        primaryLabel="View Properties"
        primaryHref="/properties"
        secondaryLabel="Ask Shannon About the Area"
        secondaryHref="/contact"
      />
    </>
  );
}
