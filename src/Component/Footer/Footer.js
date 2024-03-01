import "./Footer.css";
import call from "./Group 35637.png";
import location from "./Path_34175.png";
import mail from "./Fill-4.png";
import footerlogo from "./Atlas Limited Partnerships White 1.png";

export default function Footer() {
    return(
        <div className="mainfootcon">
            <div className="footercon">

                <div className="contactcon">
                    <h5><b>Contacts</b></h5> 
                    <div>
                        <img src={call} alt="call" className="call"></img> 
                        <p className="footerp">619-393-4981 ext. 101</p>
                    </div>

                    <div>
                        <img src={mail} alt="mail" className="mail"></img>
                        <p className="footerp">Invest@AtlasLPS.com</p>
                    </div>
                
                    <div>
                        <img src={location} alt="location" className="location"></img>
                        <p className="footerpp">501 West Broadway, Suite 800, San Diego, CA 92101</p>
                    </div>
                
                </div>

                <div>
                    <h5><b>Links</b></h5>
                    <a>FAQs</a>
                    <a>Terms and Conditions</a>
                    <a>Privacy Policies</a>
                    <a>Submit Deals</a>
                    <a>Media Kit</a>
                </div>

                <div>
                    <h5><b>Investment Disclosure</b></h5>
                    <p>When you invest with Atlas, you are more than a number; you are a partner. As a partner with us, you can access opportunities usually reserved only for the largest institutional investors. You can access a team driven only by excellence and results. You can access real estate investment opportunities designed with you in mind.</p>
                </div>
            
            </div>

            <div className="finalcon">
                <img src={footerlogo} alt="footerlogo" className="footerlogo"></img>
                <p>ATLAS 2022 @ All Right Reserved</p>
            </div>

        </div>
    )
}