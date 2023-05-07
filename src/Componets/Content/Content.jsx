import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import GameCard from "../GameCard/GameCard";
import style from "./Content.module.css";

const Content = ({ games }) => {
  // console.log(games);
  return (
    <div className={style.content}>
      {games &&
        games.map((game) => (
          <>
            <GameCard key={game.id} game={game} />
          </>
        ))}
    </div>
  );
};

export default Content;
