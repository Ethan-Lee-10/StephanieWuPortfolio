import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full bg-gray-100 border-b border-gray-200 px-10 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-900">Portfolio</h1>

      <nav className="flex gap-8 text-gray-600 font-medium">
        <Link to="/" className="hover:text-black transition">Home</Link>
        <Link to="/photos" className="hover:text-black transition">Photos</Link>
        <Link to="/videos" className="hover:text-black transition">Videos</Link>
        <Link to="/about" className="hover:text-black transition">About</Link>
        <Link to="/contact" className="hover:text-black transition">Contact</Link>
      </nav>
    </header>
  );
}