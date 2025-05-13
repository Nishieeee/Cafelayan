import Contentimage from "../assets/cafelayan-4.jpg";
import Contentimage2 from "../assets/cafelayan-owner.jpg";

function Aboutpage() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <img src={Contentimage} alt="Cafelayan Farm Image" />
        </div>
        <div className="col-span-3 px-8 py-8">
          <div className="bg-neutral-50 p-3 text-green-900 font-bold"><h3 className="border-b-2 w-50">Cafelayan Hydrophonic Farm</h3></div>
          <p className="text-red-900 bg-neutral-50 px-8 py-3 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            reprehenderit deleniti veniam pariatur ad dolorem consectetur, earum
            amet eveniet asperiores molestiae fugit voluptates qui numquam
            molestias commodi officiis sit libero?
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className="order-2 col-span-1">
          <img src={Contentimage2} alt="Cafelayan Farm Image" />
        </div>
        <div className="order-1 col-span-3 p-8">
          <p className="text-red-900 bg-neutral-50 p-15 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            reprehenderit deleniti veniam pariatur ad dolorem consectetur, earum
            amet eveniet asperiores molestiae fugit voluptates qui numquam
            molestias commodi officiis sit libero?
          </p>
        </div>
      </div>
    </div>
  );
}
export default Aboutpage;
