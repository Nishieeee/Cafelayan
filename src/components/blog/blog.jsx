import About from "../../assets/landscape.jpg";
function Partners() {
  return (
    <>
      {/* Partners page */}
      <section className="partners-page ">
        <div
          className="w-full h-50 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${About})` }}
        >
          <h1 className="text-2xl text-green-950 font-bold hover:text-yellow-200 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Partners</h1>
        </div>

        
      </section>
    </>
  );
}

export default Partners;
