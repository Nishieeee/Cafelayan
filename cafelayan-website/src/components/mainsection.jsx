
import Heropage from "./Heropage";
import Aboutpage from "./aboutpage";
import Testimony from "./testimonials";
import Products from "./products";

function Main() {
    return(
        <main className="bg-green-50">
            <Heropage />
            <Aboutpage />
            <Testimony />
            <Products />
        </main>
    );
}

export default Main