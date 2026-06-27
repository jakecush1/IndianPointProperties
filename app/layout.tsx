import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Shannon Real Estate | Land Near Indian Point at Turtle Lake",
    template: "%s | Shannon at Indian Point",
  },
  description:
    "Explore peaceful lake-area properties, development lots, and investment opportunities near Beautiful Indian Point at Turtle Lake with Shannon.",
  openGraph: {
    siteName: "Shannon at Indian Point",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-900 antialiased" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
