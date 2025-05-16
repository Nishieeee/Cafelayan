import Image1 from "../assets/cafelayan-owner-2.jpg";
import Image2 from "../assets/lettuce-2.jpg";
import Image3 from "../assets/recycling.jpeg";


const ItemContents = [
  {
    textDescription: "Agricultural Leader",
    image: Image1,
    description:
      "Leading the way in sustainable and modern farming techniques, Cafelayan is committed to innovatin and excellence in agriculture. Our team combines experience and passion to bring high-quality produce to local and global markets.",
  },
  {
    textDescription: "Quality Standards",
    image: Image2,
    description:
      "Every product from Cafelayan meets strict quality benchmarks, ensuring freshness, safety, and sustainability. From planting to packaging, we uphold rigorous standards to deliver the best to our customers.",
  },
  {
    textDescription: "Sustainability Commitment",
    image: Image3,
    description:
      "Cafelayan is dedicated to protecting our planet. Our farming methods minimize water use and reduce waste ensuring a greener future for generations",
  },
];

function Testimony() {
  return (
    <>
      {/* Why we are the best Section */}
      <section className="px-4 py-8 sm:px-6 md:px-10 lg:px-16 text-center">
        <h1 data-aos="fade-up" className="text-3xl sm:text-3xl md:text-4xl text-green-950 font-bold mb-6">
          Why choose us?
        </h1>

        {/* Features Grid - Stacked on mobile, grid on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {ItemContents.map((item, index) => (
            <div
              key={index}
              
              className="flex flex-col items-start justify-end h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg bg-cover bg-center shadow-md shadow-black hover:scale-105 transition-scale duration-300 ease-in-out cursor-pointer mb-4 sm:mb-0"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="flex flex-col items-start p-2 sm:p-3 md:p-4 w-full bg-gradient-to-b from-slate-50/5 to-slate-900/90 rounded-b-lg">
                <h2 data-aos="fade-up" className="text-xl sm:text-2xl md:text-3xl text-green-50 hover:text-yellow-200 transition-colors duration-300 ease-in">
                  {item.textDescription}
                </h2>
                <p data-aos="fade-up" className="text-start text-xs sm:text-sm md:text-base text-green-50 hover:text-yellow-200 transition-colors duration-300 ease-in mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-yellow-100 px-4 py-12 sm:px-6 md:px-10 lg:px-16 flex flex-col items-center">
        <h1 data-aos="fade-up" className="font-bold text-2xl sm:text-3xl md:text-4xl text-green-950 mb-6">
          Testimonials
        </h1>

        {/* Testimonials Grid - Stacked on mobile, grid on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 w-full max-w-6xl">
            <div
              data-aos="fade-up"
              className="flex flex-col gap-4 items-center justify-center text-center bg-white p-4 rounded-lg shadow-sm mb-4 sm:mb-0"
            >
              <p data-aos="fade-up" className="text-xs sm:text-sm md:text-base">
                A must go place!!! The lettuce are very delicious Thank you Cafelayan, hope na makabisita ulit soon.
              </p>

              {/* <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden">
                <img
                  src="#"
                  alt="rater profile"
                  className="w-full h-full object-cover"
                />
              </div> */}

              <h3 data-aos="fade-up" className="text-green-950 text-sm sm:text-base md:text-lg font-medium">
                Heart Angel Cuaton Maalam
              </h3>
            </div>
            <div
              data-aos="fade-up"
              className="flex flex-col gap-4 items-center justify-center text-center bg-white p-4 rounded-lg shadow-sm mb-4 sm:mb-0"
            >
              <p data-aos="fade-up" className="text-xs sm:text-sm md:text-base">
                gorgeous place!
              </p>

              {/* <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden">
                <img
                  src="#"
                  alt="rater profile"
                  className="w-full h-full object-cover"
                />
              </div> */}

              <h3 data-aos="fade-up" className="text-green-950 text-sm sm:text-base md:text-lg font-medium">
                John Carlo Decial
              </h3>
            </div>
        </div>
      </section>
    </>
  );
}

export default Testimony;
