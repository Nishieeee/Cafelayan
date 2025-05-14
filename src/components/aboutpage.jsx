import Contentimage from "../assets/cafelayan-4.jpg";
import Contentimage2 from "../assets/landscape-2.jpg";
import Contentimage3 from "../assets/landscape.jpg";

function Aboutpage() {
  return (
    <section className="py-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Mobile layout - stacked */}
      <div className="flex flex-col gap-6 md:grid md:grid-cols-7 md:gap-8">
        {/* Text content section */}
        <div className="md:col-span-4">
          <div className="border-b border-green-900 w-full md:w-5/6 lg:w-full">
            <h2 className="text-green-950 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Cafelayan Hydroponic Farm
            </h2>
          </div>
          
          <div className="mt-4">
            <h3 className="text-xl sm:text-2xl text-green-950 font-semibold mb-2">Our Mission</h3>
            <p className="text-sm sm:text-base md:text-lg mb-3">
              Our hydroponics method ensure each leaf is packed with nutrition,
              free from harmful chemicals and bursting with flavor. We're driven
              by a passion health, sustainability, and community well-being.
              Each one bite is a testament to our commitment to your healht and
              our environment.
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-4">
              Our farm has been dedicated to revolutionizing agriculture with
              innovative hydroponic techniques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-green-950">
            <div className="border-l-2 border-green-900 pl-3">
              <h5 className="text-lg sm:text-xl font-medium">Organic making</h5>
            </div>
            <div className="border-l-2 border-green-900 pl-3">
              <h5 className="text-lg sm:text-xl font-medium">Certified Products</h5>
            </div>
          </div>
        </div>
        
        {/* Images section */}
        <div className="md:col-span-3 mt-6 md:mt-0">
          {/* Mobile: Single column layout for images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="sm:col-span-1">
              <img
                src={Contentimage}
                alt="Cafelayan Image Sign"
                className="rounded-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            
            <div className="sm:col-span-1 grid grid-cols-1 gap-3 mt-3 sm:mt-0">
              <div>
                <img
                  src={Contentimage2}
                  alt="Cafelayan Owner Jeffrey Sereno"
                  className="rounded-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div>
                <img
                  src={Contentimage3}
                  alt="Lettuce"
                  className="rounded-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutpage;