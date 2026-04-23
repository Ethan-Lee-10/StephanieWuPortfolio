import { Play } from "lucide-react";
import { useState } from "react";

type Video = {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
  duration: string;
};
const videos: Video[] = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/J1szuo927yA",
    title: "Clawed By Chloo",
    description: "Promo video for nail service",
    category: "Commercial",
    duration: "0:40",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/6P0bMUR9HIA",
    title: "Intern Project",
    description: "Behind the scenes + edits",
    category: "Creative",
    duration: "0:34",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/on7VlVJCAtc",
    title: "Risky Business",
    description: "Cinematic storytelling piece",
    category: "Short Film",
    duration: "0:15",
  },
];
export default function Videos(){
const [activeVideo, setActiveVideo] = useState<string | null>(null);

return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-4">Videography</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Stories told through motion, capturing emotions and experiences in cinematic form
          </p>
        </div>
      </section>

      {/* Featured Video */}
    {/*<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl mb-8">Featured Showreel</h2>
        <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden group cursor-pointer">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NjMyMTUzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Showreel"
            className="w-full h-full object-cover"
          /> 
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all flex items-center justify-center">
              <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
            <h3 className="text-2xl mb-2">2026 Showreel (compilation of your work if you have or want to make one)</h3>
            <p className="text-gray-300">A compilation of my best work from this past year</p>
          </div>
        </div>
      </section> */}
      {/* Video Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl mb-8">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} 
            onClick={() => setActiveVideo(video.src)}
            className="group cursor-pointer">
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
              <iframe
                src={video.src}
                className="w-full h-full object-cover hover:opacity-90 transition duration-300"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
                <div className="absolute inset-0 bg-black/30 pointer-events-none flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/80 group-hover:bg-white group-hover:scale-110 transition-all flex items-center justify-center">
                    <Play className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg group-hover:text-gray-600 transition-colors">
                    {video.title}
                  </h3>
                  <span className="text-sm text-gray-500">{video.category}</span>
                </div>
                <p className="text-sm text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-center">Video Services (may delete)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl mb-3">Commercial</h3>
              <p className="text-gray-600">
                Blah blah blah
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl mb-3">Documentary</h3>
              <p className="text-gray-600">
                Blah Blah Blah
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl mb-3">Events</h3>
              <p className="text-gray-600">
                Blah blah blah
              </p>
            </div>
          </div>
        </div>
      </section>

    {activeVideo && (
      <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={() => setActiveVideo(null)}
      >
    {/* Close button */}
    <button
      onClick={() => setActiveVideo(null)}
      className="absolute top-6 right-6 text-white text-3xl"
    >
      x
    </button>
    

    {/* Video */}
    <iframe
      src={activeVideo}
      className="w-[90%] h-[80%] rounded-lg"
      allow="autoplay; encrypted-media"
      allowFullScreen
      onClick={(e) => e.stopPropagation()}
/>
    </div>)}
    </div>
  )
}