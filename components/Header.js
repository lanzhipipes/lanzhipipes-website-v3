"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image src="/images/brand/logo.png" alt="Lanzhi Pipes logo" width={52} height={52} priority />
          <div><strong>LANZHI PIPES</strong><span>Plastic Piping Systems</span></div>
        </Link>

        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>

        <nav className={open ? "main-nav open" : "main-nav"}>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
          <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
          <Link href="/factory" onClick={() => setOpen(false)}>Factory</Link>
          <Link href="/oem-service" onClick={() => setOpen(false)}>OEM Service</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>

        <a className="header-cta" href="https://wa.me/8618669673128" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </header>
  );
}
