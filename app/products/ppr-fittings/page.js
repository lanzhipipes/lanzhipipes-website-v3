import ProductPage from "@/components/ProductPage";

export const metadata = {
  title: "PPR Fittings Manufacturer China",
  description: "PPR fittings manufacturer and supplier in China providing elbows, tees, sockets, reducers, valves and OEM packaging."
};

export default function Page() {
  return <ProductPage
    eyebrow="PPR FITTINGS MANUFACTURER"
    title="Complete PPR Fitting Solutions"
    description="Precision-molded fittings for reliable PPR plumbing and water supply systems."
    image="/images/products/ppr-fittings.jpeg"
    features={["Accurate dimensions","Reliable heat-fusion connection","Corrosion resistant","Complete fitting range","Custom colors and packaging","Private label available"]}
    applications={["Residential plumbing","Commercial buildings","Hot and cold water systems","Distributor product ranges","OEM piping systems"]}
    parameters={[
      ["Material","PP-R"],
      ["Products","Elbows, tees, sockets, reducers, valves and more"],
      ["Color","Green / White / Gray / Customized"],
      ["Connection","Heat fusion"],
      ["Packaging","Standard export or customized"],
      ["Service","OEM / Private label"]
    ]}
    faqs={[
      ["Which PPR fittings do you supply?","We supply elbows, tees, sockets, reducers, valves and other common PPR connection fittings."],
      ["Can fittings be packed under our brand?","Yes. Customized labels, cartons, bags and private label packaging are available."],
      ["Can pipes and fittings be ordered together?","Yes. We provide complete PPR systems for distributors and project buyers."]
    ]}
  />;
}
