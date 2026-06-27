import Link from "next/link";
import Image from "next/image";
import { MapPin, Maximize2, ArrowRight } from "lucide-react";
import { Property } from "@/data/properties";
import StatusBadge from "./StatusBadge";

export default function PropertyCard({ property }: { property: Property }) {
  const formattedPrice = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <Link
      href={`/properties/${property.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={property.images[0].src}
          alt={property.images[0].alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-3 left-3">
          <StatusBadge status={property.status} />
        </div>
        {property.isFeatured && (
          <div className="absolute top-3 right-3 bg-emerald-700 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">
          {property.propertyType}
        </p>
        <h3 className="font-semibold text-stone-800 text-base leading-snug mb-2 group-hover:text-emerald-800 transition-colors">
          {property.title}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {property.shortDescription}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold text-stone-900">{formattedPrice}</p>
            <div className="flex items-center gap-3 mt-1 text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <Maximize2 size={11} />
                {property.acreage} acres
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={11} />
                {property.location.split(",")[0]}
              </span>
            </div>
          </div>
          <span className="flex items-center gap-1 text-emerald-700 text-sm font-medium group-hover:gap-2 transition-all">
            Details <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </Link>
  );
}
