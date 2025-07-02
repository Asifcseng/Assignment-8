// src/components/Header.jsx
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/icon.png";

function Header({ onMenuClick }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCount = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-orange-500 text-white p-4 flex justify-between items-center shadow-md h-16">
      <div className="flex items-center gap-4">
        {/* Mobile Sidebar Toggle */}
        <button onClick={onMenuClick} className="sm:hidden text-2xl">
          ☰
        </button>

        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <img src={logo} alt="Food-Fusion" className="h-8" />
          Food-Fusion
        </Link>
      </div>

      <nav className="relative">
        <Link
          to="/cart"
          className="ml-4 relative text-lg font-medium hover:underline"
        >
          Cart
          {totalCount > 0 && (
            <span className="absolute -top-2 -right-4 bg-white text-orange-500 text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
              {totalCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
