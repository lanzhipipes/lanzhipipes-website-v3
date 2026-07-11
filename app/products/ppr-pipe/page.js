import ProductPage from "@/components/ProductPage";

export const metadata = {
  title: "PPR Pipe Manufacturer China",
  description: "Professional PPR pipe manufacturer in China supplying hot water pipes, cold water pipes, composite pipes and OEM solutions."
};

export default function Page() {
  return <ProductPage
    eyebrow="PPR PIPE MANUFACTURER CHINA"
    title="High-Quality PPR Pipe Systems"
    description="Reliable PPR piping solutions for residential, commercial and water supply applications."
    image="/images/products/ppr-pipes.jpeg"
    features={["High temperature resistance","Corrosion resistant","Smooth inner surface","Reliable heat-fusion connection","Long service life","OEM colors and printing available"]}
    applications={["Residential hot and cold water","Commercial plumbing","Hotels and apartment buildings","Water supply projects","Industrial utility piping"]}
    parameters={[
      ["Material","PP-R"],
      ["Color","Green / White / Gray / Customized"],
      ["Pressure Rating","PN10 / PN16 / PN20 / PN25"],
      ["Temperature Range","0–95°C"],
      ["Length","4 m or customized"],
      ["Connection","Heat fusion"],
      ["Application","Hot and cold water supply"]
    ]}
    faqs={[
      ["What is PPR pipe used for?","PPR pipe is commonly used for hot and cold water supply systems in residential and commercial buildings."],
      ["Can you provide OEM production?","Yes. Lanzhi Pipes supports logo printing, customized colors, packaging and private label production."],
      ["Can you supply a complete PPR system?","Yes. We supply pipes, fittings and related connection products as a complete system."]
    ]}
  />;
}
