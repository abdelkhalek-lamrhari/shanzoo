import type { Metadata } from "next";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";
import { menuCategories } from "@/lib/menu-data";
import { MenuNav } from "@/components/menu/menu-nav";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Notre Carte | SHANZOO Tanger",
  description:
    "Découvrez la carte complète de Shanzoo Tanger — entrées, pâtes, pizzas, risottos, viandes, poissons, desserts et boissons.",
};

export default function MenuPrixPage() {
  return (
    <main className={`${greatVibes.variable} min-h-screen bg-background`}>
      {/* Header */}
      <div className="border-b border-border px-6 pb-10 pt-16 text-center md:pt-24">
        <Link
          href="/"
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Retour à l'accueil
        </Link>
        <h1
          className="mt-6 text-6xl leading-none text-[#8a1f11] md:text-8xl"
          style={{ fontFamily: "var(--font-script)" }}
        >
          Notre Carte
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
          Spécialités Espagnoles &amp; Italiennes — Shanzoo Tanger
        </p>
      </div>

      <MenuNav />

      {/* Categories */}
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-12">
        {menuCategories.map((category, index) => (
          <section
            key={category.id}
            id={category.id}
            className={`scroll-mt-24 ${index !== 0 ? "mt-20 border-t border-border pt-16" : ""}`}
          >
            <div className="mb-10 text-center">
              <h2
                className="text-5xl text-[#8a1f11] md:text-6xl"
                style={{ fontFamily: "var(--font-script)" }}
              >
                {category.title}
              </h2>
              <div className="mx-auto mt-2 flex items-center justify-center gap-2 text-[#8a1f11]">
                <span className="h-px w-10 bg-[#8a1f11]/40" />
                <span className="text-xs">✦</span>
                <span className="h-px w-10 bg-[#8a1f11]/40" />
              </div>
            </div>

            <ul className="space-y-6">
              {category.items.map((item) => (
                <li key={item.name} className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-3">
                    <span className="font-semibold text-foreground">
                      {item.name}
                    </span>
                    <span className="flex-1 border-b border-dotted border-border translate-y-[-4px]" />
                    <span className="whitespace-nowrap font-semibold text-foreground">
                      {item.price}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-sm italic text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>

            {category.highlight && (
              <div className="mt-8 flex items-center justify-between gap-4 rounded-xl border border-[#8a1f11]/30 bg-[#8a1f11]/5 px-5 py-4">
                <span className="font-semibold uppercase tracking-wide text-[#8a1f11]">
                  {category.highlight.name}
                </span>
                <span className="whitespace-nowrap font-semibold text-[#8a1f11]">
                  {category.highlight.price}
                </span>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="border-t border-border px-6 py-16 text-center">
        <p className="text-sm text-muted-foreground">
          Prix en Dirhams Marocains (DH) — Taxes incluses
        </p>
        <Link
          href="/reservations"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Réserver une table
        </Link>
      </div>
    </main>
  );
}
