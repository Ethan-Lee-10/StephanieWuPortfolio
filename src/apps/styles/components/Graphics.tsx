import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from "./Error/ImageWithFallback";
import { useState } from "react";
import { X } from "lucide-react";
import graphic1 from "../../../assets/graphics/graphic1.jpg"
import graphic2 from "../../../assets/graphics/graphic2.jpg"
import graphic3 from "../../../assets/graphics/graphic3.jpg"
import graphic4 from "../../../assets/graphics/graphic4.jpg"
import graphic5 from "../../../assets/graphics/graphic5.jpg"

const graphics = [
  {
    id: 1,
    src: graphic1,
    title: "A La Mode Fashion Pitch 1 - Jellyfish Design",
    category: "Style",
  },
  {
    id: 2,
    src: graphic2,
    title: "A La Mode Fashion Pitch 2 - Y2k Street Style",
    category: "Style",
  },
  {
    id: 3,
    src: graphic3,
    title: "Chagee Design",
    category: "Promo",
  },
  {
    id: 4,
    src: graphic4,
    title: "Hip Hip Club Poster",
    category: "Promo",
  },
  {
    id: 5,
    src: graphic5,
    title: "Lion Dance Club Poster",
    category: "Promo",
  },  
]
const categories = ["All", ...new Set(graphics.map((p) => p.category))];

export default function Graphics() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<typeof graphics[0] | null>(null);

  const filteredGraphics =
    selectedCategory === "All"
      ? graphics
      : graphics.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-4">Graphics</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
           Visual identities, print materials, and digital experiences
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Graphics Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="1rem">
          {filteredGraphics.map((photo) => (
  <div
    key={photo.id}
    onClick={() => setLightboxImage(photo)}
    className="relative group cursor-pointer"
  >
    <ImageWithFallback
      src={photo.src}
      alt={`Graphic ${photo.id}`}
      className="w-full rounded-lg"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center rounded-lg">
      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
        <h3 className="text-lg font-medium mb-1">
          {photo.title}
        </h3>
        <p className="text-sm text-gray-300">
          {photo.category}
        </p>
      </div>
    </div>
  </div>
))}
  
          </Masonry>
       </ResponsiveMasonry>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh]">
            <ImageWithFallback
              src={lightboxImage.src}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <div className="text-center text-white mt-4">
              <p className="text-sm text-gray-400">{lightboxImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
