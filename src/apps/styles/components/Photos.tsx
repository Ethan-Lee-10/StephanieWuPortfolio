import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from "./Error/ImageWithFallback";
import { useState } from "react";
import { X } from "lucide-react";
import frontal2 from "../../../assets/img/frontal2.jpg";
import golden1 from "../../../assets/img/golden1.jpg"
import golden2 from "../../../assets/img/golden2.jpg"
import golden3 from "../../../assets/img/golden3.jpg"
import golden4 from "../../../assets/img/golden4.jpg"
import mystery1 from "../../../assets/img/mystery1.jpg"
import mystery2 from "../../../assets/img/mystery2.jpg"
import mystery3 from "../../../assets/img/mystery3.jpg"
import mystery4 from "../../../assets/img/mystery4.jpg"
import breathe1 from "../../../assets/img/breathe1.jpg"
import breathe2 from "../../../assets/img/breathe2.jpg"
import breathe3 from "../../../assets/img/breathe3.jpg"
import warm1 from "../../../assets/img/warm1.jpg"
import warm2 from "../../../assets/img/warm2.jpg"
import warm3 from "../../../assets/img/warm3.jpg"
import dog1 from "../../../assets/img/dog1.jpg"
import dog2 from "../../../assets/img/dog2.jpg"
import dog3 from "../../../assets/img/dog3.jpg"

const photos = [
  {
    id: 1,
    src: frontal2,
    category: "Category",
  },
  {
    id: 5,
    src: golden1,
    category: "Golden Hour",
  },
  {
    id: 6,
    src: golden2,
    category: "Golden Hour",
  },
  {
    id: 7,
    src: golden3,
    category: "Golden Hour",
  },
  {
    id: 8,
    src: golden4,
    category: "Golden Hour",
  },
  {
    id: 9,
    src: mystery1,
    category: "Still Portrait",
  },
  {
    id: 10,
    src: mystery2,
    category: "Still Portrait",
  },
  {
    id: 11,
    src: mystery3,
    category: "Still Portrait",
  },
  {
    id: 12,
    src: mystery4,
    category: "Still Portraits",
  },
  {
    id: 13,
    src: breathe1,
    category: "In Bloom",
  },
  {
    id: 14,
    src: breathe2,
    category: "In Bloom",
  },
  {
    id: 15,
    src: breathe3,
    category: "In Bloom",
  },
  {
    id: 16,
    src: warm1,
    category: "In Bloom",
  },
  {
    id: 17,
    src: warm2,
    category: "In Bloom",
  },
  {
    id: 18,
    src: warm3,
    category: "In Bloom",
  },
  {
    id: 19,
    src: dog1,
    category: "My Dog",
  },
  {
    id: 20,
    src: dog2,
    category: "My Dog",
  },
  {
    id: 21,
    src: dog3,
    category: "My Dog",
  },
];

const categories = ["All", ...new Set(photos.map((p) => p.category))];

export default function Photos() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<typeof photos[0] | null>(null);

  const filteredPhotos =
    selectedCategory === "All"
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-4">Photography</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            A sentence or two about your work
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

      {/* Photo Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="1rem">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setLightboxImage(photo)}
              >
                <ImageWithFallback
                  src={photo.src}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <p className="text-sm text-gray-300">{photo.category}</p>
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
