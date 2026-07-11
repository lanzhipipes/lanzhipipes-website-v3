import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>LANZHI PIPES</h3>
          <p>
            Professional PPR and HDPE pipe manufacturer from Linyi, Shandong,
            China. Reliable pipes. Global projects.
          </p>
        </div>
        <div>
          <h4>Products</h4>
          <Link href="/products/ppr-pipe">PPR Pipes</Link>
          <Link href="/products/hdpe-pipe">HDPE Pipes</Link>
          <Link href="/products/ppr-fittings">PPR Fittings</Link>
          <Link href="/products/hdpe-fittings">HDPE Fittings</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/about">About Us</Link>
          <Link href="/factory">Factory</Link>
          <Link href="/oem-service">OEM Service</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="https://wa.me/8618669673128">+86 18669673128</a>
          <a href="mailto:a18669673128@gmail.com">a18669673128@gmail.com</a>
          <span>Linyi City, Shandong Province, China</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">© 2026 Lanzhi Pipes Technology Co., Ltd. All rights reserved.</div>
      </div>
    </footer>
  );
}
