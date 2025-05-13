import Image1 from "../assets/cafelayan-owner-2.jpg";
import Image2 from "../assets/lettuce-2.jpg";
import Image3 from "../assets/lettuce-3.jpg";

const ItemContents = [
    {textDescription: "Agriculture Leader", image:Image1, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias quos aspernatur animi magnam esse dolorem hic temporibus fuga quasi odio ratione enim itaque?"},
    {textDescription: "Quality Standards", image:Image2, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias quos aspernatur animi magnam esse dolorem hic temporibus fuga quasi odio ratione enim itaque?"},
    {textDescription: "Organic Products", image:Image3, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias quos aspernatur animi magnam esse dolorem hic temporibus fuga quasi odio ratione enim itaque?"},
];

function Testimony() {
  return (
    <>
      {/*Why we are the best*/}
      <section className="px-20 text-center h-screen text-green-50">
        <h1 className="text-[2rem] text-green-950 font-bold">
          Choose from the Best
        </h1>
        <div className="grid grid-cols-3 gap-5 py-5 px-3">
            {ItemContents.map((item, index) =>(
                <div key={index}
                    className="flex flex-col items-start justify-end h-100 rounded-lg bg-cover bg-center shadow-sm shadow-black hover:scale-103 transition-transform transition-discrete duration-250 cursor-pointer"
                    style={{backgroundImage:`url(${item.image})` }}>
                    <div key={index} className="flex flex-col items-start p-3 bg-gradient-to-b from-slate-50/5 to-slate-900/90">
                        <h2 className="text-[1.5rem] hover:text-yellow-200 transform-color duration-400 transform-discrete ease-in">{item.textDescription}</h2>
                        <p className="text-start text-[1rem] hover:text-yellow-200 transform-color duration-400 transform-discrete ease-in">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        
      </section>
      {/*Ratings */}
      <section></section>
    </>
  );
}

export default Testimony;
