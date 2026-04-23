import { Link } from "react-router-dom";
import { ImageWithFallback } from "./Error/ImageWithFallback";
import frontal2 from "../../../assets/img/frontal2.jpg";
import frontal from "../../../assets/img/frontal.jpg";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">

{/* Background Image */}
<img
  src= {frontal2}
  alt="Hero background"
  className="absolute inset-0 w-full h-full object-cover object-center"
/>

{/* Overlay */}
<div className="absolute inset-0 bg-black/60 z-10" />

{/* Content */}
<div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">

  <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
    Stephanie Wu
  </h1>

  <p className="text-lg md:text-xl text-gray-200 mb-10 drop-shadow">
    Photography & Videography
  </p>

  <div className="flex flex-col sm:flex-row gap-6">
    
    <Link
      to="/photos"
      className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition"
    >
      View Photos →
    </Link>

    <Link
      to="/videos"
      className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
    >
      Watch Videos →
    </Link>

  </div>
</div>
</section>

      {/* FEATURED WORK */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        
        <h2 className="text-4xl font-semibold text-center mb-4">
          Featured Work
        </h2>

        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          A curated selection of my favorite projects showcasing photography and videography
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* PHOTO CARD */}
          <Link
            to="/photos"
            className="group relative h-[400px] overflow-hidden rounded-xl transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={frontal}
              alt="Photography"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-3xl font-semibold mb-1">
                  Photography
                </h3>
                <p className="text-gray-200">
                  Explore the gallery
                </p>
              </div>
            </div>
          </Link>

          {/* VIDEO CARD */}
          <Link
            to="/videos"
            className="group relative h-[400px] overflow-hidden rounded-xl transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1605702012553-e954fbde66eb?auto=format&fit=crop&w=1200&q=80"
              alt="Videography"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-3xl font-semibold mb-1">
                  Videography
                </h3>
                <p className="text-gray-200">
                  Watch the showreel
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}