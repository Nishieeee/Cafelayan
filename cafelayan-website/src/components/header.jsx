import Logo from "../assets/cafelayanlogo.jpg";
import Heropage from "./Heropage";

function Header() {
  return (
    <header className="flex items-center justify-between z-99 px-25 py-2 bg-yellow-50 sticky top-0 shadow-sm ">
      {/* TODO: Improve design */}
      <div className="logo-container flex items-center justify-between">
        <img src={Logo} alt="Cafelayan logo" id="logo" />
        <h1 className="text-green-900 text-[1.5rem]">Cafelayan</h1>
      </div>
      <nav className="flex items-center justify-center gap-5 text-green-900">
        <a href={Heropage} className="p-1 hover:border-b-1">
          About us
        </a>
        <a href="#" className="p-1 hover:border-b-1">
          Partners
        </a>
        <a href="#" className="py-1 px-4 border hover:bg-green-950 hover:text-green-50">
          Contact us
        </a>
      </nav>
    </header>
  );
}
export default Header;
