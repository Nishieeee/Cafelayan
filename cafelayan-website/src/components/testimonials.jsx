import Image1 from "../assets/cafelayan-owner-2.jpg";
import Image2 from "../assets/lettuce-2.jpg";
import Image3 from "../assets/lettuce-3.jpg";
import Logo from "../assets/cafelayanlogo.jpg";
const ItemContents = [
  {
    textDescription: "Agriculture Leader",
    image: Image1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias quos aspernatur animi magnam esse dolorem hic temporibus fuga quasi odio ratione enim itaque?",
  },
  {
    textDescription: "Quality Standards",
    image: Image2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias quos aspernatur animi magnam esse dolorem hic temporibus fuga quasi odio ratione enim itaque?",
  },
  {
    textDescription: "Organic Products",
    image: Image3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias quos aspernatur animi magnam esse dolorem hic temporibus fuga quasi odio ratione enim itaque?",
  },
];

function Testimony() {
  return (
    <>
      {/*Why we are the best*/}
      <section className="px-20 text-center text-green-50">
        <h1 className="text-[2rem] text-green-950 font-bold">
          Choose from the Best
        </h1>
        <div className="grid grid-cols-3 gap-5 py-5 px-3">
          {ItemContents.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-end h-100 rounded-lg bg-cover bg-center shadow-sm shadow-black hover:scale-103 transition-transform transition-discrete duration-250 cursor-pointer"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div
                key={index}
                className="flex flex-col items-start p-3 bg-gradient-to-b from-slate-50/5 to-slate-900/90"
              >
                <h2 className="text-[1.5rem] hover:text-yellow-200 transform-color duration-400 transform-discrete ease-in">
                  {item.textDescription}
                </h2>
                <p className="text-start text-[1rem] hover:text-yellow-200 transform-color duration-400 transform-discrete ease-in">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/*Ratings */}
      <section className="bg-yellow-100 px-20 h-90 flex flex-col items-center justify-center">
        <h1 className="text-[1.8rem] text-green-950">Testimonials</h1>
        <div className="grid grid-cols-3 gap-10 py-10">
          <div className="flex flex-col gap-5 items-center justify-center text-center">
            <p className="text-[0.8rem]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              quasi delectus perferendis odio aspernatur. Sequi sapiente
              excepturi ipsum nam facere consectetur natus ipsam pariatur
            </p>
            <img
              src={Logo}
              alt="rater profile"
              className="h-15 w-15 rounded-full"
            />
            <h3 className="text-green-950 text-[1.2rem]">Jhon Clein Pagarogan</h3>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center text-center">
            <p className="text-[0.8rem]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              quasi delectus perferendis odio aspernatur. Sequi sapiente
              excepturi ipsum nam facere consectetur natus ipsam pariatur
            </p>
            <img
              src={Logo}
              alt="rater profile"
              className="h-15 w-15 rounded-full"
            />
            <h3 className="text-green-950 text-[1.2rem]">Jhon Clein Pagarogan</h3>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center text-center">
            <p className="text-[0.8rem]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              quasi delectus perferendis odio aspernatur. Sequi sapiente
              excepturi ipsum nam facere consectetur natus ipsam pariatur
            </p>
            <img
              src={Logo}
              alt="rater profile"
              className="h-15 w-15 rounded-full"
            />
            <h3 className="text-green-950 text-[1.2rem]">Jhon Clein Pagarogan</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimony;
