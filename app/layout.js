import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  metadataBase: new URL("https://lanzhipipes.com"),
  title: {
    default: "PPR & HDPE Pipe Manufacturer China | Lanzhi Pipes",
    template: "%s | Lanzhi Pipes"
  },
  description:
    "Lanzhi Pipes Technology Co., Ltd. is a professional PPR and HDPE pipe manufacturer in China, supplying complete plastic piping systems and OEM solutions worldwide.",
  keywords: [
    "PPR Pipe Manufacturer China",
    "HDPE Pipe Manufacturer China",
    "PPR Pipe Supplier",
    "HDPE Pipe Supplier",
    "Plastic Pipe Factory China",
    "PPR Fittings Manufacturer",
    "OEM Plastic Pipe Manufacturer"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Lanzhi Pipes Technology Co., Ltd.",
    description: "Professional PPR & HDPE Pipe Manufacturer in China",
    url: "https://lanzhipipes.com",
    siteName: "Lanzhi Pipes",
    images: ["/images/factory/production-line.jpeg"],
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/images/brand/logo.png",
    apple: "/images/brand/logo.png"
  }
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lanzhi Pipes Technology Co., Ltd.",
    alternateName: "LANZHI PIPES",
    url: "https://lanzhipipes.com",
    logo: "https://lanzhipipes.com/images/brand/logo.png",
    description:
      "Professional PPR and HDPE pipe manufacturer in China supplying plastic piping systems worldwide.",
    foundingDate: "2016",
    email: "a18669673128@gmail.com",
    telephone: "+86 18669673128",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Linyi City",
      addressRegion: "Shandong Province",
      addressCountry: "CN"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+86 18669673128",
      contactType: "sales",
      availableLanguage: ["English", "Chinese"]
    }
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
