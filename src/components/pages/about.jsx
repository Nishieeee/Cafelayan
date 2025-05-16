import AboutImg from "../../assets/CoverPhoto.jpg"
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
          <h1 data-aos="fade-up" className="text-4xl antialiased font-bold text-yellow-50 transition-colors duration-300 ease-in sm:text-5xl md:text-6xl lg:text-8xl">
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
