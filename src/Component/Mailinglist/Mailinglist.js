import "./Mailinglist.css";
import bookcover from "./Book_Cover_Mockup 1.png";
import rectangle from "./White And Teal Modern Professional HR Performance Management Presentation (1).png";

export default function Mailinglist() {
    return(
        <div>
            <div className="formcon">
                <div className="subformcon">
                    <h3 className="formh3"><b>Join our email list now and get a free industry eBook</b></h3>
                    <form>
                        <lable for="fname" id="namef" >First name</lable>
                        <lable for="lname" id="namel">Last name</lable>
                        <input type="text" id="fname" name="fname" placeholder="First name"></input>
                        <input type="text" id="lname" name="lname" placeholder="Last name"></input>
                        <lable for="email" id="emaill">Email</lable>
                        <input type="text" id="email" name="email" placeholder="Ex jhondoe@gmail.com"></input>
                        <lable for="investor" id="investor">Are you an accredited investor?</lable>
                        <input type="radio" id="yes" name="investor" value="Yes"></input>
                        <lable for="investor">Yes</lable>
                        <input type="radio" id="no" name="investor" value="No"></input>
                        <lable for="investor">No</lable>
                        <lable for="About" id="aboutl">How did you hear about us?</lable>
                        <input type="text" id="about" name="about" placeholder="Type here your message"></input> 
                    </form>
                    <button className="but5"><b>join mailing list</b></button>
                </div>

                <div className="subformcon1">
                    <img src={bookcover} alt="bookcover" className="bookcover"></img>

                    <div className="subformcon2">
                       <div>
                            <p>1, Benefits of investing in real estate during uncertain times</p>
                            <p>2, Tax advantages of investing</p>
                            <p>3, Active Vs. Passive Investing</p>
                            <p>4, How Limited Partnerships work</p>
                            <p>5, How to find deals that are recession resistant</p>
                        </div>

                        <div>
                            <p>6, Markets that are recession resilient</p>
                            <p>7, How to Analyze deals in a rising interest rate environment</p>
                            <p>8, The common mistakes real estate investors make when searching for deals to invest in</p>
                        </div> 
                    </div>
 
                </div>
                
            </div>
            <div>
                <img src={rectangle} alt="rectangle" className="rectangle"></img>
                <h3 className="rectangleh3">Ready to Invest?</h3>
                <button className="but6">View Current Opportunities</button>
            </div>
        </div>
    )
}