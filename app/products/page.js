import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";


export const metadata = {
  title: "Plastic Pipe Systems | PPR & HDPE Products",
  description: "Explore Lanzhi Pipes PPR pipes, PPR fittings, HDPE pipes, HDPE fittings and complete plastic pipe systems.",
  alternates: { canonical: "/products" }
};


const items = [
  ["/products/ppr-pipe", "/images/products/ppr-pipes.jpeg", "PPR Pipe System", "Hot water, cold water and composite PPR pipe solutions."],
  ["/products/ppr-fittings", "/images/products/ppr-fittings.jpeg", "PPR Fittings", "Complete precision-molded PPR connection solutions."],
  ["/products/hdpe-pipe", "/images/products/hdpe-pipes.jpeg", "HDPE Pipe System", "Water supply, drainage and irrigation HDPE pipe solutions."],
  ["/products/hdpe-fittings", "/images/products/hdpe-pipes.jpeg", "HDPE Fittings", "Fusion connection solutions for HDPE pipeline projects."]
];


export default function Products() {
  return (
    <main>
      <PageHero
        eyebrow="PRODUCT CENTER"
        title="Complete PPR & HDPE Pipe Systems"
        text="Factory-direct piping solutions for distributors, contractors and project buyers."
        image="/images/products/ppr-pipes.jpeg"
      />
      <section className="section soft">
        <div className="container product-card-grid">
          {items.map(([href, image, title, text]) => (
            <Link href={href} className="catalog-card" key={title}>
              <Image src={image} alt={title} width={800} height={520} />
              <div><h2>{title}</h2><p>{text}</p><span>View Details →</span></div>
            </Link>
          ))}
        </div>
      </section>
    </main>
