import Image from "next/image";
import Link from "next/link";

export default function ProductPage({
  eyebrow, title, description, image, features, applications, parameters, faqs
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a }
    }))
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="product-page-hero">
        <div className="container product-hero-grid">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p className="lead">{description}</p>
            <Link href="/contact" className="button primary">Request a Quote</Link>
          </div>
          <Image src={image} alt={title} width={900} height={700} priority />
        </div>
      </section>

      <section className="section soft">
        <div className="container product-detail-grid">
          <div>
            <span className="eyebrow">PRODUCT ADVANTAGES</span>
            <h2>Features</h2>
            <div className="check-list">
              {features.map((item) => <div key={item}>✓ {item}</div>)}
            </div>
          </div>
          <div>
            <span className="eyebrow">APPLICATIONS</span>
            <h2>Typical Uses</h2>
            <div className="check-list">
              {applications.map((item) => <div key={item}>• {item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading"><span className="eyebrow">TECHNICAL DATA</span><h2>Technical Parameters</h2></div>
          <div className="table-wrap">
            <table>
              <tbody>
                {parameters.map(([key, value]) => <tr key={key}><th>{key}</th><td>{value}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container faq-wrap">
          <div className="section-heading"><span className="eyebrow">FAQ</span><h2>Frequently Asked Questions</h2></div>
          {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <div><span className="eyebrow light">FACTORY-DIRECT SUPPORT</span><h2>Need pricing or technical information?</h2></div>
          <Link href="/contact" className="button white">Send Your Requirement</Link>
        </div>
      </section>
    </main>
  );
}
