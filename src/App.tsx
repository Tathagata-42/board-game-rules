import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import GameDetails from "./Pages/GameDetails";

const App = () => {
  return (
    <Router basename="/board-game-rules">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetails />} />
      </Routes>
    </Router>
  );
};

export default App;