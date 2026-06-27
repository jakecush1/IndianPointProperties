import { MapPin } from "lucide-react";

type MapSectionProps = {
  latitude?: number;
  longitude?: number;
  title: string;
};

export default function MapSection({ latitude, longitude, title }: MapSectionProps) {
  // FUTURE UPGRADE: Replace this placeholder with a real map integration.
  // Options include:
  //   - Google Maps Embed API: https://developers.google.com/maps/documentation/embed
  //   - Mapbox GL JS: https://docs.mapbox.com/mapbox-gl-js/
  //   - OpenStreetMap via Leaflet: https://leafletjs.com/
  // When latitude and longitude are available, render the map centered on those coordinates.
  // Use an iframe embed or a client component with a JS mapping library.

  if (!latitude || !longitude) {
    return (
      <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 text-center">
        <MapPin size={28} className="text-stone-300 mx-auto mb-3" />
        <p className="text-stone-600 font-medium mb-1">Location Available Upon Request</p>
        <p className="text-stone-400 text-sm">
          Exact location details are available upon request. Contact Shannon for directions
          and access information.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-stone-200">
      {/* Map placeholder — replace this div with a real map embed */}
      <div className="relative h-72 bg-gradient-to-br from-emerald-50 to-blue-50 flex flex-col items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          {/* Grid overlay to suggest a map */}
          <div className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative z-10 text-center">
          <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
            <MapPin size={20} className="text-white" />
          </div>
          <p className="font-semibold text-stone-700 mb-1">{title}</p>
          <p className="text-stone-500 text-sm">
            {latitude.toFixed(4)}°N, {Math.abs(longitude).toFixed(4)}°W
          </p>
          <p className="text-stone-400 text-xs mt-3 max-w-xs">
            {/* FUTURE: This will render a live interactive map */}
            Map preview available — contact Shannon for directions and site access details.
          </p>
        </div>
      </div>
    </div>
  );
}
