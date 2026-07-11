import InquiryForm from "@/components/InquiryForm";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Contact Lanzhi Pipes",
  description: "Contact Lanzhi Pipes for PPR pipes, HDPE pipes, fittings, OEM service and factory quotations."
};

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="CONTACT US"
        title="Talk to Our Export Team"
        text="Send your product, quantity and project requirements for factory-direct support."
        image="/images/factory/container-loading.jpeg"
      />
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-panel">
            <span className="eyebrow">LANZHI PIPES</span>
            <h2>Lanzhi Pipes Technology Co., Ltd.</h2>
            <p>Linyi City, Shandong Province, China</p>
            <div><strong>WhatsApp</strong><a href="https://wa.me/8618669673128">+86 18669673128</a></div>
            <div><strong>Email</strong><a href="mailto:a18669673128@gmail.com">a18669673128@gmail.com</a></div>
            <p className="contact-note">Our export team normally responds within one business day.</p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
