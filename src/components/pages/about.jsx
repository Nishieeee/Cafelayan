import AboutImg from "../../assets/landscape-2.jpg"
import Aboutpage from "../aboutpage";
import Testimony from "../testimonials";
function About() {
  return (
    <>
      <section>
        <div
          className="w-full h-50 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${AboutImg})` }}
        >
          <h1 className="text-2xl text-green-950 font-bold hover:text-yellow-200 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            About us
          </h1>
        </div>
      </section>
      <section className="py-8">
        <Aboutpage />
        <Testimony />
      </section>
    </>
  );
}

export default About;
