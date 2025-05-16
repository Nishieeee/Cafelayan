import About from "../../assets/landscape.jpg";
import Temp from "../../assets/cafelayanlogo.jpg";
import Kwf from "../../assets/kwf.jpg";
import Clc from "../../assets/CLC.jpg";
import Afp from "../../assets/Alfresco.jpg";
import Tft from "../../assets/cafelayan-owner.jpg";
const partners = [
  {name: "Kids Who Farm", image: Kwf},
  {name: "The Farming Teacher", image: Tft},
  {name: "Al Fresco Picnic", image: Afp},
  {name: "Cafelayan Lettuce Chips", image: Clc},
  {name: "Cafelayan Lettuce Chips - Dumaguete City Distributor", image: Clc},
  {name: "Cafelayan Lettuce Chips - Tacloban City Distributor", image: Clc},
  {name: "Cafelayan Lettuce Chips - Cabuyao City Distributor", image: Clc},
  {name: "Cafelayan Lettuce Chips - Zamboanga City Distributor", image: Clc}

  
];
function Partners() {
  return (
    <>
      {/* Partners page */}
      {/*TODO: Update hero image and get samples for partner img*/}
      <section className="partners-page ">
        <div
        
          className="w-full h-50 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${About})` }}
        >
          <h1 className="text-4xl font-bold text-yellow-50 transition-colors duration-300 ease-in sm:text-5xl md:text-6xl lg:text-8xl">Partners</h1>
        </div>

        <div className="grid grid-cols-1 gap-3 md:gap-5 lg:gap-5 xl:gap-8 md:grid-cols-2 lg:grid-cols-4 p-8 lg:p-12">
          {partners.map((partner, index) => (
            <div key={index} className="col-span-1 bg-cover bg-center h-60 flex flex-col justify-end shadow-sm shadow-black" style={{backgroundImage: `url(${partner.image})`}}>
              <div className="p-3 py-4 rounded-md bg-gradient-to-b from-slate-50/1 via-slate-900/60 to-gray-900">
                <h1 className="text-green-50 md:text-lg lg:text-xl xl:text-2xl">{partner.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Partners;
