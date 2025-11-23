import { createRoot } from "react-dom/client"
import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interests from "./components/Interests";
const root = createRoot(document.getElementById("root"));

function Main() {
    return(
        <>
        <div className="card">
            <Info />
            <main className="padding">
                <About />
                <Interests />
            </main>
            <footer className="footer-container">
                <Footer />
            </footer>
        </div>
        </>
    )
}

root.render(
    <Main />
)