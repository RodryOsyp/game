import React from "react";
import Content from "../../Componets/Content/Content";
import Header from "../../Componets/Header/Header";
import style from "./Home.module.css";
import { useState, useEffect } from "react";
import { useGameStore } from "../../store";


const Home = () => {
  const allGames = useGameStore((state) => state.allGames)
 

 
  return (
    <>
      <Header   />
      {allGames.length > 0 && <Content  games={allGames} />}
    </>
  );
};

export default Home;
