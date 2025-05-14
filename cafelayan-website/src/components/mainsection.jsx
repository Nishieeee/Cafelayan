
import Heropage from "./Heropage";
import Aboutpage from "./aboutpage";
import Testimony from "./testimonials";
import Products from "./products";
import Contacts from "./contacts";

function Main() {
    return(
        <main className="bg-white">
            <Heropage />
            <Aboutpage />
            <Testimony />
            <Products />
            <Contacts />
        </main>
    );
}

export default Main