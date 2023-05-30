import React from "react";
import style from "./Header.module.css";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useGameStore } from "../../store";


const Header = () => {
  const total = useGameStore((state) => state.total)
  // console.log(total);
  // const [Counter,setCounter] = useState()
  return (
    <header className={style.header}>
      <Link to={"/"}>
        <h2>Game Store</h2>{" "}
      </Link>
      <div className={style.cart}>
        <Link to={"/cart"}>
          <GiShoppingCart size={45} className={style.cart_icon} />
          <span>
            Price: {total}$ 
            
            </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
