import Contentimage from "../assets/cafelayan-4.jpg";
import Contentimage2 from "../assets/cafelayan-owner.jpg";

function Aboutpage() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <img src={Contentimage} alt="Cafelayan Farm Image" />
        </div>
        <div className="col-span-3 p-8">
          <p>
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
          <p>
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
