import LettuceChips from "../assets/lettuce_chips-2.jpg";
import Lettuce from "../assets/landscape-2.jpg";
import Kale from "../assets/kale-cafelayan.jpeg";

const Produce = [
  { name: "Lettuce", image: Lettuce },
  { name: "Kale", image: Kale },
];

function Products() {
  return (
    <>
      {/* Best Selling Product Section */}
      <section className="px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-16  flex flex-col">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-950 border-b border-green-950 w-full sm:w-3/4 md:w-2/3 lg:w-3/5">
          Our Best Selling Product
        </h1>
        
        {/* Product Display - Stack on mobile, grid on larger screens */}
        <div className="flex flex-col mt-6 md:grid md:grid-cols-3 md:gap-6 lg:gap-10">
          {/* Product Image */}
          <div className="md:col-span-1 mb-6 md:mb-0">
            <img
              src={LettuceChips}
              alt="lettuce chips"
              className="rounded-md shadow-md w-full h-auto object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          
          {/* Product Description */}
          <div className="md:col-span-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-green-950 border-b border-green-950 w-full sm:w-4/5 pb-1">
              Cafelayan's Lettuce Chips
            </h2>
            
            <div className="flex flex-col items-center mt-4">
              <p className="font-sans text-center text-sm sm:text-base md:text-lg lg:text-xl text-red-900 py-4">
                From classic salted to exciting spicy options, These chips are
                made with the best ingredients for a satisfying crunch. Whether
                you're snacking during a movie or having party, or even in a
                leisure picnic, Cafelayan's Lettuce Chips guarantees a
                delightful experience. So get ready for Chip-tastic Journey that
                will leave you craving for more!!
              </p>
              
              <button className="mt-4 border-2 border-green-950 py-2 px-5 md:py-3 md:px-7 text-sm md:text-base hover:bg-green-950 hover:text-green-50 transition-colors duration-300 ease-in rounded-sm">
                View more
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Showcase Section */}
      <section className="px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col items-center bg-yellow-100">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-950 mb-6">Products</h1>
        
        {/* Products Grid - 1 column on mobile, 2 columns on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10 w-full max-w-4xl">
          {Produce.map((produce, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-full overflow-hidden rounded-lg shadow-sm">
                <img 
                  src={produce.image} 
                  alt={produce.name} 
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover hover:scale-105 transition-transform duration-300 ease-in" 
                />
              </div>
              <h3 className="mt-3 text-lg sm:text-xl md:text-2xl text-green-950 font-medium">
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