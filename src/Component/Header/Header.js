import "./Header.css";
import logo from "./cvbcv 1.png";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div>
            <div className="headercon">
                <img src={logo} alt="logo" className="logo"></img>
                <ul>
                    <Link to=''><li>Home</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                    <Link to='/FAQ'><li>FAQ</li></Link>
                    <Link to='/terms'><li>Terms and condtions</li></Link>

                </ul>
                <button>Register</button>
            </div>
        </div>
    )
}