import Header from "./components/header";
import Footer from "./components/footer";
import Heropage from "./components/Heropage";
import Aboutpage from "./components/aboutpage";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <Heropage />
        <Aboutpage />
      </main>
      <Footer />
    </>
  );
}

export default App;
