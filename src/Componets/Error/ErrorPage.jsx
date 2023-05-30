import React from "react";
import style from "./Error.module.css";

const ErrorPage = () => {
  // console.log("error");
  return (
    <>
      <div className={style.error}>
        <div className={style.four}>
          <img src="./four.png" alt="" />
        </div>
        <div className={style.img}>
          <img src="./planete.png" alt="" />
        </div>
        <div className={style.four2}>
          <img src="./four2.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
