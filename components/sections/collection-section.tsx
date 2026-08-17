"use client";

import { FadeImage } from "@/components/fade-image";

const accessories = [
  {
    id: 1,
    name: "Wine & Spirits",
    description: "A curated cellar of fine wines and spirits to accompany every dish",
    image: "/images/experience-1.jpg",
  },
  {
    id: 2,
    name: "Craft Cocktails",
    description: "Signature tiki and flaming creations, shaken and stirred by our mixologists",
    image: "/images/experience-2.jpg",
  },
  {
    id: 3,
    name: "Mixology Nights",
    description: "Live bartending shows and late-night flair to keep the vibe going till 4am",
    image: "/images/experience-3.jpg",
  },
];

export function CollectionSection() {
  return (
    <section id="experience" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Signature Experiences
        </h2>
      </div>

      {/* Accessories Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group flex-shrink-0 w-[75vw] snap-center">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <h3 className="text-lg font-medium leading-snug text-foreground">
                  {accessory.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {accessory.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <h3 className="text-lg font-medium leading-snug text-foreground">
                  {accessory.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {accessory.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
