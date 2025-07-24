import { useState, useEffect } from "react";
import { games } from "../data/games";
import GameCard from "../Components/GameCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Home.scss";

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [gameOfTheDay, setGameOfTheDay] = useState(games[0]);
  const navigate = useNavigate();

  // Pick a random game for Game of the Day
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * games.length);
    setGameOfTheDay(games[randomIndex]);
  }, []);

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      className="home-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Game of the Day Banner */}
      <div className="game-of-the-day">
        <h2>Game of the Day</h2>
        <div
          className="game-banner"
          onClick={() => navigate(`/game/${gameOfTheDay.id}`)}
        >
          <img src={gameOfTheDay.image} alt={gameOfTheDay.name} />
          <div className="banner-content">
            <h3>{gameOfTheDay.name}</h3>
            <p>{gameOfTheDay.shortDescription}</p>
            <button>View Details</button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {["All", "Card Game", "Board Game", "Board & Card Game"].map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Game Cards */}
      <div className="home-container">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <GameCard
              key={game.id}
              name={game.name}
              image={game.image}
              description={game.shortDescription}
              onClick={() => navigate(`/game/${game.id}`)}
              category={game.category}
            />
          ))
        ) : (
          <p className="no-results">No games found.</p>
        )}
      </div>
    </motion.div>
  );
};

export default Home;