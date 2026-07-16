import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Snake from "./pages/Snake.jsx";
import Result from "./pages/Result.jsx";
import SnakeGame from "./pages/SnakeGame.jsx";
import "./App.css";
function App()
{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/snake" element={<Snake />}/>
      <Route path="/result" element={<Result />} />
      <Route path="/play" element={<SnakeGame />}/>

      
    </Routes>
    </BrowserRouter>
  );
}
export default App;
