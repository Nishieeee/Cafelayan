import FacebookIcon from "../assets/icons/facebook-svgrepo-com.svg";
import IgIcon from "../assets/icons/instagram-svgrepo-com.svg";

function Footer() {
  return (
    <footer className="border-t border-gray-100 flex flex-col items-center w-full">
      {/* Main Footer Content */}
      <div className="w-full px-4 py-8 sm:px-6 md:px-8 lg:px-12">
        {/* Mobile layout - stacked, Tablet/Desktop - grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h1 className="text-xl sm:text-2xl font-bold text-green-950 mb-4">Cafelayan</h1>
            <p className="text-sm mb-4 pr-4">
              Step inside our world of fresh, nutrient-rich produce and discover the vibrant flavors and health benefits.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-green-950 mb-3 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-green-700 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-sm hover:text-green-700 transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-sm hover:text-green-700 transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-sm hover:text-green-700 transition-colors duration-300">Partners</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-green-950 mb-3 text-lg">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-green-700 transition-colors duration-300">Lettuce chips</a></li>
              <li><a href="#" className="text-sm hover:text-green-700 transition-colors duration-300">Lettuce</a></li>
              <li><a href="#" className="text-sm hover:text-green-700 transition-colors duration-300">Kale</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-green-950 mb-3 text-lg">Contacts</h3>
            <ul className="space-y-2">
              <li><a href="tel:+0993-857-5259" className="text-sm hover:text-green-700 transition-colors duration-300">0993-857-5259</a></li>
              <li><a href="mailto:cafelayan@gmail.com" className="text-sm hover:text-green-700 transition-colors duration-300">cafelayan@gmail.com</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-green-950 mb-3 text-lg">Social Media</h3>
            <ul className="flex gap-4">
              <li>
                <a 
                  href="https://www.facebook.com/freeylettuce" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-300"
                >
                  <img src={FacebookIcon} alt="Facebook Icon" className="h-6 w-6 sm:h-7 sm:w-7"/>
                </a>
              </li>
              <li>
                <a 
                  href="https://tiktok.com/@cafelayan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-300"
                >
                  <img src={IgIcon} alt="Instagram Icon" className="h-6 w-6 sm:h-7 sm:w-7"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full px-4">
        <hr className="border-gray-200" />
      </div>

      {/* Copyright */}
      <div className="w-full py-4 px-4 text-center">
        <p className="text-xs sm:text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Cafelayan | All rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;