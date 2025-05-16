

import Herobg from "../assets/cafelayan-3.jpg";

function Heropage() {

  return (
    <section className="relative flex flex-col items-center w-full bg-cover bg-center min-h-90 cursor-default">
      {/* Hero container with text */}
      <div  className="hero-container p-4 bg-green-950 flex flex-col items-center justify-center w-full text-yellow-50 text-center shadow-md md:p-15 lg:p-20">
        <h1 data-aos="fade-up" className="text-2xl font-bold mb-3 hover:text-yellow-200 transition-colors duration-300 ease-in sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Experience Freshness and Flavour
        </h1>
        <p data-aos="fade-up" className="text-sm font-normal pb-6 max-w-xs hover:text-yellow-200 transition-colors duration-300 ease-in sm:text-base md:text-lg md:max-w-md lg:text-xl lg:max-w-lg xl:max-w-2xl">
          Step inside our world of fresh, nutrient-rich produce and discover the
          vibrant flavors and health benefits that define our commitment to
          quality.
        </p>
      </div>

      {/* Image container */}
      <div data-aos="fade-up" className="p-4 relative -mt-10 z-10 w-full flex justify-center md:-mt-16 lg:-mt-20">
        <img
          src={Herobg}
          alt="Cafelayan Landscape"
          className="w-full max-w-xs rounded-lg shadow-lg object-cover h-48 sm:max-w-sm sm:h-56 md:max-w-md md:h-64 lg:max-w-lg lg:h-72 xl:max-w-xl xl:h-80"
        />
      </div>
    </section>
  );
}

export default Heropage;
