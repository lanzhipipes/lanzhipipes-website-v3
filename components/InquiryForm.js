"use client";

import { useState } from "react";

export default function InquiryForm() {
  const [status, setStatus] = useState("");

  function submitInquiry(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = Object.fromEntries(form.entries());

    const message = [
      "Hello Lanzhi Pipes, I would like to request a quotation.",
      `Name: ${values.name || ""}`,
      `Company: ${values.company || ""}`,
      `Country: ${values.country || ""}`,
      `Email: ${values.email || ""}`,
      `Product: ${values.product || ""}`,
      `Quantity: ${values.quantity || ""}`,
      `Message: ${values.message || ""}`
    ].join("\n");

    setStatus("Opening WhatsApp with your inquiry...");
    window.open(`https://wa.me/8618669673128?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <form className="inquiry-form" onSubmit={submitInquiry}>
      <div className="form-grid">
        <label>Full Name<input name="name" required placeholder="Your name" /></label>
        <label>Company Name<input name="company" placeholder="Company" /></label>
        <label>Country<input name="country" required placeholder="Country" /></label>
        <label>Email<input name="email" type="email" required placeholder="you@company.com" /></label>
        <label>WhatsApp<input name="whatsapp" placeholder="+country code" /></label>
        <label>Product Interested
          <select name="product" required defaultValue="">
            <option value="" disabled>Select a product</option>
            <option>PPR Pipes</option>
            <option>PPR Fittings</option>
            <option>HDPE Pipes</option>
            <option>HDPE Fittings</option>
            <option>Complete Pipe System</option>
            <option>OEM / Private Label</option>
          </select>
        </label>
        <label className="full">Quantity Requirement<input name="quantity" placeholder="Example: 1 container / 20,000 meters" /></label>
        <label className="full">Message<textarea name="message" rows="5" placeholder="Sizes, standards, destination port and other requirements" /></label>
      </div>
      <button className="button primary full-button" type="submit">Send Inquiry</button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}
