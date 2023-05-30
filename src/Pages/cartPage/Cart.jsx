import React from "react";
import style from "./Cart.module.css";
import Header from "../../Componets/Header/Header";
import { TbShoppingCartX } from "react-icons/tb";
import { useGameStore } from "../../store";
import GameCart from "../../Componets/GameCart/GameCart";
import { Link } from "react-router-dom";

// const gamer = {
//   title: "Counter-Strike: Global Offensive",
//   price: "15",
//   id: "0",
//   description:
//     "Counter-Strike: Global Offensive - розрахована на багато користувачів комп'ютерна гра, розроблена компаніями Valve і Hidden Path Entertainment. Випуск гри для персональних комп'ютерів на операційних системах Windows і macOS, а також ігрових приставках Xbox 360",
//   img: "http://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6",
//   category: "shooter",
//   video: "https://youtu.be/edYCtaNueQY",
// };

const Cart = () => {
  const addedGames = useGameStore((state) => state.addedGames);
  const allgames = addedGames.map((game) => (
    <GameCart key={game.id} game={game} />
  ));

  return (
    <>
      <Header />
      {allgames.length > 0 ? allgames
       : 
        <>
          <div className={style.Header}>
            <h1>Cart is empty</h1>
          </div>
          <div>
          <Link to={"/"}>
            <h2>
              <TbShoppingCartX className={style.minus}/>
            </h2>
          </Link>
          </div>
        </>
      }
    </>
  );
};
export default Cart;
