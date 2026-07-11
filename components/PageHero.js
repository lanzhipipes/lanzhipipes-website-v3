import Image from "next/image";

export default function PageHero({ eyebrow, title, text, image = "/images/factory/production-line.jpeg" }) {
  return (
    <section className="page-hero">
      <Image src={image} alt={title} fill priority className="hero-image" />
      <div className="hero-overlay" />
      <div className="container page-hero-content">
        <span className="eyebrow light">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
