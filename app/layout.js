import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";


export const metadata = {
  metadataBase: new URL("https://www.lanzhipipes.com"),
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
    url: "https://www.lanzhipipes.com",
    siteName: "Lanzhi Pipes",
    images: ["/images/factory/production-line.jpeg"],
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
