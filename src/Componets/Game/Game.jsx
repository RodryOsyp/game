import React from "react";
import style from "./Game.module.css";
import YouTube from "react-youtube";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { HiBackspace } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useGameStore } from "../../store";
// import ImageGallery from "react-image-gallery";


const opts = {
  height: "256",
  width: "450",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,

    controls: 0,
    mute: 1,
  },
};

const game = {
  title: "Counter Strike Global Offensive",
  price: "15",
  id: "0",
  description:
    "Counter-Strike: Global Offensive - розрахована на багато користувачів комп'ютерна гра, розроблена компаніями Valve і Hidden Path Entertainment. Випуск гри для персональних комп'ютерів на операційних системах Windows і macOS, а також ігрових приставках Xbox 360",
  images: [
    "http://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6",
    "https://img.championat.com/c/1200x900/news/big/y/f/v-cs-go-startovala-novaya-operaciya-riptide-chto-novogo_16322983754024851.jpg",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_92c05c1cb1319beb15ed92c63b6b1d6f261d2f64.1920x1080.jpg?t=1668125812",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgh4Gsr4GRQjQvIFbbLQNgARQg6a4DwlQhQ&usqp=CAU",
  ],
  category: "shooter",
  video: "https://youtu.be/edYCtaNueQY",
};

const Game = () => {
  const [img, setImg] = useState("");
  const location = useLocation() 
  const { state } = location
  const data = state && state.data
  console.log(data);
  if(!data){
    return <Navigate to="/"/>
  }
return <div>Данние: {JSON.stringify(data)}</div>

  // const game = useGameStore((state) => state.selectedGames);
  // console.log(game);
//   return (
//     game && (
//       <>
//         {/* {game.description} */}

//         <div className={style.game}>
//           <div className={style.back}>
//             <Link to={"/"}>
//               <HiBackspace /> BACK{" "}
//             </Link>
//           </div>
//           <div className={style.title_game}>
//             <div className={style.grid}>
//               <YouTube
//                 className={style.you}
//                 videoId="edYCtaNueQY"
//                 opts={opts}
//               />
//               <div className="img">
//                 <img src={game?.images[0]} alt="" />
//                 <img src={game?.images[1]} alt="" />
//                 <img src={game?.images[2]} alt="" />
//                 <img src={game?.images[3]} alt="" />
//               </div>
//             </div>

//             <div className={style.desc}>
//               <h1>Description:</h1>
//               {game?.description}
//               <div className={style.cat}>
//                 <h1>Category:</h1>
//                 {game?.category.toUpperCase()}
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     )
//   );
 };

export default Game;
