import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/mainsection";

import Partners from "./components/pages/Partners";
import About from "./components/pages/about";
import Contact from "./components/pages/contactpage";
import Shop from "./components/pages/shop";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
