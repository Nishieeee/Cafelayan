import FacebookIcon from "../assets/icons/facebook-svgrepo-com.svg";
import IgIcon from "../assets/icons/instagram-svgrepo-com.svg";
function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="grid grid-cols-6 h-50 px-20 py-10">
        <div className="col-span-2">
          <h1>Cafelayan</h1>
        </div>
        <div className="col-span-1">
          <h3>Quick Links</h3>
          <ul className="ps-10">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Partners</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3>Products</h3>
          <ul className="ps-10">
            <li><a href="">Lettuce chips</a></li>
            <li><a href="">Lettuce</a></li>
            <li><a href="">Kale</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3>Contacts</h3>
          <ul className="ps-10">
            <li><a href="">0993-857-5259</a></li>
            <li><a href="">cafelayan@gmail.com</a></li>
          </ul>
        </div>
         <div className="col-span-1">
          <h3>Contacts</h3>
          <ul className="ps-10 flex gap-2">
            <li><a href="https://www.facebook.com/freeylettuce"><img src={FacebookIcon} alt="Facebook Icon" className="h-5 w-5"/></a></li>
            <li><a href="tiktok.com/@cafelayan"><img src={IgIcon} alt="Facebook Icon" className="h-5 w-5"/></a></li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="flex items-centre justify-center">
        <p>&copy; {new Date().getFullYear()} Cafelayan | All rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
