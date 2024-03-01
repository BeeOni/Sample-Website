import "./About.css";
import vector from "./Vector 1.png";
import aboutimg from "./Rectangle 8.png";
import rating from "./Group 33.png"
import clientlogo from "./_Client logo.png";
import clientlogo1 from "./_Client logo (1).png";
import clientlogo2 from "./_Client logo (2).png";
import clientlogo3 from "./_Client logo (3).png";
import clientlogo4 from "./_Client logo (4).png";
import clientlogo5 from "./_Client logo (5).png";


export default function About() {
    return(
        <div>
            <div className="aboutcon">
                <div className="minicon" >
                <h3 className="h31">-About</h3>
                <h3 className="h32"><b> Atlas Limited Partnerships</b></h3>
                <p>When you invest with Atlas, you are more than a number; you are a partner. As a partner with us, you can access opportunities usually reserved only for the largest institutional investors. You can access a team driven only by excellence and results. You can access real estate investment opportunities designed with you in mind.</p>
                </div>
                <img src={rating} alt="rating" className="rating"></img>
                <img src={aboutimg} alt="aboutimg" className="aboutimg"></img>
            </div>
            <img src={vector} alt="vector" className="vector2"></img>

            <div>
                <h3 className="h33"><b>Featured In</b></h3>
                <hr></hr>
                <div className="imgcon">
                    <img src={clientlogo} alt="clientlogo"></img>
                    <img src={clientlogo1} alt="clientlogo"></img>
                    <img src={clientlogo2} alt="clientlogo"></img>
                    <img src={clientlogo3} alt="clientlogo"></img>
                    <img src={clientlogo4} alt="clientlogo"></img>
                    <img src={clientlogo5} alt="clientlogo"></img>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}