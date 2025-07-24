import { motion } from "framer-motion";
import "../styles/GameCard.scss";

interface GameCardProps {
  name: string;
  image: string;
  description: string;
  onClick: () => void;
  category:string;
}

const GameCard = ({ name, image, description, onClick,category }: GameCardProps) => {
  return (
    <motion.div
      className="game-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <img src={image} alt={name} className="game-card-image" />
      <div className="game-card-content">
      <span className="category-badge">{category}</span>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default GameCard;

