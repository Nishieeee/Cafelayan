import Logo from "../assets/cafelayanlogo.jpg";

function Header() {
  return (
    <header> 
      {/* TODO: Improve design */}
      <div class="logo-container">
        <img src={Logo} alt="Cafelayan logo" id="logo" height="50" width="50" />
        <h3>Cafelayan</h3>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Contact us</a>
      </nav>
    </header>
  );
}
export default Header;
