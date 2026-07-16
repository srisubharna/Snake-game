import {useState, useEffect} from "react";
import Result from "./Result.jsx";
import {Link } from "react-router-dom";
import {Navigate} from "react-router-dom";
import "../App.css";

    
function SnakeGame()
{
    function createfruit()
    {
        let x=Math.floor(Math.random()*25)*20
        let y=Math.floor(Math.random()*25)*20
        setFruit({x,y})
    }
    function createWalls()
    {
        let temp=[]
        for (let i=0;i<15;i++)
        {
            let x=Math.floor(Math.random()*25)*20;
            let y=Math.floor(Math.random()*25)*20;
            temp.push({x,y});
        }
    setWalls(temp);
    }
    const [snake,setSnake]=useState([{x: 100 ,y: 100}]);
    const [direction,setDirection]=useState("RIGHT");
    const [timer,settimer]=useState(0)
    const [endGame,setEndGame]=useState(false)
    const [walls,setWalls]=useState([])
    const [fruit,setFruit]=useState({x: 100 ,y: 100})
    const [Grow,setGrow]=useState(false);
    const [speed,setSpeed]=useState(()=>{
        return localStorage.getItem("Speed");
    })
    const [highScore,setHighScore]=useState(()=>{ 
        return Number(localStorage.getItem("score"))||0;
    });

    useEffect(()=>
    {
        createfruit()
    },[]);

    useEffect(()=>
    {
        let head={... snake[0]}
        if (head.x==fruit.x && head.y==fruit.y)
            {
                createfruit();
                setGrow(true);
            }
    },[snake]);

    useEffect(()=>
    {
        createWalls()
    },[]);
    
    useEffect(()=>
    {
        let value=snake[0]
        let check={... value}
        if (check.x>=500 || check.y>=500 ||check.x<=0 || check.y<=0)
            setEndGame(true)
        else
        {
            for (let wall of walls)
            {
                if (check.x==wall.x && check.y==wall.y)
                {
                    setEndGame(true);
                }
            }
        }
    },[snake,walls]);
    useEffect(()=>
    {
        localStorage.setItem("score",highScore)
        
    },[highScore]);

    useEffect(()=>
    {
        if (endGame)
        {
            localStorage.setItem("lastTime",timer);

        }
    },[endGame]);

    useEffect(()=>
    {
        const interval=setInterval(()=>
        {
            settimer(prev=> prev+1)
        },1000);
        return ()=>clearInterval(interval);
    },[]);

    useEffect(()=>
    {
        if (timer>highScore)
    {
        setHighScore(timer)
    }

    },[timer,highScore]);

    useEffect(()=>{
        const handlekeyDown =(e) =>
        {
            switch(e.key)
            {
                case "ArrowUp":
                    setDirection("UP");
                    break;
                case "ArrowDown":
                    setDirection("DOWN");
                    break;
                case "ArrowRight":
                    setDirection("RIGHT");
                    break;
                case "ArrowLeft":
                    setDirection("LEFT");
                    break;
                default:
                    break;
            }
        };
        window.addEventListener("keydown",handlekeyDown);
        return ()=>window.removeEventListener("keydown",handlekeyDown);
    },[]);
    
    let delay=0
    if (speed=="Easy")
        delay=200
    else if(speed=="Medium")
        delay=100
    else if(speed=="Hard")
        delay=50
    
    useEffect(()=>{

        if (endGame) return;

        const interval=setInterval(()=>{  //timerp
            setSnake((prev)=>{
                const head=prev[0];
                let newHead={...head}
                switch(direction)
                {
                    case "UP":
                        newHead.y-=10;
                        break;
                    case "DOWN":
                        newHead.y+=10;
                        break;
                    case "LEFT":
                        newHead.x-=10;
                        break;
                    case "RIGHT":
                        newHead.x+=10;
                        break;
                    default:
                        break;
                }
                if (Grow)
                {
                    setGrow(false);
                    return[newHead, ...prev];
                }
                else
                    return [newHead,...prev.slice(0,-1)];
            });
        },delay);
        return ()=>clearInterval(interval);
    },[direction,endGame,Grow]);

    return (
        <div>
            <h4>High Socre : {highScore} </h4>
            <h4>Timer : {timer} </h4>
        <div className="game-board">
            
            {snake.map((part,index)=>
            (
                <div key={index} className="snake-block" style={{left:part.x, top:part.y}} />
            
            ))}
            {walls.map((values,index)=>
            (
                <div key={index} className="Walls" style={{left:values.x ,top:values.y}} />

            ))}
            
            <div className="fruit" style={{left:fruit.x ,top :fruit.y}} >🍎 </div>
            
            {endGame?(
                <Navigate to="/result"></Navigate> 
            ):null}
        </div>
        </div>
    );
}
export default SnakeGame;