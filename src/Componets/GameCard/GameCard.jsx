import React from "react";
import { useGameStore } from "../../store";
import Button from "../Button/Button";
import styles from "./GameCard.module.css";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  const addedGames = useGameStore((state) => state.addedGames);
  const addingGame = useGameStore((state) => state.addingGame);
  const addHandler = (game) => {
    addingGame(game);
    console.log(addedGames);
  };
  return (
    <div className={styles.card}>
      <div className="photo">
        <Link to={{ pathname: "/game", state: { data: game } }}>
          <img
            src={game.img}
            alt={game.title}
            onClick={() => console.log(game)}
          />
        </Link>
      </div>
      <h2 className={styles.title}>{game.title}</h2>
      <h3 className={styles.category}>{game.category}</h3>
      <div className={styles.buy}>
        <h2 className={styles.price}>{game.price}$</h2>
        <Button
          game={game}
          onClick={() => addHandler(game)}
          className={styles.button}
          title={"В корзину"}
        />
      </div>
    </div>
  );
};

export default GameCard;
