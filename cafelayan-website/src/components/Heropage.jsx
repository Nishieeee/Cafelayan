import Herobg from "../assets/landscape.jpg";

function Heropage() {
  return (
    <section className="hero-page flex flex-col items-center justify-center bg-cover bg-center">
      <div className="hero-container p-8 bg-green-950 flex flex-col items-center justify-center h-full w-full text-yellow-50 text-center">
        <h1 className="text-7xl">Experience Freshness and Flavour</h1>
        <p className="text-xl pb-20">
          We take pride in cultivating a range of high-value crops
        </p>
      </div>
      <div className="p-4 relative -top-25 z-2">
          <img
            src={Herobg}
            alt="Cafelayan Landscape"
            className="h-50 w-100 rounded-lg shadow-md shadow-black-500"
          />
        </div>
    </section>
  );
}
export default Heropage;
