import Image1 from "../assets/cafelayan-owner-2.jpg";
import Image2 from "../assets/lettuce-2.jpg";
import Image3 from "../assets/lettuce-3.jpg";
import Logo from "../assets/cafelayanlogo.jpg";

const ItemContents = [
  {
    textDescription: "Agriculture Leader",
    image: Image1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias quos aspernatur animi magnam esse dolorem hic temporibus fuga quasi odio ratione enim itaque?",
  },
  {
    textDescription: "Quality Standards",
    image: Image2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias quos aspernatur animi magnam esse dolorem hic temporibus fuga quasi odio ratione enim itaque?",
  },
  {
    textDescription: "Organic Products",
    image: Image3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias quos aspernatur animi magnam esse dolorem hic temporibus fuga quasi odio ratione enim itaque?",
  },
];

function Testimony() {
  return (
    <>
      {/* Why we are the best Section */}
      <section className="px-4 py-8 sm:px-6 md:px-10 lg:px-16 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-green-950 font-bold mb-6">
          Why choose us?
        </h1>

        {/* Features Grid - Stacked on mobile, grid on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {ItemContents.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-end h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg bg-cover bg-center shadow-md shadow-black hover:scale-105 transition-transform duration-300 cursor-pointer mb-4 sm:mb-0"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="flex flex-col items-start p-3 sm:p-4 md:p-5 w-full bg-gradient-to-b from-slate-50/5 to-slate-900/90 rounded-b-lg">
                <h2 className="text-lg sm:text-xl md:text-2xl text-green-50 hover:text-yellow-200 transition-colors duration-300 ease-in">
                  {item.textDescription}
                </h2>
                <p className="text-start text-xs sm:text-sm md:text-base text-green-50 hover:text-yellow-200 transition-colors duration-300 ease-in mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-yellow-100 px-4 py-12 sm:px-6 md:px-10 lg:px-16 flex flex-col items-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-green-950 font-medium mb-6">
          Testimonials
        </h1>

        {/* Testimonials Grid - Stacked on mobile, grid on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full max-w-6xl">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 items-center justify-center text-center bg-white p-4 rounded-lg shadow-sm mb-4 sm:mb-0"
            >
              <p className="text-xs sm:text-sm md:text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quasi delectus perferendis odio aspernatur. Sequi
                sapiente excepturi ipsum nam facere consectetur natus ipsam
                pariatur
              </p>

              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden">
                <img
                  src={Logo}
                  alt="rater profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-green-950 text-sm sm:text-base md:text-lg font-medium">
                Jhon Clein Pagarogan
              </h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Testimony;
