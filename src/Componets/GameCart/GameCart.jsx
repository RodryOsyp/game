import React from "react";
import { useGameStore } from "../../store";
import Button from "../Button/Button";
import style from "./GameCart.module.css";
import { IoIosTrash } from "react-icons/io";


const GameCart = ({ game }) => {
  const removeGame = useGameStore((state) => state.removeGame)
  console.log(removeGame);
  return (
    // <div className={style.cart}>
      <div className={style.game}>
        <div className={style.title_game}>
          <img src={game.img} alt="" />
          <div className={style.desc}>
            <h1>Description:</h1>
            {game.description}
            <div className={style.cat}>
              <h1>Category:</h1>
              {game.category.toUpperCase()}
            </div>
          </div>
          <IoIosTrash onClick={()=>removeGame(game.id)} className={style.icon} />
        </div>
      </div>
    // </div>
  );
};

export default GameCart;
