import type { Metadata } from "next";
import PropertiesClient from "./PropertiesClient";

export const metadata: Metadata = {
  title: "Properties for Sale | Indian Point at Turtle Lake",
  description:
    "Browse all available land listings and development lots near Beautiful Indian Point at Turtle Lake. Search, filter, and find your perfect property.",
};

export default function PropertiesPage() {
  return <PropertiesClient />;
}
