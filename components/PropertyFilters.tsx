"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { PropertyStatus } from "@/data/properties";

export type FilterState = {
  search: string;
  status: PropertyStatus | "All";
  minPrice: string;
  maxPrice: string;
  minAcreage: string;
  maxAcreage: string;
  featuredOnly: boolean;
  sortBy: string;
};

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

type Props = {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
};

export default function PropertyFilters({ filters, onChange }: Props) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const update = (partial: Partial<FilterState>) => {
    onChange({ ...filters, ...partial });
  };

  const isFiltered =
    filters.search ||
    filters.status !== "All" ||
    filters.minPrice ||
    filters.maxPrice ||
    filters.minAcreage ||
    filters.maxAcreage ||
    filters.featuredOnly ||
    filters.sortBy !== "newest";

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-5 space-y-4">
      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
        <input
          type="search"
          placeholder="Search by title, location, features..."
          value={filters.search}
          onChange={(e) => update({ search: e.target.value })}
          className="w-full pl-10 pr-4 py-2.5 border border-stone-200 rounded-xl text-sm text-stone-800 focus:outline-none focus:border-emerald-400 transition-colors"
        />
      </div>

      {/* Row: Status + Sort + Toggle */}
      <div className="flex flex-wrap gap-3 items-center">
        {/* Status */}
        <select
          value={filters.status}
          onChange={(e) => update({ status: e.target.value as FilterState["status"] })}
          className="px-3 py-2.5 border border-stone-200 rounded-xl text-sm text-stone-700 focus:outline-none focus:border-emerald-400 bg-white"
        >
          <option value="All">All Statuses</option>
          <option value="Available">Available</option>
          <option value="Pending">Pending</option>
          <option value="Sold">Sold</option>
        </select>

        {/* Sort */}
        <select
          value={filters.sortBy}
          onChange={(e) => update({ sortBy: e.target.value })}
          className="px-3 py-2.5 border border-stone-200 rounded-xl text-sm text-stone-700 focus:outline-none focus:border-emerald-400 bg-white"
        >
          <option value="newest">Newest First</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="acreage_asc">Acreage: Small to Large</option>
          <option value="acreage_desc">Acreage: Large to Small</option>
        </select>

        {/* Advanced toggle */}
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center gap-2 text-sm text-stone-600 hover:text-emerald-700 transition-colors"
        >
          <SlidersHorizontal size={15} />
          {showAdvanced ? "Hide filters" : "More filters"}
        </button>

        {/* Clear */}
        {isFiltered && (
          <button
            onClick={() => onChange(defaultFilters)}
            className="flex items-center gap-1 text-sm text-red-500 hover:text-red-700 transition-colors ml-auto"
          >
            <X size={14} />
            Clear filters
          </button>
        )}
      </div>

      {/* Advanced filters */}
      {showAdvanced && (
        <div className="border-t border-stone-100 pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div>
            <label className="block text-xs text-stone-500 mb-1">Min Price ($)</label>
            <input
              type="number"
              placeholder="e.g. 50000"
              value={filters.minPrice}
              onChange={(e) => update({ minPrice: e.target.value })}
              className="w-full px-3 py-2 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-emerald-400"
            />
          </div>
          <div>
            <label className="block text-xs text-stone-500 mb-1">Max Price ($)</label>
            <input
              type="number"
              placeholder="e.g. 150000"
              value={filters.maxPrice}
              onChange={(e) => update({ maxPrice: e.target.value })}
              className="w-full px-3 py-2 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-emerald-400"
            />
          </div>
          <div>
            <label className="block text-xs text-stone-500 mb-1">Min Acres</label>
            <input
              type="number"
              placeholder="e.g. 1"
              value={filters.minAcreage}
              onChange={(e) => update({ minAcreage: e.target.value })}
              className="w-full px-3 py-2 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-emerald-400"
            />
          </div>
          <div>
            <label className="block text-xs text-stone-500 mb-1">Max Acres</label>
            <input
              type="number"
              placeholder="e.g. 10"
              value={filters.maxAcreage}
              onChange={(e) => update({ maxAcreage: e.target.value })}
              className="w-full px-3 py-2 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-emerald-400"
            />
          </div>
          <div className="col-span-2 sm:col-span-4">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.featuredOnly}
                onChange={(e) => update({ featuredOnly: e.target.checked })}
                className="w-4 h-4 rounded accent-emerald-700"
              />
              <span className="text-sm text-stone-700">Featured listings only</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
