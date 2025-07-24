import React from "react";
import { useParams, Link } from "react-router-dom";
import { games } from "../data/games";
import { motion } from "framer-motion";
import "../styles/GameDetails.scss";

const GameDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const game = games.find((g) => g.id === id);

  if (!game) return <p className="p-8">Game not found.</p>;

  return (
    <motion.div
      className="game-details"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Link */}
      <Link to="/" className="back-link">← Back</Link>

      {/* Game Title */}
      <h1>{game.name}</h1>

      {/* Game Image */}
      <img src={game.image} alt={game.name} className="game-image" />

      {/* Rules Section */}
      <h2>Rules:</h2>
      <ul>
        {game.rules.map((rule, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            {rule}
          </motion.li>
        ))}
      </ul>

      {/* Tips Section */}
      {game.tips && game.tips.length > 0 && (
        <div className="tips-section">
          <h2>Tips & Strategies:</h2>
          <ul>
            {game.tips.map((tip, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
              >
                {tip}
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default GameDetails;