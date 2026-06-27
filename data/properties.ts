// PROPERTY DATA FILE
// Replace this static data with a database query when upgrading to a full platform.
// Each property maps directly to the Property type below.
// To add a new listing: copy a property object, change the id/slug, and update all fields.
// IMAGES: All image URLs below are placeholder stock photos from Unsplash.
//         Replace with real property photos before launch.

export type PropertyStatus = "Available" | "Pending" | "Sold";

export type Property = {
  id: string;
  slug: string;
  title: string;
  price: number;
  status: PropertyStatus;
  location: string;
  acreage: number;
  propertyType: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  developmentPotential: string;
  nearbyHighlights: string[];
  images: {
    src: string;
    alt: string;
  }[];
  isFeatured: boolean;
  createdAt: string;
  latitude?: number;
  longitude?: number;
};

export const properties: Property[] = [
  {
    id: "1",
    slug: "lakeside-development-lot-a",
    title: "Lakeside Development Lot — Indian Point Road",
    price: 89900,
    status: "Available",
    location: "Indian Point Road, Turtle Lake",
    acreage: 1.25,
    propertyType: "Lake-area development lot",
    shortDescription:
      "A beautifully situated lot steps from Turtle Lake, offering stunning views and easy road access. Perfect for a cabin retreat or seasonal getaway.",
    fullDescription:
      "This gently sloping lot sits along Indian Point Road with mature trees providing natural privacy on three sides. The property offers a natural clearing ideal for a cabin footprint, with seasonal lake views through the tree line. Road access is direct and well-maintained year-round. Utilities are available at the lot line — please verify current service connections with the relevant providers. Whether you're dreaming of a weekend retreat, a vacation cabin, or a long-term investment in lake-area land, this property deserves a closer look.",
    features: [
      "Direct road access",
      "Mature treed perimeter",
      "Natural clearing on site",
      "Seasonal lake views",
      "Utilities at lot line (verify with providers)",
      "Level to gently sloping terrain",
      "Quiet residential area",
    ],
    developmentPotential:
      "This lot may suit cabin construction, recreational use, or long-term land investment. Buyers should independently verify zoning, development permits, utility connections, and any applicable local regulations before making decisions.",
    nearbyHighlights: [
      "Walking distance to Turtle Lake shoreline",
      "Near boat launch access",
      "Close to local fishing spots",
      "Scenic drives through the Indian Point area",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80", alt: "Scenic lake view with trees" },
      { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80", alt: "Forest lot with natural clearing" },
      { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", alt: "Lake area road access" },
    ],
    isFeatured: true,
    createdAt: "2024-11-01",
    latitude: 50.45,
    longitude: -99.72,
  },
  {
    id: "2",
    slug: "treed-raw-land-parcel-birchwood",
    title: "Treed Raw Land Parcel — Birchwood Drive",
    price: 64500,
    status: "Available",
    location: "Birchwood Drive, Turtle Lake",
    acreage: 2.1,
    propertyType: "Treed raw land parcel",
    shortDescription:
      "Over two acres of natural boreal forest with excellent privacy, a seasonal creek, and a gentle rise that could frame beautiful cabin views.",
    fullDescription:
      "A rare opportunity to own a large, naturally wooded parcel near Turtle Lake. The land features a mix of birch and spruce, a seasonal drainage area, and elevated ground on the north end with excellent sight lines into the surrounding landscape. The property is accessed via a maintained gravel road. This is raw land — there are currently no structures or utility connections on site. Buyers interested in developing should consult local authorities regarding permits, access improvements, and utility availability.",
    features: [
      "2.1 acres of mixed boreal forest",
      "Seasonal creek running through the southwest corner",
      "Natural elevation change — elevated northern end",
      "Gravel road access",
      "Exceptional privacy",
      "No existing structures",
    ],
    developmentPotential:
      "The elevated north end may be suitable for a cabin or retreat structure, subject to development approval. The wooded character and size of the parcel make it appealing for recreational or long-term investment use. Buyers should confirm all zoning and permitting independently.",
    nearbyHighlights: [
      "Minutes from Turtle Lake",
      "Near snowmobile and ATV trail networks",
      "Close to fishing access points",
      "Quiet, low-traffic road",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80", alt: "Dense boreal forest" },
      { src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1200&q=80", alt: "Natural wooded parcel" },
      { src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200&q=80", alt: "Forest creek view" },
    ],
    isFeatured: true,
    createdAt: "2024-10-20",
  },
  {
    id: "3",
    slug: "spacious-lot-near-turtle-lake",
    title: "Spacious Corner Lot — Lakeview Crescent",
    price: 74900,
    status: "Available",
    location: "Lakeview Crescent, Turtle Lake",
    acreage: 1.75,
    propertyType: "Spacious lot near Turtle Lake",
    shortDescription:
      "A generous corner lot on a quiet crescent with wide open skies, good sun exposure, and an easy walk to the lake.",
    fullDescription:
      "This large corner parcel sits on a peaceful crescent road just a short walk from Turtle Lake public access. The lot is mostly open with light tree coverage along two edges, giving it great sun exposure and a sense of openness that's rare in the area. The layout lends itself naturally to a cabin or seasonal home with room for an outbuilding, garden, or recreational space. Road access is excellent. Services should be confirmed with local providers.",
    features: [
      "Corner lot with two road frontages",
      "1.75 acres — lots of room",
      "Open terrain with good sun exposure",
      "Light tree cover on two edges for privacy",
      "Short walk to lake public access",
      "Well-maintained crescent road",
    ],
    developmentPotential:
      "The open, sunny character of this lot makes it well-suited for cabin construction, a seasonal home, or a recreational compound with multiple outbuildings — subject to zoning and development approval. Buyers should verify all details independently.",
    nearbyHighlights: [
      "Walking distance to Turtle Lake access",
      "Near boat launch",
      "Quiet crescent with low traffic",
      "Close to Indian Point area attractions",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80", alt: "Open land lot with clear skies" },
      { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80", alt: "Lake nearby view" },
      { src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1200&q=80", alt: "Peaceful road access" },
    ],
    isFeatured: false,
    createdAt: "2024-09-15",
  },
  {
    id: "4",
    slug: "private-cabin-ready-parcel",
    title: "Private Cabin-Ready Parcel — Spruce Bay Road",
    price: 109000,
    status: "Available",
    location: "Spruce Bay Road, Indian Point",
    acreage: 3.4,
    propertyType: "Private cabin-ready parcel",
    shortDescription:
      "One of the most private parcels available at Indian Point — over three acres of sheltered land with direct lake access potential and a natural building site already cleared.",
    fullDescription:
      "This exceptional parcel along Spruce Bay Road is one of the most private and well-positioned pieces of land available near Indian Point. Over three acres of gently sloping terrain lead down toward the lake, with a natural clearing at mid-slope that is ideal for a cabin footprint. The surrounding mature spruce provide a natural windbreak and year-round privacy screening. A seasonal path from the clearing toward the waterfront already exists. Buyers interested in lake access should investigate applicable regulations with local authorities. This property offers serious potential for anyone building a meaningful retreat in the Indian Point area.",
    features: [
      "3.4 acres — substantial parcel",
      "Natural building clearing at mid-slope",
      "Mature spruce windbreak",
      "Seasonal path toward waterfront",
      "Excellent privacy — no visible neighbours from clearing",
      "Gently sloping terrain toward lake",
    ],
    developmentPotential:
      "The natural clearing and sloped terrain offer excellent potential for a cabin or seasonal home with lake-facing views. A larger structure or multi-phase development could also be explored, subject to all required approvals. Buyers must independently verify lake access, zoning, permits, and service availability.",
    nearbyHighlights: [
      "Potential lake access — verify with authorities",
      "Near Indian Point community area",
      "Close to public boat launch",
      "Surrounded by similarly private parcels",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1200&q=80", alt: "Private wooded cabin site" },
      { src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80", alt: "Spruce forest privacy screen" },
      { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80", alt: "Lake view from elevated land" },
    ],
    isFeatured: true,
    createdAt: "2024-11-10",
    latitude: 50.462,
    longitude: -99.735,
  },
  {
    id: "5",
    slug: "investment-land-near-indian-point",
    title: "Investment Land Parcel — Indian Point Drive",
    price: 49900,
    status: "Available",
    location: "Indian Point Drive, Turtle Lake",
    acreage: 0.85,
    propertyType: "Investment land near Indian Point",
    shortDescription:
      "An accessible, affordably priced lot near the heart of Indian Point — ideal for buyers looking to establish a presence in the area at a reasonable entry point.",
    fullDescription:
      "For buyers looking to enter the Indian Point land market without a large upfront commitment, this compact and accessible lot represents excellent value. Situated on Indian Point Drive, the property offers solid road access, a modest size that keeps costs manageable, and proximity to the core of the Indian Point area. The lot is lightly treed with a natural clearing near the road frontage. While smaller than some nearby offerings, the location and price point make it a compelling option for long-term investors or those planning a simple seasonal structure.",
    features: [
      "Centrally located on Indian Point Drive",
      "Affordable entry-level price",
      "Road frontage with clear access",
      "Lightly treed with clearing near road",
      "Solid long-term investment potential",
    ],
    developmentPotential:
      "The lot is appropriately sized for a small cabin, bunkie, or seasonal shelter, subject to zoning and permit approval. It also holds value as a land investment in a growing recreational area. Buyers should verify all development options with local authorities.",
    nearbyHighlights: [
      "Walking distance to Indian Point community",
      "Near Turtle Lake access",
      "Close to area amenities",
      "Easy access from main road",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80", alt: "Open land near lake area" },
      { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80", alt: "Cleared lot with road access" },
    ],
    isFeatured: false,
    createdAt: "2024-08-01",
  },
  {
    id: "6",
    slug: "quiet-road-access-lot-pinecrest",
    title: "Road-Access Lot — Pinecrest Lane",
    price: 57500,
    status: "Pending",
    location: "Pinecrest Lane, Turtle Lake",
    acreage: 1.1,
    propertyType: "Quiet road-access lot",
    shortDescription:
      "A well-positioned lot on a quiet lane with good road access and a natural mix of pine and spruce. Currently pending — contact Shannon for updates.",
    fullDescription:
      "This attractive lot along Pinecrest Lane features a lovely mix of mature pine and spruce, making it one of the more scenic parcels in the area. The property has excellent road access and a gradual slope that provides natural drainage. The lot is currently pending sale — interested buyers are encouraged to contact Shannon to be notified if it becomes available again or to explore other similar opportunities in the pipeline.",
    features: [
      "1.1 acres on a quiet lane",
      "Mix of pine and spruce",
      "Gradual slope with good drainage",
      "Paved road access",
      "Scenic natural character",
    ],
    developmentPotential:
      "Well-suited for a seasonal cabin or nature retreat. The tree mix and gradual slope provide a natural foundation for a thoughtfully designed structure. All development subject to applicable permits and zoning.",
    nearbyHighlights: [
      "Near Turtle Lake recreational access",
      "Short drive to Indian Point",
      "Quiet neighbourhood setting",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1200&q=80", alt: "Pine and spruce forest lot" },
      { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80", alt: "Natural forested parcel" },
    ],
    isFeatured: false,
    createdAt: "2024-07-15",
  },
  {
    id: "7",
    slug: "large-recreational-parcel-eagle-ridge",
    title: "Large Recreational Parcel — Eagle Ridge Road",
    price: 139000,
    status: "Available",
    location: "Eagle Ridge Road, Indian Point",
    acreage: 6.2,
    propertyType: "Large recreational parcel",
    shortDescription:
      "The largest parcel currently listed — over six acres of mixed terrain with ridgeline views, a seasonal pond, and extraordinary potential for a true recreational retreat.",
    fullDescription:
      "Eagle Ridge Road delivers on its name. This exceptional 6.2-acre parcel sits along a natural ridgeline with open views to the south and east, sheltered by forest on the north and west. A seasonal pond occupies the lower southwest corner, attracting wildlife and adding significant character to the land. The terrain varies from open ridge to gentle wooded slopes — a mix that offers multiple potential building sites, outdoor recreation opportunities, and long-term land value. This is a rare holding for buyers who want room to breathe and space to imagine something truly special.",
    features: [
      "6.2 acres — largest current listing",
      "Natural ridgeline with open views",
      "Seasonal pond on southwest corner",
      "Mixed terrain — open ridge and wooded slopes",
      "Multiple potential building sites",
      "Abundant wildlife",
      "Gravel road access",
    ],
    developmentPotential:
      "The scale and varied terrain of this parcel support a wide range of possibilities — a principal cabin with outbuildings, a private recreational compound, multi-generational land use, or long-term investment. All development is subject to zoning, permits, and applicable regulations. Buyers should conduct thorough due diligence.",
    nearbyHighlights: [
      "Ridgeline views toward Turtle Lake area",
      "Wildlife habitat — deer and birds regularly observed",
      "Near Eagle Ridge snowmobile trail access",
      "Private setting with few neighbours",
      "Accessible year-round via maintained road",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", alt: "Ridgeline landscape view" },
      { src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1200&q=80", alt: "Seasonal pond on wooded land" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80", alt: "Open ridge with trees" },
      { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80", alt: "Aerial-style view of natural land" },
    ],
    isFeatured: true,
    createdAt: "2024-11-20",
    latitude: 50.478,
    longitude: -99.748,
  },
  {
    id: "8",
    slug: "future-cabin-retreat-lot-willowbrook",
    title: "Future Cabin Retreat Lot — Willowbrook Bay",
    price: 79900,
    status: "Available",
    location: "Willowbrook Bay Road, Turtle Lake",
    acreage: 1.5,
    propertyType: "Future cabin retreat lot",
    shortDescription:
      "A charming 1.5-acre parcel on a sheltered bay road — quiet, treed, and ideally sized for a couple's cabin retreat or family vacation property.",
    fullDescription:
      "Willowbrook Bay Road has a peaceful, tucked-away character that's hard to find. This 1.5-acre lot sits in a sheltered section of the road, surrounded by mature willows and mixed bush, with a natural flat area near the centre that lends itself beautifully to a small cabin footprint. The property feels private without being inaccessible — road access is easy and the area is well-established. Buyers looking for a manageable parcel with genuine charm will find a lot to like here.",
    features: [
      "1.5 acres in a sheltered bay location",
      "Mature willows and mixed bush",
      "Natural flat building area at centre",
      "Well-established neighbourhood road",
      "Quiet and private character",
      "Manageable size — ideal for first land purchase",
    ],
    developmentPotential:
      "Ideally sized for a single cabin or seasonal retreat. The flat central area simplifies construction planning. Buyers should verify all zoning and permit requirements with local authorities before proceeding.",
    nearbyHighlights: [
      "Short drive to Turtle Lake public access",
      "Near Indian Point area",
      "Quiet bay road with low traffic",
      "Close to fishing and boating",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200&q=80", alt: "Sheltered bay lot with willows" },
      { src: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1200&q=80", alt: "Treed cabin lot" },
      { src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1200&q=80", alt: "Natural bush on peaceful road" },
    ],
    isFeatured: false,
    createdAt: "2024-10-05",
  },
];

export const getFeaturedProperties = () => properties.filter((p) => p.isFeatured);
export const getPropertyBySlug = (slug: string) =>
  properties.find((p) => p.slug === slug);
