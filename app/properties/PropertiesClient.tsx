"use client";

import { useState, useMemo } from "react";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import PropertyFilters, { FilterState } from "@/components/PropertyFilters";
import { Home } from "lucide-react";

const defaultFilters: FilterState = {
  search: "",
  status: "All",
  minPrice: "",
  maxPrice: "",
  minAcreage: "",
  maxAcreage: "",
  featuredOnly: false,
  sortBy: "newest",
};

export default function PropertiesClient() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const filtered = useMemo(() => {
    let result = [...properties];

    // Search
    if (filters.search.trim()) {
      const q = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.fullDescription.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.features.some((f) => f.toLowerCase().includes(q)) ||
          p.nearbyHighlights.some((h) => h.toLowerCase().includes(q))
      );
    }

    // Status
    if (filters.status !== "All") {
      result = result.filter((p) => p.status === filters.status);
    }

    // Price
    if (filters.minPrice) {
      result = result.filter((p) => p.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter((p) => p.price <= Number(filters.maxPrice));
    }

    // Acreage
    if (filters.minAcreage) {
      result = result.filter((p) => p.acreage >= Number(filters.minAcreage));
    }
    if (filters.maxAcreage) {
      result = result.filter((p) => p.acreage <= Number(filters.maxAcreage));
    }

    // Featured only
    if (filters.featuredOnly) {
      result = result.filter((p) => p.isFeatured);
    }

    // Sort
    switch (filters.sortBy) {
      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "price_asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "acreage_asc":
        result.sort((a, b) => a.acreage - b.acreage);
        break;
      case "acreage_desc":
        result.sort((a, b) => b.acreage - a.acreage);
        break;
    }

    return result;
  }, [filters]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <p className="text-emerald-700 text-sm font-semibold uppercase tracking-wider mb-1">
          All Listings
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-800">
          Properties for Sale
        </h1>
        <p className="text-stone-500 mt-2 text-sm">
          {properties.length} properties near Indian Point at Turtle Lake
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <PropertyFilters filters={filters} onChange={setFilters} />
      </div>

      {/* Results count */}
      <p className="text-sm text-stone-500 mb-5">
        Showing <span className="font-semibold text-stone-700">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "property" : "properties"}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-stone-100 rounded-2xl bg-white">
          <Home size={36} className="text-stone-200 mx-auto mb-4" />
          <p className="font-semibold text-stone-600 mb-2">No properties match your search</p>
          <p className="text-stone-400 text-sm max-w-sm mx-auto mb-6">
            Try adjusting your filters or contact Shannon for upcoming opportunities.
          </p>
          <button
            onClick={() => setFilters(defaultFilters)}
            className="text-sm text-emerald-700 font-medium hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
