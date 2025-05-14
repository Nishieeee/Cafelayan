import EmailIcon from "../assets/icons/email-svgrepo-com.svg";
import IgIcon from "../assets/icons/instagram-svgrepo-com.svg";
import PhoneIcon from "../assets/icons/phone-svgrepo-com.svg";
import FacebookIcon from "../assets/icons/facebook-svgrepo-com.svg";
import LocationIcon from "../assets/icons/location-pin-alt-1-svgrepo-com.svg";
import SocialsIcon from "../assets/icons/grid-masonry-svgrepo-com.svg";

const ContactInfo = [
  { type: "Email", contact: "cafelayanfoods@gmail.com", icon: EmailIcon },
  { type: "Phone", contact: "0906-641-2285", icon: PhoneIcon },
  {
    type: "Address",
    contact: "Tulungatung, Zamboanga City",
    icon: LocationIcon,
  },
];

function Contacts() {
  return (
    <section className="px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-5">
      {/* Mobile: Stacked layout, Desktop: Two-column grid */}
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
        {/* Contact Information Section */}
        <div className="mb-8 md:mb-0">
          {/* Contact Info Grid - 1 column on small mobile, 2 columns on larger devices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ContactInfo.map((contact, index) => (
              <div
                key={index}
                className="p-4 flex flex-col items-start gap-2 bg-yellow-50/30 rounded-lg"
              >
                <img
                  src={contact.icon}
                  alt={contact.type}
                  className="h-8 w-8 md:h-10 md:w-10"
                />
                <h2 className="text-lg sm:text-xl md:text-2xl text-green-950 font-bold">
                  {contact.type}
                </h2>
                <p className="text-sm sm:text-base">{contact.contact}</p>
              </div>
            ))}

            {/* Social Media Links */}
            <div className="p-4 flex flex-col items-start gap-2 bg-yellow-50/30 rounded-lg">
              <img
                src={SocialsIcon}
                alt="Socials"
                className="h-8 w-8 md:h-10 md:w-10"
              />
              <h2 className="text-lg sm:text-xl md:text-2xl text-green-950 font-bold">
                Socials
              </h2>
              <div className="flex items-center gap-5">
                <a
                  href="https://www.facebook.com/freeylettuce"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src={FacebookIcon}
                    alt="Facebook Icon"
                    className="h-6 w-6"
                  />
                </a>
                <a
                  href="tiktok.com/@cafelayan"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img src={IgIcon} alt="Instagram Icon" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="p-4 sm:p-6 bg-stone-50/50 shadow-sm rounded-md">
          <h2 className="text-lg sm:text-xl md:text-2xl text-green-950 font-bold mb-4">
            Get in touch
          </h2>

          <form action="#" method="get">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm md:text-base text-green-950 py-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@example.com"
                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mb-3"
                required
              />

              <label
                htmlFor="message"
                className="text-sm md:text-base text-green-950 py-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="Type something..."
                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none mb-4"
                required
              ></textarea>

              <button
                type="submit"
                className="border-2 border-green-950 py-2 text-green-950 mt-2 hover:bg-green-950 transition-colors duration-300 ease-in hover:text-green-50 text-sm md:text-base font-medium rounded-md"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
