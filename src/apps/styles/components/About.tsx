import { ImageWithFallback } from "./Error/ImageWithFallback";
import steph from "../../../assets/img/steph.jpg";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-4">About Me</h1>
        </div>
      </section>

      {/* Bio Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl">Hello, I'm Stephanie Wu</h2>
            <p className="text-lg text-gray-600">
              I'm a college student with a strong interest in photography, videography, and editing. I enjoy capturing moments and turning them into visuals that tell a story, and I'm always trying to improve and try new creative ideas.
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <ImageWithFallback
              src={steph}
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div> 
      </section> 
     

      {/* Stats */}
      {/* <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full mb-4">
                <Camera className="w-8 h-8" />
              </div>
              <div className="text-4xl mb-2">500+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-4xl mb-2">200+</div>
              <p className="text-gray-600">People/orgs you've done creative work for (can delete)</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full mb-4">
                <Video className="w-8 h-8" />
              </div>
              <div className="text-4xl mb-2">150+</div>
              <p className="text-gray-600">Videos Produced</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full mb-4">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-4xl mb-2">25+</div>
              <p className="text-gray-600"> Awards/accomplishments? (can delete)</p>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Skills & Expertise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <h2 className="text-4xl mb-12 text-center">Skills & Expertise</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center text-center">
    <div className="space-y-3">
      <h3 className="text-xl">Photography</h3>
    </div>

    <div className="space-y-3">
      <h3 className="text-xl">Videography</h3>
    </div>
    <div className="space-y-3">
      <h3 className="text-xl">Editing</h3>
    </div>
  </div>
</section>

      {/* Equipment */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center">Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl mb-4">Camera Bodies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Sony A6700 </li>
                <li>• Canon </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl mb-4">Softwares</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Adobe Lightroom </li>
                <li>• Adobe Premiere Pro </li>
                <li>• Adobe Photoshop </li>
                <li>• Canva Pro</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}