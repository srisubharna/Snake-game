import SnakeGame from "./SnakeGame";
import {Link} from "react-router-dom" ;

function Result()
{
    const highScore=localStorage.getItem("score");
    const timer=localStorage.getItem("lastTime");
    return(
    <div>
        <h2>Game End</h2>
        <h3>High Score :{highScore} </h3>
        <h3>Time Played :{timer} </h3>
        <Link to="/snake">
            <button>Restart</button>
        </Link>
        <Link to="/">
            <button>Home</button>
        </Link>
    </div>
    )
}
export default Result