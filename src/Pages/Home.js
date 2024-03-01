import About from "../Component/About/About";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import Mailinglist from "../Component/Mailinglist/Mailinglist";
import Title from "../Component/Title/Title";
import Why from "../Component/Why/Why";

export default function Home() {
    return (
        <div>
            <Header/>
            <Title/>
            <About/>
            <Why/>
            <Mailinglist/>
            <Footer/>
        </div>
    )
}