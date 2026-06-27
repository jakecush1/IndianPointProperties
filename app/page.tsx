import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedProperties } from "@/data/properties";
import ImageCarousel from "@/components/ImageCarousel";
import PropertyCard from "@/components/PropertyCard";
import { ArrowRight, Trees, Waves, Sun } from "lucide-react";

export const metadata: Metadata = {
  title: "Shannon Real Estate | Land Near Indian Point at Turtle Lake",
  description:
    "Discover peaceful lake-area properties, development lots, and land investment opportunities near Beautiful Indian Point at Turtle Lake.",
};

// PLACEHOLDER: Replace these with real scenic photos of Indian Point / Turtle Lake before launch.
const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=85",
    alt: "Aerial view of lake surrounded by forest",
  },
  {
    src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1600&q=85",
    alt: "Peaceful lake at sunrise with reflections",
  },
  {
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=85",
    alt: "Dense boreal forest with sunlight filtering through",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85",
    alt: "Mountain lake view at golden hour",
  },
];

export default function HomePage() {
  const featured = getFeaturedProperties();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[520px] max-h-[800px]">
        <ImageCarousel images={heroImages} className="h-full" priority />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />
        {/* Text */}
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-emerald-700/80 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wider uppercase">
              Indian Point · Turtle Lake
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 drop-shadow-lg">
              Discover Land Near Beautiful{" "}
              <span className="text-emerald-300">Indian Point</span> at Turtle Lake
            </h1>
            <p className="text-base sm:text-lg text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
              Explore peaceful lake-area properties, development lots, and investment
              opportunities with Shannon.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/properties"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm"
              >
                View Properties
              </Link>
              <Link
                href="/contact"
                className="bg-white/15 hover:bg-white/25 border border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors backdrop-blur-sm text-sm"
              >
                Contact Shannon
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { icon: <Trees size={22} className="text-emerald-600" />, label: "Raw Land & Lots", desc: "Treed parcels, clearings, and lake-area properties" },
            { icon: <Waves size={22} className="text-blue-500" />, label: "Lake Area Location", desc: "Nestled near Beautiful Indian Point at Turtle Lake" },
            { icon: <Sun size={22} className="text-amber-500" />, label: "Cabin Potential", desc: "Recreational use, investment, or seasonal retreat" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center border border-stone-100">
                {item.icon}
              </div>
              <p className="font-semibold text-stone-800 text-sm">{item.label}</p>
              <p className="text-stone-400 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-emerald-700 text-sm font-semibold uppercase tracking-wider mb-1">
              Currently Available
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-800">
              Featured Properties
            </h2>
          </div>
          <Link
            href="/properties"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-900 transition-colors"
          >
            View all listings <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/properties"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700"
          >
            View all listings <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Area Preview */}
      <section className="bg-emerald-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-emerald-300 text-sm font-semibold uppercase tracking-wider mb-3">
              The Location
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">
              Beautiful Indian Point at Turtle Lake
            </h2>
            <p className="text-emerald-100 leading-relaxed mb-6 text-base">
              Indian Point sits along the shores of Turtle Lake — a peaceful,
              natural setting that draws people seeking space, privacy, and
              connection to the outdoors. Whether you're dreaming of a cabin
              getaway or a long-term land investment, the area has a quiet appeal
              that's hard to replicate elsewhere.
            </p>
            <Link
              href="/area"
              className="inline-flex items-center gap-1.5 bg-white text-emerald-900 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors text-sm"
            >
              Learn About the Area <ArrowRight size={15} />
            </Link>
          </div>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            {/* PLACEHOLDER: Replace with a real photo of Indian Point / Turtle Lake */}
            <Image
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80"
              alt="Lake view at Indian Point area"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Shannon Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white border border-stone-100 rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-3xl font-bold text-emerald-700">
            S
          </div>
          <div className="flex-1">
            <p className="text-emerald-700 text-sm font-semibold uppercase tracking-wider mb-1">
              Your Agent
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-3">
              Work with Shannon
            </h2>
            <p className="text-stone-500 leading-relaxed text-sm mb-5">
              Shannon helps buyers navigate land and property opportunities near Indian
              Point and Turtle Lake — from understanding lot features and area appeal to
              asking the right questions before purchasing raw land.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="bg-stone-800 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-stone-700 transition-colors"
              >
                About Shannon
              </Link>
              <Link
                href="/contact"
                className="border border-stone-200 text-stone-700 font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-stone-50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
