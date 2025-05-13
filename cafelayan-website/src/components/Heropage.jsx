import Herobg from "../assets/landscape.jpg";

function Heropage() {
  return (
    <div
      className="hero-page flex items-center justify-center bg-cover bg-center bg-black-50 p-5"
      style={{ backgroundImage: `url(${Herobg})` }}
    >
      <div className="hero-container flex flex-col items-center justify-center h-full w-full text-yellow-200 text-center">
        <h1 className="text-7xl">Experience Freshness and Flavour</h1>
        <p className="text-xl">
          We take pride in cultivating a range of high-value crops
        </p>
      </div>
    </div>
  );
}
export default Heropage;
