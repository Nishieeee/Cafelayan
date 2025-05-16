import React, { useEffect, useState } from 'react';

// Import AOS if you're using it for animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// Use dynamic imports for SVGs to prevent render blocking
const iconPaths = {
  email: "../assets/icons/email-svgrepo-com.svg",
  ig: "../assets/icons/instagram-svgrepo-com.svg",
  phone: "../assets/icons/phone-svgrepo-com.svg",
  facebook: "../assets/icons/facebook-svgrepo-com.svg",
  location: "../assets/icons/location-pin-alt-1-svgrepo-com.svg",
  socials: "../assets/icons/grid-masonry-svgrepo-com.svg"
};

// Fallback SVGs as data URIs
const fallbackIcons = {
  email: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik00IDRoMTZjMS4xIDAgMiAuOSAyIDJ2MTJjMCAxLjEtLjkgMi0yIDJINGMtMS4xIDAtMi0uOS0yLTJ2LTEyYzAtMS4xLjktMiAyLTJ6Ii8+PHBvbHlsaW5lIHBvaW50cz0iMjIsNiAxMiwxMyAyLDYiLz48L3N2Zz4=',
  phone: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMiAxNi45MnYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3IDE5LjUgMTkuNSAwIDAgMS02LTYgMTkuNzkgMTkuNzkgMCAwIDEtMy4wNy04LjY3QTIgMiAwIDAgMSA0LjExIDJoM2EyIDIgMCAwIDEgMiAxLjcyIDE1LjExIDE1LjExIDAgMCAwIC44MyAzLjI4IDIgMiAwIDAgMS0uNDUgMi4xMkw4LjA5IDkuOTFhMTYgMTYgMCAwIDAgNiA2bDEuMjctMS4yN2EyIDIgMCAwIDEgMi4xMS0uNDUgMTUuMTEgMTUuMTEgMCAwIDAgMy4zLjgyIDIgMiAwIDAgMSAxLjcxIDIuMDV6Ii8+PC9zdmc+',
  location: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMSAxMGMwIDctOSAxMy05IDEzcy05LTYtOS0xM2E5IDkgMCAwIDEgMTgtMHoiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSIzIi8+PC9zdmc+',
  socials: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSI3IiBoZWlnaHQ9IjciPjwvcmVjdD48cmVjdCB4PSIxNCIgeT0iMyIgd2lkdGg9IjciIGhlaWdodD0iNyI+PC9yZWN0PjxyZWN0IHg9IjE0IiB5PSIxNCIgd2lkdGg9IjciIGhlaWdodD0iNyI+PC9yZWN0PjxyZWN0IHg9IjMiIHk9IjE0IiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48L3JlY3Q+PC9zdmc+',
  facebook: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xOCAyaC0zYTUgNSAwIDAgMC01IDV2M0g3djRoM3Y4aDRWMTRoM2wxLTRoLTR2LTNhMSAxIDAgMCAxIDEtMWgzeiI+PC9wYXRoPjwvc3ZnPg==',
  ig: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxyZWN0IHg9IjIiIHk9IjIiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1Ij48L3JlY3Q+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNCIvPjxsaW5lIHgxPSIxNi41IiB5MT0iNy41IiB4Mj0iMTYuNTEiIHkyPSI3LjQ5Ij48L2xpbmU+PC9zdmc+'
};

const ContactInfo = [
  { type: "Email", contact: "cafelayanfoods@gmail.com", iconPath: iconPaths.email, iconKey: "email" },
  { type: "Phone", contact: "0906-641-2285", iconPath: iconPaths.phone, iconKey: "phone" },
  {
    type: "Address",
    contact: "Tulungatung, Zamboanga City",
    iconPath: iconPaths.location,
    iconKey: "location"
  },
];

function Contacts() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [icons, setIcons] = useState({});
  const [socialIcons, setSocialIcons] = useState({});
  const [iconsLoaded, setIconsLoaded] = useState(false);

  // Preload icons
  useEffect(() => {
    const loadIcons = async () => {
      try {
        // Use Promise.all to load all icons in parallel
        setIconsLoaded(false);
        
        // Load contact icons
        const loadedIcons = {};
        for (const key in iconPaths) {
          try {
            // Try to load icon, use fallback if it fails
            const module = await import(/* @vite-ignore */ iconPaths[key]).catch(() => null);
            loadedIcons[key] = module?.default || fallbackIcons[key];
          } catch (error) {
            console.warn(`Failed to load icon: ${key}`, error);
            loadedIcons[key] = fallbackIcons[key];
          }
        }
        
        setIcons(loadedIcons);
        setIconsLoaded(true);
      } catch (error) {
        console.error("Error loading icons:", error);
        // Use fallback icons as a last resort
        setIcons(fallbackIcons);
        setIconsLoaded(true);
      }
    };

    loadIcons();
  }, []);

  // Initialize AOS
  useEffect(() => {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        once: true,
        disable: 'mobile'
      });
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Load EmailJS dynamically only when needed
    import('emailjs-com')
      .then((Emailjs) => {
        Emailjs.default.sendForm(
          'service_5o826xd',
          'template_qnh9ngi',
          e.target,
          'un71oy8yFznvy_-X3'
        )
        .then(() => {
          setSubmitMessage('Message sent successfully!');
          e.target.reset();
        })
        .catch(err => {
          console.error("EmailJS error:", err);
          setSubmitMessage('Failed to send message. Please try again.');
        })
        .finally(() => {
          setIsSubmitting(false);
        });
      })
      .catch(err => {
        console.error("Error loading EmailJS:", err);
        setIsSubmitting(false);
        setSubmitMessage('Something went wrong. Please try again later.');
      });
  };

  // Show loading state until icons are ready
  if (!iconsLoaded) {
    return (
      <section className="px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-5">
        <div className="flex justify-center items-center h-64">
          <div className="text-green-950">Loading contact information...</div>
        </div>
      </section>
    );
  }

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
                data-aos="fade-up"
                key={index}
                className="p-4 flex flex-col items-start gap-2 bg-yellow-50/30 rounded-lg"
              >
                <img
                  src={icons[contact.iconKey] || fallbackIcons[contact.iconKey]}
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
                src={icons.socials || fallbackIcons.socials}
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={icons.facebook || fallbackIcons.facebook}
                    alt="Facebook Icon"
                    className="h-6 w-6"
                  />
                </a>
                <a
                  href="https://www.instagram.com/cafelayan.ph?igsh=YzljYTk1ODg3Zg=="
                  className="hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src={icons.ig || fallbackIcons.ig}
                    alt="Instagram Icon" 
                    className="h-6 w-6" 
                  />
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

          <form onSubmit={sendEmail}>
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
                name="email"
                placeholder="example@example.com"
                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mb-3"
                required
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`border-2 border-green-950 py-2 text-green-950 mt-2 hover:bg-green-950 transition-colors duration-300 ease-in-out hover:text-green-50 text-sm md:text-base font-medium rounded-md ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-102'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
              
              {submitMessage && (
                <div className={`mt-4 p-2 rounded ${submitMessage.includes('success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitMessage}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;