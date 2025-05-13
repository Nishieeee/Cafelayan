import Logo from "../assets/cafelayanlogo.jpg";

function Header() {
  return (
    <header className="flex align-center justify-between px-25 py-2 bg-yellow-200 sticky top-0"> 
      {/* TODO: Improve design */}
      <div className="logo-container flex align-center justify-between">
        <img src={Logo} alt="Cafelayan logo" id="logo" height="50" width="50" />
        <h3 className="text-green-900">Cafelayan</h3>
      </div>
      <nav className="flex align-center justify-between">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Contact us</a>
      </nav>
    </header>
  );
}
export default Header;
