import Logo from "../assets/cafelayanlogo.jpg";
import Heropage from "./Heropage";

function Header() {
  return (
    <header className="flex items-center justify-between px-25 py-2 bg-yellow-200 sticky top-0">
      {/* TODO: Improve design */}
      <div className="logo-container flex items-center justify-between">
        <img src={Logo} alt="Cafelayan logo" id="logo" height="50" width="50" />
        <h3 className="text-green-900">Cafelayan</h3>
      </div>
      <nav className="flex items-center justify-center gap-5 text-green-900">
        <a href={Heropage} className="p-1">
          Home
        </a>
        <a href="#" className="p-1">
          About us
        </a>
        <a href="#" className="p-1">
          Contact us
        </a>
      </nav>
    </header>
  );
}
export default Header;
