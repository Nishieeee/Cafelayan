
import Heropage from "./Heropage";
import Aboutpage from "./aboutpage";
import Testimony from "./testimonials";

function Main() {
    return(
        <main className="bg-green-50">
            <Heropage />
            <Aboutpage />
            <Testimony />
        </main>
    );
}

export default Main