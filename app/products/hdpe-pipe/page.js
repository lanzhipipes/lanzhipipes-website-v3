import ProductPage from "@/components/ProductPage";

export const metadata = {
  title: "HDPE Pipe Manufacturer China",
  description: "HDPE pipe manufacturer in China supplying water supply, drainage, irrigation and infrastructure pipe solutions."
};

export default function Page() {
  return <ProductPage
    eyebrow="HDPE PIPE MANUFACTURER CHINA"
    title="Durable HDPE Pipe Systems"
    description="Flexible, corrosion-resistant HDPE pipeline solutions for water, drainage, irrigation and infrastructure projects."
    image="/images/products/hdpe-pipes.jpeg"
    features={["High impact resistance","Excellent corrosion resistance","Flexible installation","Fusion-welded joints","Suitable for underground use","OEM printing and packaging"]}
    applications={["Municipal water supply","Agricultural irrigation","Drainage systems","Infrastructure projects","Industrial pipelines"]}
    parameters={[
      ["Material","High-density polyethylene"],
      ["Color","Black with blue stripe / customized"],
      ["Pressure Class","According to order specification"],
      ["Connection","Butt fusion / electrofusion"],
      ["Length","Straight length or coil depending on size"],
      ["Application","Water supply, drainage and irrigation"]
    ]}
    faqs={[
      ["What applications are suitable for HDPE pipe?","HDPE pipe is widely used for municipal water supply, irrigation, drainage and infrastructure projects."],
      ["Do you supply different pressure grades?","Yes. Available specifications can be matched to project requirements and target market standards."],
      ["Can you support container orders?","Yes. We support export packaging and container loading for bulk international orders."]
    ]}
  />;
}
