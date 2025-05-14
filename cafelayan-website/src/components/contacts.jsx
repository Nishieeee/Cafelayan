import EmailIcon from "../assets/icons/email-svgrepo-com.svg";
import IgIcon from "../assets/icons/instagram-svgrepo-com.svg";
import PhoneIcon from "../assets/icons/phone-svgrepo-com.svg";
import FacebookIcon from "../assets/icons/facebook-svgrepo-com.svg";
import LocationIcon from "../assets/icons/location-pin-alt-1-svgrepo-com.svg";
import SocialsIcon from "../assets/icons/grid-masonry-svgrepo-com.svg";


const ContactInfo = [
  { type: "Email", contact: "cafelayan@gmail.com", icon: EmailIcon },
  { type: "Phone", contact: "0993-857-5259", icon: PhoneIcon},
  { type: "Address", contact: "Tulungatung, Zamboanga City", icon: LocationIcon },
];

function Contacts() {
  return (
    <>
      <section className="px-20 p-10 grid grid-cols-2 h-110 mb-5">
        <div className="grid grid-cols-2">
          {ContactInfo.map((contact, index) => (
            <div
              key={index}
              className="p-5 flex flex-col items-start gap-3"
            >
              <img
                src={contact.icon}
                alt={contact.type}
                className="h-10 w-10 "
              />
              <h2 className="text-[1.5rem] text-green-950 font-bold">
                {contact.type}
              </h2>
              {contact.contact}
            </div>
          ))}
          <div className="p-5 flex flex-col items-start gap-3" >
              <img
                src={SocialsIcon}
                alt="Socials"
                className="h-10 w-10 "
              />
              <h2 className="text-[1.5rem] text-green-950 font-bold">
                Socials
              </h2>
              <div className="flex items-center gap-5">
                <a href="https://www.facebook.com/freeylettuce"><img src={FacebookIcon} alt="Facebook Icon" className="h-5 w-5"/></a>
                <a href="tiktok.com/@cafelayan"><img src={IgIcon} alt="Facebook Icon" className="h-5 w-5"/></a>
              </div>
            </div>
        </div>
        <div className="p-3 bg-stone-50/50 p-3 shadow-sm shadow-gray rounded-md" >
          <form action="#" method="get">
            <div className="flex flex-col ">
              <label htmlFor="email" className="text-[1.2rem] text-green-950 py-2">Email</label>
              <input
                type="email"
                id="email"
                placeholder="example@example.com"
                className="border border-gray-300 ps-2 pe-10 p-3 rounded-md hover:outline-green-500 focus:outline-green-500"
                required
              />
              <label htmlFor="message " className="text-[1.2rem] text-green-950 py-2">Message</label>
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Type something..."
                className="border border-gray-300 ps-2 pe-10 pb-30 pt-2 rounded-md hover:outline-green-500 focus:outline-green-500"
                required
              />
              <button
                type="submit"
                className="border border-green-950 py-3 text-green-950 my-2 hover:bg-green-950 transition-color duration-250 ease-in hover:text-green-50 text-[1.2rem]"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default Contacts;
