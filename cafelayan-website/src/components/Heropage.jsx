import Herobg from "../assets/cafelayan-3.jpg";

function Heropage() {
  return (
    <section className="hero-page flex flex-col items-center justify-center bg-cover bg-center h-150 cursor-default">
      <div className="hero-container p-5 bg-green-950 flex flex-col items-center justify-center h-full w-full text-yellow-50 text-center shadow-md shadow-black-200">
        <h1 className="text-[5.1rem] text-center hover:text-yellow-200 transform-color duration-400 transform-discrete ease-in">Experience Freshness and Flavour</h1>
        <p className="text-[1.2rem] font-normal text-center pb-10 w-155 hover:text-yellow-200 transform-color duration-400 transform-discrete ease-in">
          Step inside our world of fresh, nutrient-rich produce and discover the
          vibrant flavors and health benefits that define our commitment to
          quality.
        </p>
      </div>
      <div className="p-4 relative -top-30 z-2 h-50">
        <img
          src={Herobg}
          alt="Cafelayan Landscape"
          className="cafelayan-landscape h-70 w-110 rounded-lg"
        />
      </div>
    </section>
  );
}
export default Heropage;
