import ProductPage from "@/components/ProductPage";


export const metadata = {
  title: "HDPE Fittings Supplier China",
  description: "HDPE fittings supplier in China providing connection solutions for water supply, irrigation, drainage and engineering projects.",
  alternates: { canonical: "/products/hdpe-fittings" }
};


export default function Page() {
  return <ProductPage
    eyebrow="HDPE FITTINGS SUPPLIER"
    title="Reliable HDPE Connection Solutions"
    description="HDPE fittings for secure fusion connections in water supply, drainage and engineering pipeline systems."
    image="/images/products/hdpe-pipes.jpeg"
    features={["Strong joint performance","Corrosion resistant","Suitable for project applications","Stable dimensions","Export packaging","OEM support"]}
    applications={["Water supply pipelines","Irrigation systems","Drainage projects","Infrastructure construction","Industrial pipeline connections"]}
    parameters={[
      ["Material","HDPE"],
      ["Connection","Butt fusion / electrofusion depending on product"],
      ["Color","Black / customized"],
      ["Product Range","Connection fittings for complete HDPE systems"],
      ["Packaging","Export-ready packaging"],
      ["Service","OEM / Customized solutions"]
    ]}
    faqs={[
      ["Do you supply HDPE fittings with pipes?","Yes. We provide fittings together with HDPE pipe systems for complete project supply."],
      ["What connection methods are available?","Product availability can include butt fusion and electrofusion connection solutions."],
      ["Can you customize packaging?","Yes. OEM packaging and private label support are available."]
    ]}
  />;
}

