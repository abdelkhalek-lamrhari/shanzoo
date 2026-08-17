"use client";

import { useEffect, useState } from "react";
import { menuCategories } from "@/lib/menu-data";

export function MenuNav() {
  const [activeId, setActiveId] = useState(menuCategories[0]?.id ?? "");

  useEffect(() => {
    const sections = menuCategories
      .map((cat) => document.getElementById(cat.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="scrollbar-hide flex gap-2 overflow-x-auto px-4 py-4 md:justify-center md:px-12">
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => handleClick(cat.id)}
            className={`flex-shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide transition-colors md:text-sm ${
              activeId === cat.id
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>
    </nav>
  );
}
