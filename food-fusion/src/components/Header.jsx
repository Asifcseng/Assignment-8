import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-orange-500 text-white">
      <Link to="/" className="text-xl font-bold">
        <img src={logo} alt="Food-Fusion" className="h-10 inline-block" />
        Food-Fusion
      </Link>
      <nav>
        <Link to="/cart" className="ml-4">
          Cart
        </Link>
      </nav>
    </header>
  );
}
export default Header;
