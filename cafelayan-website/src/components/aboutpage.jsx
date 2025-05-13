import Contentimage from "../assets/cafelayan-4.jpg";
import Contentimage2 from "../assets/landscape-2.jpg";
import Contentimage3 from "../assets/landscape.jpg";

function Aboutpage() {
  return (
    <>
      <section className="py-10 px-20 grid grid-cols-7 h-screen">
        <div className="col-span-4 ">
          <div className="border-b border-green-900 w-130">
            <h2 className="text-green-950 text-[2.5rem]">Cafelayan Hydroponic Farm</h2>
          </div>
          <div className="text-[1rem] p-3">
            <h3 className="text-[2rem] text-green-950">Our Mission</h3>
            <p className="p-3">
              Our hydroponics method ensure each leaf is packed with nutrition,
              free from harmful chemicals and bursting with flavor. We're driven
              by a passion health, sustainability, and community well-being.
              Each one bite is a testament to our commitment to your healht and
              our environment.
            </p>
            <p className="p-3">
              Our farm has been dedicated to revolutionizing agriculture with
              innovative hydroponic techniques.
            </p>
          </div>
          <div></div>
        </div>
        <div className="col-span-3 gap-10">
            <div className="grid grid-cols-2">
              <div className="col-span-1 p-2">
                <img src={Contentimage} alt="Cafelayan Image Sign" className="rounded-xl"/>
              </div>
              <div className="col-span-1 flex flex-col p-1">
                <img src={Contentimage2} alt="Cafelayan Owner Jeffrey Sereno" className="rounded-xl p-2"/>
                <img src={Contentimage3} alt="Lettuce" className="rounded-xl p-2"/>
              </div>
            </div>
        </div>
      </section>
      <section className="bg-lime-500">
        <div></div>
      </section>
    </>
  );
}
export default Aboutpage;
