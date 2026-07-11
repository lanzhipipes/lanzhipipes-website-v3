import Link from "next/link";
import Image from "next/image";
import InquiryForm from "@/components/InquiryForm";

const advantages = [
  ["Professional Manufacturer", "Specialized in complete PPR and HDPE piping systems."],
  ["Stable Production", "Reliable capacity for wholesale and project orders."],
  ["Strict Quality Control", "Inspection from raw materials to finished products."],
  ["OEM Customization", "Private label, colors, printing and packaging."],
  ["Factory-Direct Value", "Competitive pricing with direct manufacturing support."],
  ["Global Export Service", "Support for buyers, distributors and contractors worldwide."]
];

const factory = [
  ["/images/factory/production-line.jpeg", "Production Line"],
  ["/images/factory/quality-lab.jpeg", "Quality Laboratory"],
  ["/images/factory/warehouse.jpeg", "Warehouse"],
  ["/images/factory/container-loading.jpeg", "Container Loading"]
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <Image
          src="/images/factory/production-line.jpeg"
          alt="PPR and HDPE pipe production line at Lanzhi Pipes factory in China"
          fill
          priority
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="eyebrow light">PROFESSIONAL PIPE MANUFACTURER</span>
          <h1>Professional PPR &amp; HDPE Pipe Manufacturer in China</h1>
          <p>
            Reliable plastic piping solutions for residential, commercial and
            infrastructure projects worldwide.
          </p>
          <div className="hero-actions">
            <Link href="#inquiry" className="button primary">Get A Quote</Link>
            <a
              href="https://wa.me/8618669673128"
              target="_blank"
              rel="noreferrer"
              className="button secondary"
            >
              Contact WhatsApp
            </a>
          </div>
        </div>
        <div className="stats-bar">
          <div><strong>2016</strong><span>Established</span></div>
          <div><strong>2000㎡</strong><span>Factory Area</span></div>
          <div><strong>OEM / ODM</strong><span>Customization</span></div>
          <div><strong>Global</strong><span>Export Service</span></div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">WELCOME TO LANZHI PIPES</span>
            <h2>Reliable Plastic Pipe Manufacturer From China</h2>
            <p className="lead">
              Lanzhi Pipes Technology Co., Ltd. specializes in PPR pipes, HDPE
              pipes, fittings and complete plastic piping systems.
            </p>
            <p>
              Located in Linyi City, Shandong Province, we support importers,
              distributors, plumbing wholesalers, construction companies,
              engineering contractors and OEM buyers with stable production,
              responsive service and export-ready packaging.
            </p>
            <Link href="/about" className="text-link">Learn more about us →</Link>
          </div>
          <div className="metric-grid">
            <div className="metric-card"><strong>2016</strong><span>Founded</span></div>
            <div className="metric-card"><strong>2000㎡</strong><span>Factory</span></div>
            <div className="metric-card"><strong>OEM</strong><span>Private Label</span></div>
            <div className="metric-card"><strong>Global</strong><span>Market Support</span></div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">COMPLETE PIPE SYSTEMS</span>
            <h2>Main Products</h2>
            <p>Engineered for water supply, drainage, irrigation and construction projects.</p>
          </div>

          <div className="product-feature-grid">
            <article className="product-feature green">
              <Image
                src="/images/products/ppr-pipes.jpeg"
                alt="Green PPR pipes manufactured by Lanzhi Pipes"
                fill
                className="feature-image"
              />
              <div className="feature-overlay" />
              <div className="feature-content">
                <span>PPR PIPE SYSTEM</span>
                <h3>Safe, Reliable Plumbing Solutions</h3>
                <ul>
                  <li>Hot Water Pipe</li>
                  <li>Cold Water Pipe</li>
                  <li>Composite Pipe</li>
                  <li>PPR Fittings</li>
                </ul>
                <Link href="/products/ppr-pipe" className="button white">View Details</Link>
              </div>
            </article>

            <article className="product-feature navy">
              <Image
                src="/images/products/hdpe-pipes.jpeg"
                alt="Black HDPE water supply pipes in Lanzhi Pipes warehouse"
                fill
                className="feature-image"
              />
              <div className="feature-overlay" />
              <div className="feature-content">
                <span>HDPE PIPE SYSTEM</span>
                <h3>Durable Solutions for Infrastructure</h3>
                <ul>
                  <li>Water Supply Pipe</li>
                  <li>Drainage Pipe</li>
                  <li>Irrigation Pipe</li>
                  <li>HDPE Fittings</li>
                </ul>
                <Link href="/products/hdpe-pipe" className="button white">View Details</Link>
              </div>
            </article>
          </div>

          <div className="small-product-row">
            <Link href="/products/ppr-fittings" className="small-product-card">
              <Image src="/images/products/ppr-fittings.jpeg" alt="PPR fittings supplier China" width={560} height={360} />
              <div><span>PPR FITTINGS</span><strong>Complete connection range</strong></div>
            </Link>
            <Link href="/products" className="small-product-card">
              <Image src="/images/products/ppr-pipes.jpeg" alt="Complete plastic pipe systems" width={560} height={360} />
              <div><span>COMPLETE SYSTEMS</span><strong>Pipes, fittings and OEM solutions</strong></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <div className="section-heading light-heading">
            <span className="eyebrow light">WHY LANZHI PIPES</span>
            <h2>Built for Long-Term B2B Cooperation</h2>
          </div>
          <div className="advantages-grid">
            {advantages.map(([title, text], index) => (
              <article key={title} className="advantage-card">
                <span className="advantage-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">MANUFACTURING CAPABILITY</span>
            <h2>Real Factory. Real Quality Control.</h2>
            <p>Every order is supported by production, inspection, storage and export handling.</p>
          </div>
          <div className="factory-grid">
            {factory.map(([src, title], index) => (
              <article className={index === 0 ? "factory-card large" : "factory-card"} key={title}>
                <Image src={src} alt={`${title} at Lanzhi Pipes factory`} fill className="factory-image" />
                <div className="factory-shade" />
                <strong>{title}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section quality-section soft">
        <div className="container two-col quality-layout">
          <div>
            <span className="eyebrow">QUALITY CONTROL</span>
            <h2>Quality Managed at Every Stage</h2>
            <div className="process-list">
              <div><b>01</b><span><strong>Raw Material Inspection</strong><small>Incoming materials are checked before production.</small></span></div>
              <div><b>02</b><span><strong>Production Monitoring</strong><small>Key extrusion parameters are monitored continuously.</small></span></div>
              <div><b>03</b><span><strong>Pressure Testing</strong><small>Products are tested according to order requirements.</small></span></div>
              <div><b>04</b><span><strong>Finished Product Inspection</strong><small>Dimensions, appearance and packaging are verified.</small></span></div>
            </div>
          </div>
          <div className="quality-image-wrap">
            <Image
              src="/images/factory/quality-lab.jpeg"
              alt="Plastic pipe quality inspection laboratory"
              width={900}
              height={700}
            />
          </div>
        </div>
      </section>

      <section className="section applications">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">APPLICATIONS</span>
            <h2>Solutions for Diverse Projects</h2>
          </div>
          <div className="application-grid">
            {["Residential Buildings","Commercial Construction","Water Supply Projects","Irrigation Systems","Infrastructure Projects"].map((item) => (
              <div className="application-pill" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="section inquiry-section">
        <div className="container inquiry-layout">
          <div>
            <span className="eyebrow light">START YOUR PROJECT</span>
            <h2>Request a Factory Quote</h2>
            <p>
              Tell us your product, quantity and destination market. Our export
              team will respond with product information and quotation support.
            </p>
            <div className="contact-box">
              <strong>WhatsApp</strong><a href="https://wa.me/8618669673128">+86 18669673128</a>
              <strong>Email</strong><a href="mailto:a18669673128@gmail.com">a18669673128@gmail.com</a>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
