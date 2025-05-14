import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/mainsection";
import Partners from "./components/pages/Partners";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
