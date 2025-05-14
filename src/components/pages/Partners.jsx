import About from "../../assets/landscape.jpg";
import Temp from "../../assets/cafelayanlogo.jpg";
const partners = [
  {name: "Kids Who Farm"},
  {name: "The Farming Teacher"},
  {name: "Al Fresco Picnic"},
  {name: "Cafelayan Lettuce Chips"},
  {name: "Cafelayan Lettuce Chips - Dumaguete City Distributor"},
  {name: "Cafelayan Lettuce Chips - Tacloban City Distributor"},
  {name: "Cafelayan Lettuce Chips - Cabuyao City Distributor"},
  {name: "Cafelayan Lettuce Chips - Zamboanga City Distributor"}

  
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
          <h1 className="text-2xl text-green-950 font-bold hover:text-yellow-200 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Partners</h1>
        </div>

        <div className="grid grid-cols-1 gap-3 md:gap-5 lg:gap-5 xl:gap-8 md:grid-cols-2 lg:grid-cols-4 p-8 lg:p-12">
          {partners.map((partner, index) => (
            <div key={index} className="col-span-1 bg-cover bg-center h-60 flex flex-col justify-end " style={{backgroundImage: `url(${Temp})`}}>
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
