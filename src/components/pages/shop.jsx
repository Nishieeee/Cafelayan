
import AboutImg from "../../assets/landscape-2.jpg";

function Shop() {
  return (
    <>
      <section>
        <div
          className="w-full h-50 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${AboutImg})` }}
        >
          <h1
            data-aos="fade-up"
            className="text-4xl font-bold text-yellow-50 transition-colors duration-300 ease-in sm:text-5xl md:text-6xl lg:text-8xl"
          >
            Shop
          </h1>
        </div>
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-slate-950/50 text-2xl">
            This page is not yet available :(
          </h1>
        </div>
      </section>
    </>
  );
}

export default Shop
