"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, MapPin, Phone } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/shanzoo.tanger/";
const MAPS_URL =
  "https://l.instagram.com/?u=https%3A%2F%2Fshare.google%2FREaXYkX8XyJMLpCep%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAacQXh4VBm5ZAdJr56DntGCpo6fWe6ijTL20AvmDnL5Hj8SDbgUgAzlP9-I_iw_aem_TFiZFYvDr58yAaHZWeglsQ&e=AUBUlOEpVkDICDGCajzumPLS7hTfmVBJhxIiLhlNv30WLjmy2xBVMN0CsZW4xCzNNcrBZVupY7G7dGUEUzZiGtsVMxFBXctSOS6pViY-U9evb-UI7mtbWz_295htJdjNsXCFLyM";
const PHONE_NUMBER = "+212636222230";

const footerLinks = {
  explore: [
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
  ],
};

export function FooterSection() {
  return (
    <footer id="contact" className="bg-background">
      {/* Neon Sign */}
      <div className="flex justify-center border-t border-border bg-black px-6 py-16 md:py-20">
        <div className="relative h-28 w-64 md:h-36 md:w-80">
          <Image
            src="/images/neon-good-vibes.png"
            alt="Shanzoo neon sign — Good Vibes Only"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="#hero" className="text-lg font-medium text-primary">
              SHANZOO
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Shanzoo Tanger — Eat, Drink & Chill. Specialized in Spanish & Italian cuisine. Feel the night, every night from 16:00 to 04:00. Good vibes only.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Hours</h4>
            <p className="text-sm text-muted-foreground">
              Open all week
              <br />
              16:00 – 04:00
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Tanger, Morocco</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact CTAs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            <Instagram size={16} />
            Instagram
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <MapPin size={16} />
            Get Directions
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Phone size={16} />
            Call Us
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 SHANZOO. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Maps
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
