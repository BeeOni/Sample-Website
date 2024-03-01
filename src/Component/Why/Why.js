import "./Why.css";
import whyimg from "./Group.png";
import whyimg1 from "./Group (1).png";
import whyimg2 from "./Group (2).png";
import whyimg3 from "./Group (3).png";
import whyimg4 from "./Group (4).png";
import whyimg5 from "./Group (5).png";
import glow from "./Rectangle 23.png";

export default function Why() {
    return(
        <div>
            <div>
                <hr className="whyhr1"></hr>
                <h3 className="whyh3">Why</h3>
                <hr className="whyhr2"></hr>

                <h3 className="whyh31"><b>Atlas Limited Partnerships</b></h3>
                <p className="whyp">We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail, multi-family and office buildings investment opportunities.</p>

                <div className="whycon">
                    <div className="whycondiv">
                        <div className="wimgcon">
                            <img src={whyimg} alt="img"></img>
                        </div>
                        <h4>Invest Alongside The Experts</h4>
                        <p>We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail</p>
                    </div>
                    <div className="whycondiv">
                        <div className="wimgcon">
                            <img src={whyimg1} alt="img"></img>
                        </div>
                        <h4>Invest in San Diego</h4>
                        <p>We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail</p>
                    </div>
                    <div className="whycondiv">
                        <div className="wimgcon">
                            <img src={whyimg2} alt="img"></img>
                        </div>
                        <h4>Invest in Strong Asset Classes</h4>
                        <p>We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail</p>
                    </div>

                </div>

                <div className="whycon">

                    <div className="whycondiv">
                        <div className="wimgcon">
                            <img src={whyimg3} alt="img" ></img>
                        </div>
                        <h4>Hassle Free Investing</h4>
                        <p>We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail</p>
                    </div>

                    <div className="whycondiv">
                        <div className="wimgcon">
                            <img src={whyimg4} alt="img"></img>
                        </div>
                        <h4>Stable Cashflow</h4>
                        <p>We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail</p>
                    </div>

                    <div className="whycondiv">
                        <div className="wimgcon">
                            <img src={whyimg5} alt="img"></img>
                        </div>
                        <h4>Tax Benefits</h4>
                        <p>We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail</p>
                    </div>
                </div>
                <button className="but3"><b>Current Opportunities</b></button>
                <button className="but4"><b>Learn More About Investing</b></button>

                <img src={glow} alt="glow" className="glow"></img>
                <img src={glow} alt="glow" className="glow"></img>


            </div>
        </div>
    );
}