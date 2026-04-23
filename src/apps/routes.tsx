import { createBrowserRouter } from "react-router-dom";
import { RootPage, HomePage, PhotosPage, VideosPage, GraphicsPage, AboutPage, ContactPage } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "photos", element: <PhotosPage /> },
      { path: "videos", element: <VideosPage /> },
      { path: "graphics", element: <GraphicsPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

import { Link } from "react-router-dom";
export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4">
      <h1 className="text-xl font-bold mb-6">My Portfolio</h1>
      <nav>
        <ul className="space-y-3">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/photos">Photos</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/graphics">Graphics</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </aside>
  );
}