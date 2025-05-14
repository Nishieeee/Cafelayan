import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import ContactPage from "../contacts";
import AboutImg from "../../assets/landscape-2.jpg";
function Contacts() {
  return (
    <>
      <section>
        <div
          className="w-full h-50 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${AboutImg})` }}
        >
          <h1 className="text-2xl text-green-950 font-bold hover:text-yellow-200 transition-colors duration-300 ease-in sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            About us
          </h1>
        </div>
      </section>
      <section>
        <ContactPage />
      </section>
      <section >
        <MapContainer
          center={[6.969438, 121.956844]}
          zoom={16}
          style={{ height: "400px", width: "100%",}}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
          <Marker position={[6.969438, 121.956844]}>
            <Popup>Cafelayan Hydroponic Farm</Popup>
          </Marker>
        </MapContainer>
      </section>
    </>
  );
}

export default Contacts;
