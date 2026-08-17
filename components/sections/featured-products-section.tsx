"use client";

import { FadeImage } from "@/components/fade-image";

const features = [
  {
    image: "/images/food-1.jpg",
    alt: "Saffron risotto with seared scallops",
    span: "col-span-2 row-span-2", // Large
  },
  {
    image: "/images/food-2.jpg",
    alt: "Molten chocolate lava cake",
    span: "col-span-1 row-span-1", // Small
  },
  {
    image: "/images/food-3.jpg",
    alt: "Shrimp tagliatelle pasta",
    span: "col-span-1 row-span-1", // Small
  },
  {
    image: "/images/food-4.jpg",
    alt: "Burrata salad with tomatoes",
    span: "col-span-1 row-span-2", // Tall
  },
  {
    image: "/images/food-5.jpg",
    alt: "Flaming tiki cocktail",
    span: "col-span-1 row-span-1", // Small
  },
  {
    image: "/images/food-6.jpg",
    alt: "Grilled fish fillet with cocktail",
    span: "col-span-2 row-span-1", // Wide
  },
  {
    image: "/images/food-7.jpg",
    alt: "Chocolate dessert with mango sauce",
    span: "col-span-1 row-span-1", // Small
  },
  {
    image: "/images/food-8.jpg",
    alt: "Crispy fried shrimp on avocado sauce",
    span: "col-span-1 row-span-2", // Tall
  },
  {
    image: "/images/food-9.jpg",
    alt: "Burrata pasta with cherry tomatoes",
    span: "col-span-2 row-span-1", // Wide
  },
  {
    image: "/images/food-10.jpg",
    alt: "Grilled fish with roasted potatoes",
    span: "col-span-1 row-span-1", // Small
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="menu" className="relative bg-background py-20 md:py-32">
      <div className="px-4 md:px-12 lg:px-20">
        <h2 className="mx-auto mb-10 max-w-7xl text-3xl font-medium tracking-tight text-foreground md:mb-14 md:text-4xl">
          Spanish & Italian Cuisine
        </h2>
        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-7xl mx-auto auto-rows-[180px] md:auto-rows-[220px]">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-lg border border-gray-200 ${feature.span}`}
            >
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
