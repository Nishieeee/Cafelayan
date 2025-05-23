import LettuceChips from "../assets/lettuce_chips-2.jpg";
import Lettuce from "../assets/landscape-2.jpg";
import Kale from "../assets/kale-cafelayan.jpeg";
import { Link } from "react-router-dom";

const Produce = [
  { name: "Lettuce", image: Lettuce },
  { name: "Kale", image: Kale },
];

function Products() {
  return (
    <>
      {/* Best Selling Product Section */}
      <section className="px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-16  flex flex-col">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-950  w-full sm:w-3/4 md:w-2/3 lg:w-3/5"
        >
          Our Best Selling Product
        </h1>

        {/* Product Display - Stack on mobile, grid on larger screens */}
        <div
          data-aos="fade-up"
          className="flex flex-col mt-6 md:grid md:grid-cols-3 md:gap-6 lg:gap-10"
        >
          {/* Product Image */}
          <div className="md:col-span-1 mb-6 md:mb-0">
            <img
              data-aos="fade-up"
              src={LettuceChips}
              alt="lettuce chips"
              className="rounded-md shadow-md w-full h-auto object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          {/* Product Description */}
          <div className="md:col-span-2 ">
            <h2
              data-aos="fade-up"
              className="text-2xl font-bold sm:text-3xl md:text-4xl text-green-950 w-full sm:w-4/5 pb-1"
            >
              Cafelayan's Lettuce Chips
            </h2>

            <div className="flex flex-col items-center mt-4">
              <p
                data-aos="fade-up"
                className="font-sans text-center text-sm sm:text-base md:text-lg lg:text-xl text-red-900 py-4"
              >
                From Classic sea salt to bold spicy flavours, Cafelayan's
                Lettuce Chipsdeliver a satisfying crunchwith only premium
                ingrredients. These light, crispy snacks are perfect for movie
                nights, gatherings with friends, or anytime you crave something
                deliciously different. Made with real lettuce and no artificial
                preservatives, they're a better-for-you altrnative that doesn't
                compromise taste. Experience our Chip-tastic journey and
                discover why customers keep coming back for more.
              </p>

              <div data-aos="fade-up" className="mt-4">
                <Link
                  to="/shop"
                  className="mt-4 border-2 border-green-950 py-2 px-5 md:py-3 md:px-7 text-lg md:text-xl bg-green-950 text-green-50 hover:scale-105 hover:outline-4 outline-green-400 transition-scale duration-300 rounded-sm"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section className="px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col items-center bg-yellow-100">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-950 mb-6">
          Products
        </h1>

        {/* Products Grid - 1 column on mobile, 2 columns on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10 w-full max-w-4xl">
          {Produce.map((produce, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-full overflow-hidden rounded-lg shadow-sm">
                <img
                  data-aos="fade-up"
                  src={produce.image}
                  alt={produce.name}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover hover:scale-105 transition-transform duration-300 ease-in"
                />
              </div>
              <h3
                data-aos="fade-up"
                className="mt-3 text-lg sm:text-xl md:text-2xl text-green-950 font-medium"
              >
                {produce.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Products;
