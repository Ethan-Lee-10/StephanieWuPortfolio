import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from "./Error/ImageWithFallback";
import { useState } from "react";
import { X } from "lucide-react";
import frontal2 from "../../../assets/img/frontal2.jpg";
import frontal from "../../../assets/img/frontal.jpg";
import bench from "../../../assets/img/bench.jpg";
import photopopup from "../../../assets/img/photopopup.jpg";
const photos = [
  {
    id: 1,
    src: frontal2,
    title: "Title",
    category: "Category",
  },
  {
    id: 2,
    src: bench,
    title: "Title",
    category: "Category",
  },
  {
    id: 3,
    src: photopopup,
    title: "Title",
    category: "Category",
  },
  {
    id: 4,
    src: frontal,
    title: "Title",
    category: "Category",
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
                  alt={photo.title}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <p className="text-lg">{photo.title}</p>
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
              alt={lightboxImage.title}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <div className="text-center text-white mt-4">
              <p className="text-xl">{lightboxImage.title}</p>
              <p className="text-sm text-gray-400">{lightboxImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
