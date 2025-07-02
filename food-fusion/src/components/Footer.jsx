// src/components/Footer.jsx
import { Link } from "react-router-dom";
import logo from "../assets/icon.png";

function Footer() {
  return (
    <footer className="bg-orange-100 text-orange-900 mt-8 border-t border-orange-200">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Logo + Brand */}
        <div className="flex items-center w-30 gap-2 text-xl font-bold">
          <img src={logo} alt="" />
        </div>

        {/* Links */}
        <nav className="flex gap-4 text-sm">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/cart" className="hover:underline">
            Cart
          </Link>
          <a
            href="https://www.themealdb.com"
            target="_blank"
            className="hover:underline"
          >
            API Source
          </a>
        </nav>

        {/* Copyright */}
        <div className="text-xs text-orange-700 text-center sm:text-right">
          © {new Date().getFullYear()} Food-Fusion. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
