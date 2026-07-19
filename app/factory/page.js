import Image from "next/image";
import PageHero from "@/components/PageHero";


export const metadata = {
  title: "Plastic Pipe Factory China",
  description: "Visit Lanzhi Pipes manufacturing capability, quality laboratory, warehouse, packaging and container loading operations.",
  alternates: { canonical: "/factory" }
};


const steps = ["Raw Material Inspection","Extrusion Production","Online Monitoring","Pressure & Product Testing","Packaging","Container Loading"];


export default function Factory() {
  return (
    <main>
      <PageHero
        eyebrow="FACTORY CAPABILITY"
        title="Plastic Pipe Manufacturing Facility in China"
        text="Production, inspection, warehousing and export shipment managed under one roof."
      />
      <section className="section">
        <div className="container factory-page-grid">
          {[
            ["/images/factory/production-line.jpeg","Production Line"],
            ["/images/factory/quality-lab.jpeg","Quality Laboratory"],
            ["/images/factory/warehouse.jpeg","Warehouse"],
            ["/images/factory/container-loading.jpeg","Container Loading"]
          ].map(([src,title]) => (
            <article key={title}><Image src={src} alt={title} width={900} height={650}/><h2>{title}</h2></article>
          ))}
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <div className="section-heading"><span className="eyebrow">MANUFACTURING PROCESS</span><h2>From Raw Material to Shipment</h2></div>
          <div className="timeline">
            {steps.map((step, i) => <div key={step}><b>{String(i+1).padStart(2,"0")}</b><span>{step}</span></div>)}
          </div>
