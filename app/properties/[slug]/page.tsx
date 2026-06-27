import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { properties, getPropertyBySlug } from "@/data/properties";
import ImageCarousel from "@/components/ImageCarousel";
import StatusBadge from "@/components/StatusBadge";
import MapSection from "@/components/MapSection";
import { MapPin, Maximize2, CalendarDays, Home, CheckCircle, Star, ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};
  return {
    title: `${property.title} | Shannon at Indian Point`,
    description: property.shortDescription,
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const formattedPrice = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(property.price);

  const formattedDate = new Date(property.createdAt).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back */}
      <Link
        href="/properties"
        className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-emerald-700 transition-colors mb-6"
      >
        <ArrowLeft size={15} /> Back to Properties
      </Link>

      {/* Photo carousel */}
      <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-8">
        <ImageCarousel images={property.images} className="h-full" priority />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-10">
          {/* Title & status */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <StatusBadge status={property.status} />
              {property.isFeatured && (
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  <Star size={11} fill="currentColor" /> Featured
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 mb-3 leading-snug">
              {property.title}
            </h1>
            <p className="flex items-center gap-1.5 text-stone-400 text-sm">
              <MapPin size={14} /> {property.location}
            </p>
          </div>

          {/* Full description */}
          <div>
            <h2 className="text-lg font-semibold text-stone-800 mb-3">About This Property</h2>
            <p className="text-stone-600 leading-relaxed text-base">
              {property.fullDescription}
            </p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-lg font-semibold text-stone-800 mb-4">Property Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {property.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-stone-600">
                  <CheckCircle size={15} className="text-emerald-600 mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Development Potential */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-stone-800 mb-3">Development Potential</h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              {property.developmentPotential}
            </p>
          </div>

          {/* Nearby Highlights */}
          <div>
            <h2 className="text-lg font-semibold text-stone-800 mb-4">Nearby Highlights</h2>
            <ul className="space-y-2">
              {property.nearbyHighlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-lg font-semibold text-stone-800 mb-4">Location</h2>
            <MapSection
              latitude={property.latitude}
              longitude={property.longitude}
              title={property.title}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Price card */}
          <div className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm sticky top-20">
            <p className="text-3xl font-bold text-stone-900 mb-1">{formattedPrice}</p>
            <p className="text-stone-400 text-sm mb-5">Asking price — verify with Shannon</p>

            <dl className="space-y-3 mb-6">
              {[
                { icon: <Maximize2 size={14} />, label: "Lot Size", value: `${property.acreage} acres` },
                { icon: <Home size={14} />, label: "Property Type", value: property.propertyType },
                { icon: <MapPin size={14} />, label: "Location", value: property.location },
                { icon: <CalendarDays size={14} />, label: "Listed", value: formattedDate },
              ].map((item, i) => (
                <div key={i} className="flex items-start justify-between gap-3">
                  <dt className="flex items-center gap-1.5 text-xs text-stone-400 shrink-0">
                    <span className="text-stone-300">{item.icon}</span>
                    {item.label}
                  </dt>
                  <dd className="text-xs font-medium text-stone-700 text-right">{item.value}</dd>
                </div>
              ))}
            </dl>

            {/* Contact CTA — passes property title as query param */}
            <Link
              href={`/contact?property=${encodeURIComponent(property.title)}`}
              className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-center py-3.5 rounded-xl transition-colors text-sm"
            >
              Contact Shannon About This Property
            </Link>
            <p className="text-xs text-stone-400 text-center mt-3">
              No obligation — ask any question
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
