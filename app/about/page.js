import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About Us | Plastic Pipe Manufacturer China",
  description: "Learn about Lanzhi Pipes Technology Co., Ltd., a professional PPR and HDPE pipe manufacturer in Linyi, Shandong, China."
};

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="ABOUT LANZHI PIPES"
        title="Professional Plastic Pipe Manufacturer"
        text="Manufacturing reliable PPR and HDPE piping systems for global buyers since 2016."
      />
      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">COMPANY PROFILE</span>
            <h2>Reliable Manufacturing for Global Markets</h2>
            <p className="lead">
              Lanzhi Pipes Technology Co., Ltd. is a professional manufacturer
              specializing in PPR and HDPE piping systems.
            </p>
            <p>
              Established in 2016, our company operates a 2000㎡ facility in
              Linyi City, Shandong Province, China. We serve importers,
              distributors, plumbing wholesalers, contractors and OEM buyers
              with complete pipe systems, customization and export support.
            </p>
          </div>
          <Image src="/images/factory/warehouse.jpeg" alt="Lanzhi Pipes warehouse in China" width={900} height={700} className="rounded-image" />
        </div>
      </section>
      <section className="section soft">
        <div className="container value-grid">
          {[
            ["Factory", "Direct production support and stable order coordination."],
            ["Quality", "Inspection through production and before shipment."],
            ["Customization", "Logo printing, colors, packaging and private label."],
            ["Export", "Professional support for international B2B customers."]
          ].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>
    </main>
  );
}
