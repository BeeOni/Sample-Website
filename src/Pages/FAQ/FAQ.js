import "./FAQ.css";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import eclipse from "./Ellipse 2.png";

export default function FAQ(){
    return(
        <div>
            <div>
                <Header/>
                <img src={eclipse} alt="eclipse" className="eclipse1"></img>
                <h1 className="faqh1">FAQs</h1>
                <div className="faqcon">
                   <div className="faqsubcon">
                        <div className="faqcondiv">
                            <p className="faqconp"><b>What is Webflow and why is it the best website builder?</b></p>
                            <p className="icon1">-</p>
                        </div>
                        
                        <p className="faqconp1">Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.</p>
                        <hr className="faqhr"></hr>

                        <div className="faqcondiv">
                            <p className="faqconp">What is your favorite template from BRIX Templates?</p>
                            <p className="icon2">+</p>
                        </div>

                        <hr className="faqhr"></hr>

                        <div className="faqcondiv">
                            <p className="faqconp">How do you clone a template from the Showcase?</p>
                            <p className="icon3">+</p>
                        </div>

                        <hr className="faqhr"></hr>

                        <div className="faqcondiv">
                            <p className="faqconp">Why is BRIX Templates the best Webflow agency?</p>
                            <p className="icon4">+</p>
                        </div>

                        <hr className="faqhr"></hr>

                        <div className="faqcondiv">
                            <p className="faqconp">When was Webflow officially launched?</p>
                            <p className="icon5">+</p>
                        </div>

                        <hr className="faqhr"></hr>

                        <div className="faqcondiv">
                            <p className="faqconp">How do you integrate Jetboost with Webflow?</p>
                            <p className="icon6">+</p>
                        </div>  
                   </div>

                   <div>
                        <div className="faqcondiv">
                            <p className="faqconp">What is your favorite template from BRIX Templates?</p>
                            <p className="icon7">+</p>
                        </div>

                        <hr className="faqhr"></hr>

                        <div className="faqcondiv">
                            <p className="faqconp">How do you clone a template from the Showcase?</p>
                            <p className="icon8">+</p>
                        </div>

                        <hr className="faqhr"></hr>

                        <div className="faqcondiv">
                            <p className="faqconp"><b>What is Webflow and why is it the best website builder?</b></p>
                            <p className="icon9">-</p>
                        </div>
                        
                        <p className="faqconp1">Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.</p>
                        <hr className="faqhr"></hr>

                        <div className="faqcondiv">
                            <p className="faqconp">Why is BRIX Templates the best Webflow agency?</p>
                            <p className="icon10">+</p>
                        </div>

                        <hr className="faqhr"></hr>

                        <div className="faqcondiv">
                            <p className="faqconp">When was Webflow officially launched?</p>
                            <p className="icon11">+</p>
                        </div>

                        <hr className="faqhr"></hr>
                        
                        <div className="faqcondiv">
                            <p className="faqconp">How do you integrate Jetboost with Webflow?</p>
                            <p className="icon12">+</p>
                        </div>

                   </div>
                </div>
                
                <Footer/>
            </div>
        </div>
    );
}