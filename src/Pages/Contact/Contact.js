import "./Contact.css";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import manwoman from "./White And Teal Modern Professional HR Performance Management Presentation (6).png";
import eclipse from "./Ellipse 2.png";

export default function Contact(){
    return(
        <div>
            <div>
                <Header/>
                <img src={eclipse} alt="eclipse" className="eclipse"></img>
                <div className="formcon11">
                    <div className="subformcon11">
                        <h3 className="formh3"><b>Contact Us</b></h3>
                        <form>
                            <lable for="fname" id="namef11" >First name</lable>
                            <lable for="lname" id="namell">Last name</lable>
                            <input type="text" id="fname" name="fname" placeholder="First name"></input>
                            <input type="text" id="lname" name="lname" placeholder="Last name"></input>
                            <lable for="email" id="emaill">Email</lable>
                            <input type="text" id="email" name="email" placeholder="Ex jhondoe@gmail.com"></input>
                            <lable for="About" id="aboutl">What can we help you with ?</lable>
                            <input type="text" id="about" name="about" placeholder="Type here your message"></input> 
                        </form>
                        <button className="butform"><b>join mailing list</b></button>
                    </div>

                    <div>
                        <img src={manwoman} alt="manwoman" className="manwoman"></img>
                    </div>
                
                </div>
                <Footer/>
            </div>
        </div>
    );
}