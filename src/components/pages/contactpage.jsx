import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MarkerIcon from "leaflet/dist/images/marker-icon.png";
import MarkerShadow from "leaflet/dist/images/marker-shadow.png";

import ContactPage from "../contacts";
import AboutImg from "../../assets/CoverPhoto.jpg";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: MarkerIcon,
  shadowUrl: MarkerShadow,
});

function Contacts() {
  return (
    <>
      <section>
        <div
          className="w-full h-50 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${AboutImg})` }}
        >
          <h1 data-aos="fade-up" className="text-4xl font-bold text-yellow-50 transition-colors duration-300 ease-in sm:text-5xl md:text-6xl lg:text-8xl">
            Contacts
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
