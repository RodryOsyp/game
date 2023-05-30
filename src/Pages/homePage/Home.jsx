import React from "react";
import Content from "../../Componets/Content/Content";
import Header from "../../Componets/Header/Header";
import style from "./Home.module.css";
import { useState, useEffect } from "react";
import { useGameStore } from "../../store";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../../Componets/Error/ErrorPage";

const Home = () => {
  const allGames = useGameStore((state) => state.allGames);

  return (
    <>
      {allGames.length === 0 ? (
        <ErrorPage />
      ) : (
        <>
          <Header /> <Content games={allGames} />
        </>
      )}
    </>
  );
};

export default Home;
