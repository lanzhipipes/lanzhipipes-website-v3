import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";


export const metadata = {
  title: "OEM Plastic Pipe Manufacturer China",
  description: "OEM and private label plastic pipe manufacturing including logo printing, custom colors and custom packaging.",
  alternates: { canonical: "/oem-service" }
};


export default function OEM() {
  return (
    <main>
      <PageHero
        eyebrow="OEM / ODM SERVICE"
        title="Build Your Plastic Pipe Brand"
        text="Flexible private label and customization support for distributors, wholesalers and international brands."
        image="/images/products/ppr-pipes.jpeg"
      />
      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">CUSTOMIZED SOLUTIONS</span>
            <h2>OEM Support Built Around Your Market</h2>
            <p className="lead">
              We support customized product presentation so your pipe range can
              match local market requirements and brand positioning.
            </p>
            <div className="check-list">
              <div>✓ Custom logo printing</div>
              <div>✓ Custom product colors</div>
              <div>✓ Custom cartons and bags</div>
              <div>✓ Private label production</div>
              <div>✓ Customized specifications</div>
            </div>
            <Link href="/contact" className="button primary">Discuss Your OEM Project</Link>
          </div>
