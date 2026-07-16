import SnakeGame from "./SnakeGame.jsx";
import {Link} from "react-router-dom";
import Easy from "../assets/pictures/Easy_mode.jpg";
import Medium from "../assets/pictures/Medium_mode.jpg";
import Hard from "../assets/pictures/Hard_mode.jpg";
import Game_icon from "../assets/pictures/Game_icon.png";
function Snake()
{
   function EasyMode()
   {
    localStorage.setItem("Speed","Easy");
   }
   function MediumMode()
   {
    localStorage.setItem("Speed","Medium");
   }
   function HardMode()
   {
    localStorage.setItem("Speed","Hard");
   }
    return (
        <div> 
            <Link to="/" ><div className="home"> Home</div></Link>
            <div className="intro">
            <img src={Game_icon} alt="icon" />
            <h2>Snake Game</h2>
            </div>
            <Link to="/play">
            <div className="Mode_btn">
            <button className="Easy" onClick={EasyMode}><img src={Easy} alt="Easy Mode"/>Easy</button>
            <button className="Moderate" onClick={MediumMode}><img src={Medium} alt="Medium Mode"/>Medium</button>
            <button className="Hard" onClick={HardMode}><img src={Hard} alt="Hard Mode"/>Hard</button>
            </div>
            </Link>
        </div>
    );
}
export default Snake;